---
layout: journal
title: "Intro to Angular"
excerpt: Diving into learning Angular and building an MVP for a digital form, on a deadline.
author: Max Lepper
categories: [journal]
tags: [angular]
date: 2022-01-29 13:12:07 -0400
modified_date:
published: true
status: live
confidence: log
context: true
comments: true
skills: [angular,typescript]
references: ["https://angular.io/"]
timespent: 1350
---

## Journal

{% include focus-box.html focus="Angular" theme="Technical Assessments" %}

### Summary of Results

Continuing from the last blog, I had a week to dive into learning Angular and complete my assessment. Most of this post will be learning notes and resources I found along the way, so I'll spare you the suspense and give the results up front!

Ultimately, I was able to invest a total of 20 hours into learning Angular, Angular Material, Rxjs, and Sass before the assessment deadline arrived. Coming from a React background, it was interesting to go through the whole project and not have to import anything beyond these!

The main thing I learned besides technical specifics, and kind of the hard way, was that I had accidentally taken some assumptions with me from React. Many of the challenges I encountered involved running into unexpected technical walls and struggling to find ways around them. My initial design ideas were absolutely biting off more than I could manage, given the time constraints and my lack of familiarity with the framework. I know I mentioned wanting to make a flexible solution, but being able to identify and deliver a simple MVP is just as important as a robust application to scale.

With Angular, I often found that I could find blogs, videos, and training resources that had functionality that matched what I was going for, but while functions or lines would compile and work in the video, I could not get them to work in the same way or oftentimes at all. I used Angular 12 as specified by the assessment requirements, yet the vast majority of the resources I encountered were for for Angular 8, 6, and 2. Similar to converting classes to hooks in React, I'm sure this is a familiarity issue that could be overcome with more time and practice within the framework.

By the end of the deadline, I unfortunately was unable to deliver a working prototype to the satisfaction of all the requirements. The key components were all in place and working to an extent, but I was struggling to get everything working together cohesively.

If I could do it over again, I would focus on building the entire form in a single component first from a directly imported JSON instead of fetched data (I used httpClient to pull in the placeholder JSON), then configure an injectable service for handling a form output subject, then refactor the form components down into individual pieces, and then _finally_ handle fetching the data and scaffolding it onto an interface to dynamically configure the form. I basically approached all of this from the exact opposite direction, haha.

Since the rest of this blog post is me working my way through the content for the first time, many of these notes were scribbled as I went, and I've since hopefully massaged them into something moderately readable. I've tried to group related information and supplemental links into sections, which you can jump to the ToC below.

## Table of Contents

* TOC
{: toc}

---

### Hello World - Angular First Look and Angular CLI

Time to dive into Angular! Time is tight, so I'm going to jump in right at the source: [https://angular.io/](https://angular.io/). The current version is Angular 12, so I needed to quickly upgrade NodeJS first, but then it was quick to get set up to start working.

As a quick reference to get us started, here are some common Angular CLI commands:
- `npm install -g @angular/cli` => Install Angular CLI on my local machine
- `ng new (app-name)` => Create a new project
- `ng generate component (component-name)` => Create a new component, which is then created as `<app-component-name>`
- `ng serve --port 4201 --open` => Serve the app locally with optional configurable ports and automatic browser opening (default port is 4200)
- `ng build` => Build for Production
- `ng build --base-href=/your-subpage/` => Build for Production with a specified landing URL
- `ng add @angular/material` => Add Angular Material (or other dependency)

The example project in the official docs is hosted on StackBlitz, which I've not used before, but it seems like a nice way to try things out. I normally use Firefox but had to use Chrome for StackBlitz to work. I'll be following along with this for my initial notes:
- <https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html>

Angular is built from components, so somewhat similar assembly-wise to React:
- <https://angular.io/guide/architecture-components>

Angular Components are made up of three key pieces:
- A TypeScript file (ts) that holds our JavaScript
- The HTML ("template") file, where we structure the actual HTML output to the DOM
- The CSS ("style") file, where we style our component

