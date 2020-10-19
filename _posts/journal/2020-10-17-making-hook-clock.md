---
layout: journal
title: "Making Hook Clock"
excerpt: Creating a small demo app to get hands-on practice using hooks.
author: Max Lepper
categories: [journal]
tags: [react,hooks]
date: 2020-10-17 23:55:21 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript]
references: ["https://medium.zenika.com/react-hooks-my-introduction-81b15e6eff20","https://scrimba.com/course/greacthooks","https://reactjs.org/docs/hooks-overview.html"]
timespent: 260
sleep: 410
recreation: 210
workout: 0
---

## Journal

We had a bit of an emergency around the house this weekend, so I've been reviewing my notes and re-reading some documentation to get my head back into thinking about React hooks. Some concepts seemed straight-forward enough while reading about them, so to test that I really was understanding how things worked, I started putting together a quick "Hook Clock" demo.

For the demo, I wanted to have the top-level `App` wrap the components, and then use form controls to capture an optional name and hour offset value with a submit button. The clock component(s) would be added to a list or grid below the controls and a default "local" clock.

I started by blocking out the app structure as classes, since that's what I'm more familiar with. The functionality was roughly blocked out with sample text and basic HTML elements, and simple Date objects to get the local time but without active updating.

Since class components and functional components can both be used, I went ahead converting my two main components, `App` and `Clock`, to functions one at a time. Next up was to get the clocks actually updating on each tick.

There are two issues with how I implemented this, and I'm not currently sure how to resolve them. To get the offset, I'm getting the current Date as milliseconds and adding the number of offset hours as milliseconds, and then feeding that value into a second Date object, which seems like maybe not the most efficient way to go about this. The second issue is that the tick interval across multiple clocks are not synced up, and it's pretty noticeable if you add a bunch of clocks in rapid succession. These are minor issues, however, and don't impact using the app for the time being.

Next up, I'd like to clean up the logic a bit, work on the layout, make things reactive, and add some documentation.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [ ] Look into React Hooks
  - [ ] Complete React Progression [item #8]({{ site.baseurl }}/skills/react#8)
- [ ] Work on TDC Landing Page layout
- [ ] Push commit of updated layout and routing with main app scaffolding, short-circuit "GET STARTED" link to Landing, for now