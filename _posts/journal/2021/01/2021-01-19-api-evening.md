---
layout: journal
title: "API Evening"
excerpt: Spending a little time learning how to utilize APIs and different ways to call them.
author: Max Lepper
categories: [journal]
tags: [javascript,api]
date: 2021-01-19 23:51:20 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [javascript]
references: ["https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/","https://ghibliapi.herokuapp.com/","https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/","https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API","https://www.tjvantoll.com/2015/09/13/fetch-and-errors/#comment-2254295840"]
timespent: 135
sleep: 280
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="APIs" theme="Fundamentals" %}

Things are slowly inching forward, and we are starting to put specific dates and targets around our move. We're just waiting to get formal paperwork back at this point before we can officially say that we have a new place to live and start moving faster. Progress!

The next two weeks will be focused on getting everything packed and ready to go, and then the three weeks after that will be focused on getting set up in the new space and making sure that everything is functional. There's a ton of work ahead, but I'm hopeful that this move will be the last one we have to make for a while, and give us a little more security and peace of mind than our last few apartments.

After a big planning meeting with my spouse's parents, I had a little extra time in the evening to myself. Since it's been a bit since I was able to properly work on something, I was curious to check out the [Ghibli API tutorial]({{page.references[0]}}) I had found a few weeks back.

Up until this point, I had poked around with the [Ghibli API]({{page.references[1]}}) and the Spotify API a bit, but I haven't gotten into it very much and have mostly been focused on building and displaying data, rather than pulling it in.

Following along, I first tried out the suggested XMLHttpRequest GET request. Next, I also tried [using Fetch]({{page.references[2]}}), which definitely seems easier to remember and more streamlined. Reading the Mozilla docs, I did see that [Fetch doesn't fail on non-network errors]({{page.references[3]}}), like 404, so I added an error handling function.

Ultimately, everything worked like a charm! This tutorial was quick, easy to follow along with, and definitely has me feeling like I could squeeze in some time poking around APIs in the evening if I find myself with spare time again soon.

I'm going to add a section in the [Resources page]({{site.baseurl}}/resources/#apis) for easy-to-use APIs to play with.

## Gratitude

### What is going well?

I can see things starting to move forward now, and that feedback is a great motivator. I am grateful for all of the helpful and patient people in my life who are willing to chat with me and provide feedback and perspectives.

### What could be better?

I would like to take more time to collect my thoughts. With so much happening in every area of my life, it is easy to lock up a bit and struggle to prioritize properly at the moment.

## Tasklist

- [x] Complete the Ghibli API tutorial