Angular uses something called Structural Directives to bind logic (TS) to the template (HTML), so for example, iterating over elements in an array or Object, or choosing if a tag should be displayed:
- `*ngFor`
- `*ngIf`
- `[ngSwitch]="switching.value"`, `*ngSwitchDefault` and `*ngSwitchCase`
- <https://angular.io/guide/structural-directives>
- <https://angular.io/api/common/NgForOf>
- <https://angular.io/api/common/NgSwitchCase>
- <https://ultimatecourses.com/blog/angular-ngif-else-then>

Also in the template, you can bind data and events to elements:
- `[ ]`, or **property binding**
	- Allows us to use the property value in a template expression
- `( )`, or **event binding**
	- In HTML:
```html
<button (click)="share()">
  Share
</button>
```
	- This binds a click event to the `share()` function in the TS file.
- {% raw %}`{{ }}`{% endraw %}, or the **interpolation syntax** in Angular
	- This can expose values from the TS file in the template, so things like `{{ x.value }}`
	- This syntax supports pipe modifiers to modify the value, not unlike Liquid.
	- <https://angular.io/guide/pipes>

The Angular CLI seems very robust fresh out the box. You are able to quickly generate boilerplate for a new component and it handles adding the imports and folders and everything. Let's say we want to make a `product-alerts` component - we can do that with the command `ng generate component product-alerts`. You can also use the CLI to generate services and many other things. I had to install a package to do something similar in React! 

In the new component logic (TS) file, there's a `@Component()` decorator that describes the files that make up the component:
- The selector describes how we can reference the component in the template, so for example a selector value of `app-product-alerts` for the `product-alerts` component would be `<app-product-alerts>` when referenced in HTML. 
- The templateUrl is the file path to the HTML file
- The styleUrls is the file path to the CSS file

When we're sharing information directly between parent and child components, we can use Angular packages like `import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';` to send and receive data.

The `@Input()` decorator indicates that the property value passes in from the component's parent.

`@Output()` allows the component to emit an event when the assigned value changes.

The parent acts when the child raises the event.
- <https://angular.io/guide/component-interaction>

### Router

Angular comes with a router module ready to go! We can specify routes, and the component we reference for that path will be injected at our router outlet. For example, in `app.module.ts`:

```ts
RouterModule.forRoot([
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
])
```

Now we can create a link to these endpoints with `routerLink` and an array, like so:

```ts
<a
  [title]="product.name + ' details'"
  [routerLink]="['/products', product.id]">
  {{ product.name }}
</a>
```

In this example, `/products` is fixed, but then the segment after that is the value of `product.id`, dynamically creating our endpoint URLs from our `product` object.

Router
- <https://angular.io/guide/router>
ActivatedRoute
- <https://angular.io/api/router/ActivatedRoute>
`[routerLink]`
- <https://angular.io/api/router/RouterLink>

`constructor(private route: ActivatedRoute) { }`
> "ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters. By injecting ActivatedRoute, you are configuring the component to use a service."

- <https://angular.io/start/start-data>
- <https://angular.io/api/router/ActivatedRouteSnapshot>

### Structure Changes

With a little learning under my belt to start, I decided to revisit my initial structure ideas. Here's what I started with:

- App
	- App bar
		- Menu (toggle sidenav?)
	  - Client logo/name
	- Body
		- Question (on form page only)
			- QuestionText
			- [
          dropdownField,
          radioField,
          booleanField,
          textField
      ]
		- Response (on Review page only)
			- Question Text (reused)
			- AnswerText
		- ActionButtons
			- Button

I made a few adjustments and simplified things. Now the structure, as reflected by actual components, is as follows:

- app
  - question-form
		- question-block [
 			- {% raw %}{{ directly display question }}{% endraw %}
 			- [
   			  answer-field-dropdown,
          answer-field-radio,
          answer-field-checkbox,
          answer-field-input
      ]
	  ]
		- button
  - response-form
    - response-block [
			- {% raw %}{{ directly display question }}{% endraw %}
			- response-text
    ]
    - button

I decided to use Material Cards for the question-block and response-block components and add them to the question-form reusing the existing CSS rules from the project starter. I probably could have used mat-grid-list and mat-grid-tile to make things more consistent, but this was clean and functional for now.

Angular Material seems to be set up to be a little accessible out of the box! I'll need to review the proper terms and labels and where to use them.
- <https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/>

### Forms

In hindsight, I approached forms completely wrong, and learned the error of my ways fairly late into the process. It seems that the better approach is to build a complete form and then refractor it into child components, establishing the links and structure and interfaces as you go.

- <https://www.youtube.com/watch?v=2DOkiQFB5ic>

When in parent component, we use `formGroupName` to name our group. When extracting a form element to a child component, we no longer have this because the child component does not have a form group (which explains a few of the errors I was getting). We can address this with `FormGroupDirective`:

```ts
import { FormGroupDirective } from '@angular/forms'

