---
layout: journal
title: "Assessing Angular"
excerpt: Encouraged to attempt a technical assessment for Angular, I plan out my approach to tackling the project requirements.
author: Max Lepper
categories: [journal]
tags: [angular]
date: 2022-01-13 20:39:26 -0400
modified_date: 2022-01-18 21:27:44 -0400
published: true
status: finished
confidence: log
context: true
comments: true
skills: [general]
references: ["https://material.angular.io/components/categories","https://rxjs.dev/api/index/class/BehaviorSubject"]
timespent: 165
---

## Journal

{% include focus-box.html focus="Angular" theme="Technical Assessments" %}

A string of connections led me to a unique opportunity where I was encouraged to take a technical assessment for an Angular project. I've never used Angular before, but was curious to try things out and see what I could come up with! It's going to be a few days before I can truly dig in and get started programming, due to pre-existing commitments, but to hopefully counteract my late start, I'm jotting down notes, ideas, sketches, and references as I go to mentally build my approach while I'm away from my computer.

With this post (and potentially further posts), I want to record my thought process towards the design of this application, and walk through decisions and questions that come up along the way.

### Requirements

Something that I could get started on from anywhere was setting up my documentation. By writing out my thoughts, I can start to solidify my understanding of the problem and how to approach it, as well as try to identify any ambiguous details.

First up was creating a repository for the project in GitLab and adding a boilerplate Readme, to later fill with information on how to get started with the project. I pulled in and committed the User Story issue template developed during my time as the PM for the AGWSU.org project, with some minor adjustments. Eventually I would also like to pull in and modify my CI/CD script to automate deploying my commits to GitLab Pages, but that's definitely a future nice-to-have.

The requirements for the assessment were supplied on a single page. From that document, here's my take on what I should be delivering:

The app will be a landing page from with questions and answer fields of a few different types, the contents and types of which will have been pre-populated by the client as part of the design process, and an employee would use this form to ask interviewees questions and record their answers. From there, the answers would be saved, and then will be be displayed on a second review page.

From the text, I identified 7 key user stories:

1. The primary form will be a single page (US01)
2. The contents of the form can be saved (US02)
3. The form answers can be recalled from memory on a second "review" page (US03)
4. The form needs to support drop down questions (US04)
5. The form needs to support boolean questions (US05)
6. The form needs to support  radio group questions (US06)
7. The form needs to support social security numbers (US07)

I'll write up some basic Given-When-Then statements that could help inform testing requirements, but since I do not have a lot of experience creating tests in general, I may save attempting this only for if time allows.

### Design

I can definitely see how this assessment would test the approach to solving the problem, as there are many routes to the outcome specified by the requirements. While the easiest approach would be to create a bare bones hard-coded solution, the more useful solution would be determining a path that allows us to create a reusable and flexible set of components, and minimize future rework.

Or at least, that's my assumption. It could be that the intent is that I create a hard-coded form. If so, over-developing this prototype could be seen as a bad move. I believe a flexible solution would be far more illustrative of my design philosophy, so we might just have to see what happens! I'm not quite sure what to expect from this assessment, but my hope is that I will have an opportunity to discuss the approach and ideally get feedback and recommendations for how I could improve.

I have not yet had a chance to dig into Angular's documentation much, if it supports component creation similar to React, then I have an idea of how I think I'd like to structure things. Here's a pseudo-structure representation of what I'm initially thinking:

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

The main body will be a list, made up of `Question`, `Response`, or `ActionButtons` components. Each of these will act as a block-like wrapper that will house the subcomponents for the respective block.

My thinking is that the `Question` and `Response` components will accept a few parameters:

**Question**
- A string representing the question to be displayed to the employee, which will be mapped to `QuestionText`
- An answer format, which will allow us to specify how the answer should be presented to the employee (US04-07)
- Answer parameters, which will likely simply be strings for each possible answer for most of the types, however this could be used as a flexible modifier for text fields, and other possible answer types.

The answer format would then be used to determine which subcomponent to inject, and pass the answer parameters downstream.

**Response**
- A string representing the question from the form to be displayed to the employee, which will be mapped to `QuestionText` (same as above)
- A string containing the saved answer from the form to be re-displayed to the user as plain text.

The **ActionButtons** will be standard operations, so things like saving or clearing the form, or starting a new form (increment a response ID, or similar). On the review page, it could be used to cycle through multiple sets of saved responses by indexing up or down an array of response objects.

I'll have to dig into Angular to see what's typical or recommended, but if I'm able to pass entire components into other components, then I may be able to streamline things a bit.

Speaking of objects, it's probably time to think more specifically about how to structure the data for this project.

### Data Structuring

Depending on the size of this client and how many applicants they're interviewing on a regular basis, and how long they would want to maintain these responses, a real-world solution would likely have this information tied to a database. Similarly, different roles and departments may have different sets of questions, or that they may want to be able to tailor this process in the future. As such, we'd want to make sure that our Question and Answer components can easily be reused.

With this in mind, I'd like to create some JSON objects to structure our data. We'll have one object representing the form, and a second object representing the saved answers (however, the answers object will be entirely speculative, as I need to look into BehaviorSubject to fulfill the requirements - more on this below). The form object and response object will each need to have unique IDs, and the response object should reference the form ID, allowing us to match the answers to the questions.

The structure may end up looking something like this:

