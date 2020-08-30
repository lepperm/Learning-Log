---
layout: journal
title: "Filling Out Skill Progression Tables"
date: 2020-08-29 23:58:31 -0400
published: true
author: Max Lepper
categories: [journal]
tags: []
excerpt: Posting the new blog and adding many progression items to my skill pages.
references: []
skills: [html, javascript, liquid]
timespent: 165
sleep: 490
workout: 
---

## Journal

The new [blog post]({% post_url blog/2020-08-27-risk-mitigation-in-planning-learning %}) went live today! In it, I discuss risk mitigation as it relates to learning, and tie it into my experience so far. I feel like I talk about that a lot and should probably come up with a more interesting topic, it just happens to be my daily life right now.

On the blog improvements side of things, skill progression sorting currently uses a 0-100% based on the fraction of tasks completed over total tasks. While this technically works and is fine, I would prefer for larger skills to bubble to the top of the list, i.e. (5/5) should be ranked higher than (2/2). This ended up being a simple 4-line change, where the divisor portion of the progression value multiplied by `0.0001` is added to the progression sort value. This is small enough that, unless a task is into hundreds of items, it should not bleed past the appropriate sorting location. I may need to revisit this in the future, if progression values become that expansive.

My Crisp trial ran out today, and unfortunately it disabled the chat bot. Just in time, too, as I was curious to see if I could get it to answer simple questions automatically. The free account does allow for messaging and collecting users, still, so I will continue to use it on my site unless it becomes an issue.

I spent a little bit of time working on FreeCodeCamp and then switched to pulling over more tasks. The [React]({% link _skills/react.md %}) entry, in particular, has needed some love and attention. There is a hefty backlog of learning items that I need to sort through and prioritize (you can see the list with a hidden link, if you can find it!). I stopped the log clock and spent multiple hours sorting tasks, reading, researching, checking that sites still existed, ordering, and pulling out notes for myself. I have a lot more work to do before I get through everything I've pulled in so far, but it's finally starting to feel like a solid plan.

## Tasklist

- [x] Complete proofreading of large blog post
- [x] Proofreading of Landing✔, About✔, Stats✔, and Tasks✔ pages
- [x] "Larger" skill progression pools should float to the top of their percentage
- [x] Add type of post to post meta on main screen
- [x] Pull in more Todoist tasks as learning items to sort, sort learning items into skills