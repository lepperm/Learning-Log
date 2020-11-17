---
layout: journal
title: "Adding Polish to Hook Clock"
excerpt: Fixing up a few remaining issues, and adding documentation and finishing touches to Hook Clock.
author: Max Lepper
categories: [journal]
tags: [react,hook clock]
date: 2020-11-12 22:54:11 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript]
references: ["https://miklb.com/blog/2016/04/26/organizing-jekyll-posts/","https://maxlepper.gitlab.io/hook-clock/","https://codesandbox.io/embed/r9y95vr5n","https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui","https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/45#issuecomment-442885173","https://www.npmjs.com/package/prop-types","https://jsdoc.app/about-getting-started.html","https://www.valentinog.com/blog/jsdoc/","https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf"]
timespent: 230
sleep: 190
recreation: 30
workout: 20
---

## Journal

With nearly 80 posts on this blog now, the contents of my `_posts` folder in VS Code is longer than the full height of my screen! Out of curiosity, I checked to see if there was an easy way to introduce better structure. I quickly found a blog post that confirmed that [directory structure can be added to `_posts` without disturbing permalinks]({{page.references[0]}}). This quick fix makes my project directly look much nicer!

It looks like `_includes`, which holds functions and chunks of code that get reused around the site, is more picky about specific paths, which makes sense but does make things a bit unwieldy. It does look like I could use `{% raw %}{% include_relative folder/filename %}{% endraw %}` to include additional files for specific individual blogs, so I'll have to keep that in mind for in the future. Learning Log is due for a large tune-up sometime soon, so I'm hoping to clean up tiny things along the way.

Having so much success with [Hook Clock]({{page.references[1]}}) last night was a great motivation boost, even if I did stay up far too late! 😪☕ I think I'd like to continue with it today and add things like prop types, more documentation, and hopefully a little more testing. Having one fairly polished project under my belt would be quite nice.

The only two things on the front-end that need fixing (at least, to my awareness) are:

- The "Hour Offset" field currently does not validate input
- Clock cards do not always have the same height within a row

I had looked into Text Field validation a little before but wasn't sure how to implement, so diving into the difficult one first. I quickly found a post discussing [how to invalidate a Text Field in MUI]({{page.references[3]}}). Similar to the clock themselves, I created a new object `offsetControls` to manage the validation state of the Offset field.

I'm already handling things with `onChange` by setting the state of `offset`. With the Text Field type set to "number" I get `<empty string>` from the event for any NaN values, which makes validation a bit easier!

```jsx
const onOffsetChange = (event) => {
  setOffset(event.target.value);
  if (event.target.value) {
    setOffsetControls({ error:false, helperText: "" });
  } else {
    setOffsetControls({ error:true, helperText: "Offset must be a number" });
  }
};
```

This allows you to type whatever you want into the field, and the error text seems to work great. When creating a new Clock, I perform a similar check and before creating the object and force any errors to a zero offset, resetting the fields after creation. My theme colors definitely needed to change, too.

For the cards, I found a great [CodeSandbox demonstrating how to make MUI Grid elements have the same height]({{page.references[2]}}). I changed my wrapper component from a `Card` to a `Grid` and implemented the changes, and it worked very nicely! However, it turned out that I didn't like the text justified to the bottom of the card, so I changed it to have the gap at the bottom of the cards, instead. Either way, it will be simple to adjust going forward.

With everything looking and working the way that I want, next up is polish! Starting with the Clock component, I looked into [adding Prop Types]({{page.references[5]}}) and adding to my [documentation]({{page.references[6]}}). JSDocs is really neat, but there are a lot of options and elements that I'm not super familiar with just yet, so I took a look at a [basic overview of what documentation I should be adding]({{page.references[7]}}) and [a few further tips]({{page.references[8]}}).

Once everything was fairly documented, I pushed the code and deployed live. I had asked Neal earlier if he would be willing to review my code and identify areas to improve, so I sent everything out and then sleepily shuffled off to bed to catch up on sleep.

## Tasklist

- [x] Clean up and document Hook Clock
- [x] Deliver code to Neal for review/audit to identify areas to improve
- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Get Prettier working again