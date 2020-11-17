---
layout: journal
title: "Creating my Skill Summary page"
excerpt: Deep dive into Liquid to generate my Skills page content dynamically from journal logs.
author: Max Lepper
categories: [journal]
tags: [liquid]
date: 2020-08-11 20:06:54 -0400
modified_date: 2020-09-07 19:44:58 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [liquid,jekyll,javascript]
references: ["https://shopify.github.io/liquid/","https://jekyllrb.com/docs/liquid/filters/","https://devhints.io/jekyll","http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html"]
timespent: 265
sleep: 
recreation:
workout: 
---

## Journal

Yesterday, I had intended to get started on my Skills page but ran out of time. Fortunately, all of my practice with Liquid had mentally prepped me for how to go about exposing the data from my journal logs! I had a rough draft of the data I wanted to start with in mind already, so with [the Liquid syntax]({{page.references[0]}}) and [Jekyll's filters]({{page.references[1]}}) on-hand, I got to work.

Referencing the Tag page from Sunday, I quickly figured out how to keep my data as arrays instead of strings. Lucky timing on my part that it works, now! The issue of multi-dimensional arrays became an issue shortly afterwards. Fortunately, access to both clean and dirty arrays allows me to gain a few different insights from my posts, so this works out great.

While parsing each log page, individual arrays for skills and time are populated so that their indexes match up. Using a cleaned copy of the skill array to search the dirty skill array allows me to get total post counts, total time, and potentially other data that I could add in the future. Now, I need to figure out how to sort both lists.

Right now, I am assigning the full reported period of time to each skill, as I try to only list pools of skills that I am working on. Additionally, measuring time for every individual skill would be costly in itself, and inherently inaccurate in a similar sense from the other direction, in that I'm rarely ever working with just one thing for a long stretch of time. Maybe this will prove to be a bad call on my part, but I am hoping that the bigger trends over months (and years?) will yield far more meaningful results.

With my newfound familiarity with Liquid and awareness of issues to look out for, I also touched up a number of functions around the site. `Min-to-time`, which converts a minute value into a more human-readable format, now is reused more and accepts parameters to modify the output. `Time-to-read` now displays an accurate word count, which was slightly off due to html injection in the capture. Additionally, this function now also allows me to extract the data it produces for use in stats. If you've been reading along so far, you may have noticed a trend when it comes to me and collecting data...

I was curious if it would be possible to auto-populate the search field on the search page from a different page (like the skills page, for example), and was surprised at how simple the actual execution was. The issue is that it does not pull the current field value and pre-populate the results, so I'll need to look into that more later.