**Form Object**
```js
{
  "id": 1,
  "prompts": [
    {
      "question": "How likely are you to answer this question?",
      "answerFormat": "dropdown",
      "answerOptions": [
        "Very likely",
        "Slightly likely",
        "Slightly unlikely",
        "Very unlikely"
      ]
    },
    {
      "question": "How likely are you to answer this second question?", 
      "answerFormat": "radio",
      "answerOptions": [
        "Very likely",
        "Slightly likely",
        "Slightly unlikely",
        "Very unlikely"
      ]
    },
    {
      "question": "Please check this box to confirm you are able to submit a boolean answer.",
      "answerFormat": "boolean"
    },
    {
      "question": "Does this text field correctly validate to a social security number format? (xxx-xx-xxxx)",
      "answerFormat": "text",
      "answerOptions": [
        "socialSecurityNumber"
      ]
    },
    {
      "question": "Is this a plain text field with no validation?",
      "answerFormat": "text"
    }
  ]
}
```

**Form Response Object**
```js
{
  "id": 321,
  "formId": 1,
  "responses": [
    "Very likely",
    "Slightly likely",
    true,
    "123-45-6789",
    "Hello World"
  ]
}
```

Something that I'd normally want to validate with the Product Owner or client is where they see the project going and their "pie in the sky" idea. I've found that this can influence the way I design so that we don't get backed into a corner on future feature requests, due to an ambiguous detail or assumption made early on.

Similarly, I've not taken a project assessment like this before, so I'm unsure if deviating from the exact wording of the requirements form will dock me points. The item in question that I'm concerned about is the "text" answerFormat, specified in the Form Object:

```js
...
"answerFormat": "text",
"answerOptions": [
  "socialSecurityNumber"
]
...
```

Here, I've specified "socialSecurityNumber" as an option for the "text" answer type. My thinking is that, while most answer types will accept strings which represent the possible options for that answer, text fields could instead be modified by any number of text validation options - phone numbers, emails, character limits, URLs - far too many to implement without input from the client.

I would think that a default "text" answer should probably be just raw text input - names, sentences, etc. This exploration is beyond the explicit scope of the application requirements, but from a design standpoint, I believe it makes sense to plan to accommodate the future potential, regardless if I actually build a plain-text configuration state (or any other alternatives).

Beyond the form types, there are plenty of ways that this structure could easily be expanded upon. The two that come to mind most readily are:
- a flag for required fields
- a way to re-populate the question form fields with existing answers from a response ID, with the intent to update or change answers

Both of these are further outside of scope, but I think it makes for a good use case in how we could quickly enhance our form features.

The largest risks to this approach lies in the assessment requirements, which specifies saving "the applicant's info and all questions/answers" into a "behavior object." I currently have no idea what that means, so I should look into that second after the absolute basics. Additionally, the part about "the applicant's info" is a little confusing, as it's not mentioned what this would be. Are these free form text field questions to record things like name and contact info, which are not identified in the requirements (see my "text" field risks a few paragraphs above)? Could this be an applicant ID? It also mentions saving the questions AND answers, which would be unnecessary duplication of data if we were writing to a database, so I'm curious to learn more and see how much these initial thoughts will need to change.

### UX

One thing that has had me curious to look into Angular is that I've heard it uses a "batteries included" approach. Unlike React, where you almost need to dig around and try a bunch of things out to find the right tools for whatever you're doing (and hope that the maintainers don't abandon the project), it sounds like Angular comes with all the parts you need to create a functional web app. Angular Material is built by the Angular team, so there's far less concern about framework changes breaking components, or the library being abandoned entirely.

A quick browse through their [components list](https://material.angular.io/components/categories) looks like I'll have all kinds of great pieces to work with! Since we're creating a form, and looking at the components, a readily source of inspiration and reference for this could be Google Forms. Since Angular is entirely new to me, however, I will likely opt to prioritize function over form and leave any major customization until the end, time permitting.

### Summary

It's Wednesday as I write this, and my goal is to have the project submitted as early as possible, with a hard deadline of the Monday after next. I'll have about an hour Thursday, a few hours on Saturday, and then hopefully a few hours each evening next week with the exception of Wednesday. Wednesdays are when we normally hold sync meetings for Silver is Gold, after which I typically work to squash any new bugs or implement minor updates that were brought up during our discussion. I'm excited to give this my best effort!

### Addendum

Hello from Thursday! As I was writing this blog yesterday, I stopped myself and wondered if there would possibly be any privacy issues with me posting this, so I reached out to seek permission to be safe. As you can see, it was approved!

I was encouraged to ask any questions I had about the assessment and figured that, since I'm not familiar with what to expect from this process, it may be worth the potential risk to ask. After all, if I was on a team making these contributions, I'd likely bring up similar questions, so I feel that this may be the most authentic approach.

From the responses, it confirmed my suspicions that aspects of the requirements are intentionally ambiguous to help communicate a sense of my critical thinking and judgment. Additional clarifications offered were:

- For US02, I could reference [RxJS - BehaviorSubject](https://rxjs.dev/api/index/class/BehaviorSubject) to assist with understanding BehaviorSubject,
- For US03, the entry form should automatically navigate to the review page upon saving the form. Navigation beyond that is at my discretion.

This feedback may help me to focus in a bit tighter on the MVP for the requirements.

I've left my initial thoughts intact to more accurately record how my sense of the project and ideas change over the next few days with hands-on experience and new information.