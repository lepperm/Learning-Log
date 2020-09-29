---
layout: journal
title: "Shipping, Blog Data, and Bookmarklets"
excerpt: Reading JFS, brainstorming solutions to my data file management issue, and creating a tool to solve a team problem at work.
author: Max Lepper
categories: [journal]
tags: [jfs, bookmarklet]
date: 2020-09-25 23:48:11 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [general]
references: ["https://shop.stackingthebricks.com/just-fucking-ship","https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70","https://www.gwern.net/Resorter","https://developers.google.com/analytics/devguides/reporting/core/v3/coreDevguide#build-a-core-reporting-api-query","https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154","https://dev.to/robertotonino/1-small-tip-to-improve-your-code-readability-3n5d"]
timespent: 215
sleep: 275
recreation: 120
workout: 0
---

## Journal

Today's main focus will be digging into [JFS]({{page.references[0]}}) so that I can complete it before October 1st. I'd love to compile easy-to-reference notes on Learning Log for this book, like I have with other resources so far, but that might be a bit of a faux pas - the resources I have summarized have all been free resources up until this point. That being said, I will give a little information about the book for anyone who might be interested. I'm pretty early on, but a reoccurring metaphor used so far is that shipping any project is very similar to planning and hosting a dinner party - most people could do it if they had to, and things like guest needs, expectations, and planning are all critical components to the event being an enjoyable experience. By breaking down a particular dinner party objective, they do a nice job of identifying the similarities to project objectives.

On blog improvements, I did a little reorganizing for how I generate JSON data powering the site's statistics. I still haven't gotten around to automating moving the data files at build time, and to be totally honest, I'm not sure the best way to do it. To generate the updated data files, the site has to be built once first. Then, the new data files have to be copied to the `_data` folder, and then the site has to be rebuilt to reflect the updated data. I was thinking that maybe I could do this with a custom rubygem, but now I'm not so sure this is the right way forward. It could probably work as part of my CI pipeline, where I build once, then move the files, then build again, however that seems pretty inefficient and like it would eat up extra pipeline time, which may be a scarce resource starting in October. If anyone has any suggestions (specific or non-specific "best practices"), please let me know in the comments below!

Reusing my existing `search.json` file for use with [Resorter]({{page.references[2]}}), I appended all of the newly added metrics. This makes for a pretty large JSON file (already 55kb!), but it also gives me a single source of truth to generate insights from these logs. Some day, I'd love to build a dashboard that I could log into and see a detailed breakdown of everything on here from a high level - status of all posts, [post analytics]({{page.references[3]}}), personal care metrics as a graph over time, all that good stuff.

Being the resident Trello geek at the office and responsible for getting multiple departments set up using it for project tracking in the first place, I was tasked with making it easier for people to get to the "Activity" header inside cards. On some cards in Engineering, we'll have multiple snippets of notes and requirements in the comments, multiple checklists, attachments, time tracking, related cards, and a long chain of activity notes at the very bottom.

Sometimes important details get initially missed because the bottom comments are so far down the page. Without a plugin or browser extension, there's no native way to move the activity chain closer to the top of the card. My initial thought was to add a simple link element to the new card template to jump to the Activity segment, but inspecting the page revealed that the sections do not use unique IDs for anchors.

In lieu of that, a bookmarklet seems like the next best option. If we can't use anchors, then we should be able to uniquely identify the Activity element and then scroll to it. The Activity element itself has three classes, and the combination of all three seems to reliably find the Activity section header bar. With the element exposed, `.scrollIntoView` adjusts things right where I want! Looking into the syntax, I added the option for smooth scrolling, because it can be a little jarring to have a full screen of content suddenly completely shift.

With the basic case out of the way, I also want to make sure that it fails cleanly and doesn't disrupt site use, both on and off Trello. I wrapped my logic in a `try...catch` statement and again in an anonymous function, and made the `catch` side just scroll to the bottom of the page (or card, if the correct element isn't found) rapidly.

Here's the finished bookmarklet:

```javascript
javascript:(function(){
  try {
    const element = document.getElementsByClassName("window-module-title window-module-title-no-divider card-detail-activity");
    element[0].scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    window.scrollTo({ top: document.scrollingElement.scrollHeight, behavior: 'smooth' });
  }
})();
```

[Modern JavaScript Explained for Dinosaurs]({{page.references[1]}}) was shared in my friend circle this morning and this is exactly the sort of thing I was looking for a few weeks ago! I did not have bandwidth to get into this much today, so I will be looking into it more soon. It starts with just JavaScript and incrementally builds on that foundation with modern tools to solve different problems, which would be great perspective.

## Tasklist

- [x] Read more of _Just F---ing Ship_
- [ ] <span title="Task to be added to next entry">=></span>May need to add a months value to min-to-time? Years??
- [ ] <span title="Task to be added to next entry">=></span> Set up and test Resorter
  - [x] <span title="Task carried over from previous day">=X</span> Collect post importance metrics in Liquid for resorting