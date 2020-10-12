---
layout: journal
title: "Stats and Whitespace Weirdness"
excerpt: Weekend updates and correcting a bug in the references section of Stats.
author: Max Lepper
categories: [journal]
tags: [jekyll]
date: 2020-10-11 20:04:19 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [liquid]
references: ["https://scrimmage.us/the-product-lab/"]
timespent: 170
sleep: 590
recreation: 0
workout: 0
---

## Journal

This weekend, we had an unexpected but much-needed emotional check-in with a family member. I am so glad that we were able to talk with them about a number of difficult subjects, and while it means that I didn't get much accomplished on the development side of things, it appeared to make a substantial impact in them, and I'm extremely grateful that was where we put our focus this weekend.

This weekend on [Scrimmage Product Lab]({{page.references[0]}}), our prompt was to give sprint retrospectives for both our own projects and our experience so far with the lab. Taking a moment to stop and reflect on both was exactly what I needed this weekend, because I was somewhat feeling like I was spinning my wheels on some things. On the TDC side of things, I do not know where things are, and if people are waiting on me, or what exactly is going on, and I think we need to coordinate a better way to communicate and track status. Now that we're 11 days in, I feel that the more verbose issue tracking is too heavy for the remaining 20 days (14 of which where we'll be down at least one teammate).

On the blog itself, I had noticed that the top used reference count didn't seem to be properly capturing recent references. I printed the raw unique reference data and, sure enough, some identical links were being counted separately!

My first thought was whitespace, but the raw output didn't have any extra whitespace characters, and the data itself seemed to be identical. To be certain, I took one duplicated link, selected one copy at random, and replaced every other instance manually, paying attention to any extra whitespace or errant characters - no dice, nothing changed. Checking to make sure the values themselves evaluated as equal also returned a "true" so I was even more confused. In case it was an issue with the Liquid `uniq` filter, I created my own loop to build the unique array, but the final array was identical to the `uniq` one.

I did notice, through this process, that I had developed some inconsistencies over the past two months in how I was populating my Front Matter values. It's been consistent for the past month or so, but prior to that and especially at the beginning, it was all over the place. I went in and updated all posts with inconsistent Front Matter...but that still didn't fix it. I'm glad to have established consistency, but I wasn't closer to solving the issue.

Working backwards from the problem, that left me at the main references array. Inspecting the array output directly did reveal something interesting - there was whitespace between entries within the same blog post, but NO whitespace between entries _across_ posts...something about how Liquid was concatenating the arrays seemed to be causing the discrepancy.

To fix this, I took

`{% raw %}{%- assign references = stat.references | split: ',' -%}{% endraw %}`

...and changed it to

`{% raw %}{%- assign references = stat.references | split: ', ' -%}{% endraw %}`

Something about how `stat.references` was outputting the array data seemed to be adding whitespace, as if it was joining values using `, ` in the data value but not when I used `concat` to stitch the arrays together, even with the whitespace removed in the post Front Matter. I feel like I had encountered issues with this waaaaay back at the beginning of this site when I was first trying to manipulate Data files, too! It appears to more gracefully handle inconsistent formatting, but I am glad to be wrapping up for the night with both better standards in place for data formatting and having resolved this long-running bug.

## Tasklist

- [x] Post retrospective to Product Lab