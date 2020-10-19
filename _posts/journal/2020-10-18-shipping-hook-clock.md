---
layout: journal
title: "Shipping Hook Clock"
excerpt: Wrapping up my Hook Clock app and pushing it live.
author: Max Lepper
categories: [journal]
tags: [react,material-ui,hooks]
date: 2020-10-18 22:41:43 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,material-ui]
references: ["https://scrimba.com/course/greacthooks","https://reactjs.org/docs/hooks-overview.html","https://levelup.gitconnected.com/material-ui-how-to-implement-dark-mode-and-edit-theme-colors-effcfa0893b9","https://jsdoc.app/","https://material-ui.com/components/grid/","https://maxlepper.gitlab.io/hook-clock/"]
timespent: 545
sleep: 470
recreation: 150
workout: 30
---

## Journal

The last bit of my [Learn React Hooks]({{page.references[0]}}) class was wrapped up finally, and I tried to polish up my notes a bit more. Admittedly, I'm not too familiar with callbacks, so some of the content went over my head and I will need to review later. I have another progression item that gets more in-depth with `useCallback` and `useMemo`, which will be perfect when I'm ready.

Continuing with Hook Clock, I planned out how I wanted to refine my rough layout utilizing Material UI. Clocks would be Cards inside a Grid element, and the input fields would be converted over and kept in their own section. Since I'm adding Material UI anyway, I wanted to finally learn how to use and modify the Dark theme, and found a very [straight-forward blog post]({{page.references[2]}}) on the topic! Now that I'm more comfortable using styles, this seemed like a piece of cake.

On AGWSU, Neal has added documentation to classes and functions that then adds data to tooltips in VS Code. I'd like to get in the habit of doing this on smaller apps so that larger projects will scale, so I spent a while searching to try and find out how to do this. After a number of dead-ends, I found [JSdoc]({{page.references[3]}}). I'm not sure if this is actually what is being used, but the syntax matches what I've seen in AGWSU and seems to work great in Hook Clock.

The rest of the day was polishing the app and layout, reading a bunch and digging a bit deeper into Hooks, adding in documentation, setting up the repo, adding in CI and favicons and all the supporting content, and trying a few different variations for laying out the Hook Clock page. You can check it out live at [this link]({{page.references[5]}})!

The last main lingering issue in Hook Clock is removing clocks. Right now, the `Clock` element itself has a visibility state value, and it either returns the item or null. I feel like I should be able to take my `clockList` object in the `App`, filter out children with `false` visibility, and then `map` the remaining children to the DOM, cleaning up and properly stacking up all the clocks. I couldn't quite figure out how to get the filter working, however. Since I still haven't gotten back to TDC, wrapping this all up today was my minimum goal (honestly, I'm way over time already), so I've created a reminder to revisit things next month.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Look into React Hooks
  - [x] Complete React Progression [item #8]({{ site.baseurl }}/skills/react#8)
- [ ] Work on TDC Landing Page layout
- [ ] Push commit of updated layout and routing with main app scaffolding, short-circuit "GET STARTED" link to Landing, for now