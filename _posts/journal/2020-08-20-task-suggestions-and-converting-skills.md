---
layout: journal
title: "Task Suggestions and Converting Skills"
excerpt: Suggesting new tasks with an empty backlog, and pulling all skills over to the new format.
author: Max Lepper
categories: [journal]
tags: [liquid]
date: 2020-08-20 23:01:42 -0400
modified_date: 2020-09-07 19:41:11 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [liquid, html, javascript]
references: ["https://shopify.dev/docs/themes/liquid/reference/objects/for-loops"]
timespent: 180
sleep:
recreation:
workout:
---

## Journal

First thing today, all old skill formats were converted over to the new format. I have been slow to actually start building out entries, so I added a "to sort" skill for organizational purposes. This list will hopefully encourage me to dump in new data, and then I can work to whittle it down to empty.

To bolster my landing page SEO, I added a proper `h1` header to the home layout, along with a quick blurb, and now my audits are looking a little bit better. The pipeline will need to be updated to serve zipped files, which I already have experience with from [my portfolio](https://maxlepper.me) and [AGWSU](https://agwsu.org).

In an effort to have the Task page opening text be more helpful, I wanted the page to recommend "not started" tasks to start if my backlog was empty. I spent hours trying to figure out sequencing to collect and iterate through the data, but to still have the initial `div` update correctly. The issue is that I need to parse all of the entries FIRST before I can output if there are X tasks today or if there is a task recommendation instead. This feels like a place where React would really shine. I tried manually building the element structure and using append child, then I tried combining the loops with forloop triggers, and next with imports....but eventually settled on re-calling the collection loop. I feel bad about it, but there's a certain amount of time where it makes more sense to move on, learn more, and come back to it later.

My wife's computer motherboard has slowly been fading on us, so she had recently built out a new rig and ordered parts. Everything arrived today, so we spent the rest of the evening putting it together.

## Tasklist

- [x] All skills to new format
- [x] When no IP/UN flagged tasks, suggest new tasks from NS-flagged tasks
- [x] Update title page to add H1 and H2 headers
- [ ] <span title="Task to be added to next entry">=></span> Gzip project files as part of pipeline to serve via Pages