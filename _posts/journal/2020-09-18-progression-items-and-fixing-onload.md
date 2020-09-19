---
layout: journal
title: "Progression Items and Fixing Onload"
excerpt: Fixing a broken onload event introduced with PWA updates, and adding more learning progression items to my backlog.
author: Max Lepper
categories: [journal]
tags: [mentality]
date: 2020-09-18 22:31:47 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [html, javascript]
references: ["https://www.dyn-web.com/tutorials/init.php","https://www.javascripttutorial.net/javascript-dom/javascript-onload/"]
timespent: 140
sleep: 390
recreation: 0
workout:
---

## Journal

There has been a hidden "to sort" skill page on this site up until now, but with today's log, I have made it visible below the Skills table, along with generic learning items. Following the logs from the past two days, it does make sense to record _some_ learning that can't be directly tied back to a single specific skill. The perspective and soft-skills from a diverse pool of learning materials will hopefully all contribute towards rounding me out as a developer and team member.

While testing, I noticed that the Crisp chat bubble wasn't in the lower right-hand corner for some reason. My first thought was that I had accidentally blown away the line that initializes it while working on other things, but everything was still there in my `onload` script. I sprinkled in a few console logs for testing, but nothing appeared on a refresh - the entire script was apparently not loading! To confirm, I tried using the search bar, and it completely dumped my query.

This points to the `window.onload` event not executing the script for some reason. I know that things were working a little over a week ago, as I have a test message to myself with a timestamp in Crisp. The main change made to the site since then has been the shift to PWA. Is it possible that there is some kind of interaction with the service worker? Could the cache be causing some sort of alternate functionality? Here's my current `onload` code:

```js
window.onload = init;

async function init(){ ... }
```

Reading up on [practices for onload]({{page.references[0]}}) and [how to properly handle the onload event]({{page.references[1]}}), I tried updating my implementation to the following:

```js
  window.addEventListener('load', function() { ... });
```

It worked! The service worker Jekyll plugin I'm using has it's own `window.onload` event, and by declaring my own, mine was being overwritten. By switching to the event listener, I'm able to attach multiple references to the event without it interfering with any other existing references. Search and Crisp are up and operational again!

I ended up feeling pretty exhausted tonight and could not get myself to mentally process any more information. I'm going to add some more progression items, but mostly try to take a minor break before heading to bed.

Or at least, I thought that was going to do that. While adding items to my lists, it hit me again just how _deep_ everything goes - I feel like I have a little map with a charted route that leads me towards a little open door, but I'm starting to notice these grand detours branching off from that route, and I can't yet tell if my original course is blocked off to me along the way.

I feel that I am committed to learning as much as I can for myself, even if it doesn't take me anywhere professionally, but there needs to be a way to for me to preserve my mental heath and safety going forward. If I need to stick within my current career path, then I would like to prepare to make the appropriate adjustments, but I also do not want to lock myself into missing out on an opportunity to align my day and night jobs to the same skill set for a few years, either. I've done the math and made as many preparations as possible, which certainly helps to identify what is logistically out of the question, and is part of what is driving this concern for trying to see just a tiny further ahead on the map.

{% include blog-img.html source="/assets/images/posts/2020/09/19/path_unsplash.jpg" alt="An image of a person surrounded by multiple paths forward" %}

Concerns for another day, however. I ended up writing and ruminating instead of relaxing, so I will at least try to get a good night's sleep. There's a hefty stack of open browser tabs for me to read and sort through tomorrow!

## Tasklist

- [x] Create a new generic skill entry, to be appended below the Skills table. Store general references, learning, inspiration, quotes, notes, etc
- [x] Add in new progression items for sorting
- [x] BUG: Fix Crisp chat and Search