// Local reference to the parent component formGroup instance
form!: FormGroup

// Inject the FormGroupDirective
constructor(private rootFormGroup: FormGroupDirective) {}

// Grab the data from the parent component's formGroup
ngOnInit(): void {
  this.form = this.rootFormGroup.control
}
```

`rootFormGroup` is now the instance of the parent component's `formGroup`

In the template, we add:

```html
<ng-container [formGroup]='form'></ng-container>
```

to bind the local reference to the form instance to this form. Now, any `formGroupName`s DO exist, as they're referring to the declaration in the parent component.

We can take things one step further and remove the `formGroupName` binding in the component template by extending `ngOnInit` as so:

```ts
ngOnInit(): void {
  this.form = this.rootFormGroup.control.get('basicInfo') as FormGroup
}
```

Take it even further, and let's bind the `formGroupName` to the component instance in the parent component and pass it through, so we can further decouple the child component:

```ts
@Input() formGroupName!: string

ngOnInit(): void {
  this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
}
```

```html
<ng-container [formGroup]='form' [formGroupName]='basicInfo'></ng-container>
```

This approach looks much cleaner!

### Validators

For my input field component, I need to be able to validate the input. Specifically Social Security Numbers are required as part of the assessment, but it makes mention to applicant info, so it'd be nice to be set up to handle a few different types of inputs.

- Set a validator for a control in the FormGroup: `this.myForm.controls['controlName'].setValidators([Validators.required])`
- <https://angular.io/guide/form-validation>

Since SSNs are required, I wanted to start there. CodeProject has [an interesting article](https://www.codeproject.com/Articles/651609/Validating-Social-Security-Numbers-through-Regular) that goes into the history and format of social security numbers.

After reading through and working my way through the regex they present, I popped over to <https://regex101.com/> to verify, with a list of sample values to test against. I had to make a few adjustments, but I eventually fixed a few tiny syntax issues and got things working the way I wanted. Here's what I came up with:

```
/^(?!219-09-9999|078-05-1120)(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}|^(?!219 09 9999|078 05 1120)(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}|^(?!219099999|078051120)(?!(000|666|9))\d{3}(?!00)\d{2}(?!0000)\d{4}/
```

If you are using Angular 12.2 or higher, you can use the AbstractControl methods `addValidators`, `removeValidators`, and hasValidator, as per the docs:

```ts
if(this.businessFormGroup.get('businessType').value !== 'Other'){
    this.businessFormGroup.get('description').addValidators(Validators.required);
} else {
    this.businessFormGroup.get('description').clearValidators();
}
```

You can also use the following to modify validators:

- Remove the validator from the control in the FormGroup: `this.myForm.controls['controlName'].clearValidators()`

- Update the FormGroup once you have run either the above or add a new validator: `this.myForm.controls['controlName'].updateValueAndValidity()`

- <https://stackoverflow.com/questions/49075027/angular-dynamically-add-remove-validators>
- <https://stackoverflow.com/questions/38797414/in-angular-how-to-add-validator-to-formcontrol-after-control-is-created>

### Importing and Working with JSON Data

While I have a JSON prepared with data for two different forms, I'd like to pull it in with some of the framework of an API request, rather than a hard file import. This was pretty easy to set up, but I'm having some issues actually using the data at times. Objects and arrays are pointers to the memory, so when the value of an object or array changes, it often does not register as a true update, since the memory pointer itself has not changed. As such, I seem to have accidentally complicated things for myself!

- <https://www.techiediaries.com/angular-local-json-files/>
- <https://angular.io/tutorial/toh-pt6#import-heroes>
- <https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc>
- <https://stackoverflow.com/questions/66636142/the-parent-variable-is-not-updating-in-the-child-component-in-angular>

### Observables and Subjects

Observables and Subjects are key building blocks of Angular, and are responsible for communicating information and managing state.

To summarize, **Subjects are state, and Observables are a window into that State**.

#### Observables

Observables:
- Are an object that allows other pieces of code to subscribe to a value as listeners
- Are a representation of a Subject

Whenever the observed Subject changes, the Observable object receives an event that the Subject state has changed, and fires off events to all listeners, letting them know that there's a new value.

- <https://rxjs.dev/guide/observable>
- <https://rxjs.dev/api/index/class/Observable>

#### Subjects

Subjects:
- Are special Observables! It is an Observable that can be multicast to many Observers
- Are variables or properties that you actively save in state
- Maintain a registry of Observers
- Are often denoted with a dollar sign in the name

`const subject$ = new Subject<string>()` -> "I want this to be a subject of type string that I can create an observable of for other functions to subscribe"

We want to protect the data in the Subject and make access to state changes as limited as possible. If you can make the Subject private, then that's preferred, and keep your Observables public if necessary. We can limit access and the ability to update the Subject through functions.

- <https://rxjs.dev/guide/subject>

#### Explanation and Examples

Calling a function is an example of a "pulling" system, as a consumer calls a producer to return data. In this instance, the consumer is in control of the data.

A "pushing" system is like a promise:
- new promise => producer
- promise.then => consumer
- The producer is in control, in control of giving data to our consumer
- Consumer says "I want some data", then producer delivers at some point in the future

Observables are also like a push system, but for MULTIPLE values. We can think of it as a collection of values returned over time.

Subscribing to an Observable is like `promise.then()`, as it makes the Observable responsible to deliver data at some point in the future.

- <https://www.youtube.com/watch?v=zfkw87ckFnA>
- <https://www.youtube.com/watch?v=Tux1nhBPl_w>

**EXAMPLE**
Let's say we have a shopping bag:
- Subject -> cart grand total as `grandTotal$`
  - Want to update the grand total when a new line item added
  - Only want as a private property of our shopping bag
  - `calculateGrandTotal()` -> Responsible for figuring out what the total should be
  - `setGrandTotal()`, control how the value is adjusted and set it to the `.next()` value of our Subject
- We don't want to access the Subject directly, and don't want other things to be able to change state, so we expose the grand total value like:
  - `grandTotal$.asObservable`

#### Rxjs

Rxjs is the name of the library used to manage state, and is a:
> "Funnel-like approach to handling asynchronous code."

- `npm install rxjs`
- `import { Observable } from 'rxjs/Observable';`
- `import { of } from 'rxjs';`
- `import { map } from 'rxjs/operators';`

- <https://angular.io/guide/rx-library>
- <https://rxjs.dev/guide/overview>
- <https://www.youtube.com/watch?v=T9wOu11uU6U>

### Interfaces

In short, an interface in TypeScript is a model for all of the properties and data types and functions of an object. We can assign data to object `as` our interface type to expose these properties and functions for use.

This is something that I dug into a bit late in the process, and didn't scribble down many notes. That being said, I did amass a few different resources, which I'll list here:

- <https://blog.logrocket.com/interfaces-in-typescript-what-are-they-and-how-do-we-use-them-befbc69b38b3/>
- <https://stackoverflow.com/questions/42216053/typescript-how-do-i-define-interfaces-for-nested-objects>
- <https://stackoverflow.com/questions/60313918/how-to-create-an-interface-for-object-and-array-of-objects-in-angular-8-and-type>
- <https://stackoverflow.com/questions/43833726/creating-an-interface-with-an-array-of-variable-length-containing-objects-in-ty>
- <https://www.youtube.com/watch?v=ByHw_RMjkKM> (This video is almost exactly what I've wanted to do. Too bad I found it literally within the last hour before submitting!)

I also came across this useful tool to generate a TypeScript interface from a JSON:
- <https://transform.tools/json-to-typescript>

I was pleased to see that my initial stab was pretty close! I had only missed `export type Root = Root2[]`, tying my top-level object (forms) to an array of objects (form), which seems very obvious in retrospect.

### Supplemental Training

I really enjoy the pace of Fireship's courses and videos, and their "X in 100 Seconds" series on YouTube has been a great diving-in point to quickly evaluate what a tool is used for and if it might work for an application. I discovered that they also have an Angular course, which is free for up through the first 7 modules:
- <https://fireship.io/courses/angular/>

### Pipelines and Meta

The CI/CD pipeline for this project was a bit more of an effort than I originally anticipated.

Initially, I was getting a "WARNING: build: no matching files" error that was preventing the build stage of my pipeline from generating artifacts. Initially the files were not created due to exceeding a budget for the CSS for the main app, which I had simply extracted from the app component to make things easier to work with. After bumping up the budget, the next issue was a silly error I chased where I was still referencing default React build artifacts and not the Angular build artifacts, but that was quickly resolved once I noticed.

Once the pipeline was succeeding, the next issue was that the resulting page was completely empty! It turned out that I forgot that I need to change the base URL for GitLab Pages or else it thinks it's at a subpage with the same name as my repo. This was a fairly easy adjustment with the build option `base-href`:
- <https://angular.io/guide/deployment#the-deploy-url>
- <https://medium.com/@ana.dvorkina/deploy-your-angular-cli-project-to-gitlab-pages-24bff07b90be>

Experimenting with this and triggering the runner did create a few commits, though, so I was hoping to squash them down. I've not done this kind of operation on a live repo before, so I pulled up a few references:
- <https://www.youtube.com/watch?v=mBCJCuU3p7I>
- <https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/#situation-3-i-need-to-add-remove-or-combine-commits>
- <https://www.youtube.com/watch?v=FSWFgTGTvbM>
- <https://medium.com/@catalinaturlea/clean-git-history-a-step-by-step-guide-eefc0ad8696d>

I messed it up somewhere along the line though, so I don't want to mess up the repo more than I have to and might just leave it alone for now. A clean repo isn't very useful if I run out of time for the actual app!

In the process of these tiny QoL tweaks, I also found some nice little tools for previewing index metadata:
- <https://metatags.io/>
- <https://www.heymeta.com/>

---

## Closing Notes

Overall, this assessment was a great opportunity to dig into Angular and see how things work. I'm not sure that I will continue with it, as I believe I would rather start over fresh and structure things differently and more simply to start, refactoring down to manageable components. If I do decide to continue, or if I attempt it again on my own time, here's a list of questions and area to improve:

**Remaining Issues**

- How do I properly manage my dynamically added formGroup components?
- Am I using my interfaces correctly, and does it properly handle the variety of data supplied?
	- Forms don't actually get selected by ID right now, but by index. I was struggling to get TypeScript to allow me to reference the ID property of my Forms object and use it in a filter pipe.
- How do I force events to update correctly and at the right time when updating objects and arrays? Tried a few options but none seem to work in Angular 12
- Accessibility is not great, lots of room for improvement across the board
  - Aria properties
  - Color contrast for text on errors is poor
  - Keyboard navigation seems to be okay, but unsure if users can press buttons
    - <https://torsten-muller.dev/angular/navigation-in-an-angular-application-using-keyboard-shortcuts/#implementing-the-components-reacting-to-key-presses>


**Nice to Haves**

- Make input field widths resize automatically
	- <https://stackblitz.com/edit/angular-input-dynamic-width?file=app%2Finput-text-width-example.html>
- Make selecting a different form from either an input field variable or a URL query
- Be able to scroll through form responses based on a submission ID
- A navigation panel that makes sense for the form flow

## Time Summary

This has been a wild two weeks! In addition to this assessment and a few other conversations, we discovered that our furnace needs to be replaced, our sewer line backed up into the house, a family member tested positive and my partner and I had to quarantine, do contact tracing and get tested (all good here), and just generally scrambling to keep things together. Thankfully, the Silver is Gold team has been incredibly supportive and encouraging, and I was able to postpone tasks to focus on this assessment. Given everything going on, I feel like I did alright, considering!

- 1/13
  - 1.5h (Documentation)
- 1/17
  - 1h
- 1/18
  - 1.5h (GitLab CI for GitLab Pages)
- 1/19
  - 5h
- 1/20
  - 1.5h
- 1/21
  - 2h
- 1/22
  - 4hr
- 1/23
  - 4.5h
- 1/24
  - 1.5h
  - DEADLINE