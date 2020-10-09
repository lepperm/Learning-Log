---
layout: journal
title: "The Rookie Mistake"
excerpt: Stumbling by chasing curiosity instead of progressively iterating, but still managing to make some progress on the TDC landing page.
author: Max Lepper
categories: [journal]
tags: [tdc, product lab, material-ui]
date: 2020-10-08 23:40:10 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [material-ui, react]
references: ["https://material.io/resources/icons/","https://stackoverflow.com/questions/57058299/what-does-the-cssbaseline-class-do","https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/","https://stackoverflow.com/questions/57557271/how-to-use-clsx-in-react","https://realfavicongenerator.net/"]
timespent: 345
sleep: 280
recreation: 25
workout: 0
---

## Journal

Tonight, my only objectives are building on the TD Collection landing page and posting to my [Product Lab](https://scrimmage.us/the-product-lab/) items. Since [AGWSU](https://agwsu.org) has a very complete structure in place, I think that I'd like to use it as a reference and try to reverse-engineer, or at least try to understand, what Neal has created and why.

I know that I really need to learn about Material-UI themes, and right off the bat, that was one of the biggest elements present. Another was that I was unsure what `cssbaseline` was, but found both a well-worded [Stack Overflow post]({{page.references[1]}}) and [a blog post]({{page.references[2]}}) with more detail. The purpose of this surprised me and I'll need to re-read through this again, because I think I'm missing some foundational information / history for the "why".

Next up, I encountered a [clsx]({{page.references[3]}}) plugin in AGWSU, which claims to dynamically create classes. I might need to ask Neal about a crash course on some of these topics, just to better prioritize digging into them...

One thing I wanted to knock out was officially selecting icons from [Material-UI icons]({{page.references[0]}}) for our feature badges. With a little debate and voting, here are the final selections:

Manage:
- assignment

Trade:
- compare_arrows

Share
- share

In our shared assets was a favicon package, but it didn't have the full icon set for PWA, which I imagine we may eventually want for convention-goers with poor cell service. I generated a new favicon package from [RealFaviconGenerator]({{page.references[4]}}) and added it to the site assets.

After lots of hacking and breaking and fixing and learning and research, I was able to get my hobgoblin code to compile...into a useless mess. In retrospect, I feel like I learned a lot, yet ultimately made a crucial mistake with my efforts.

Rather than trying to grab bits and pieces to remold and try to replicate, I really should have started from simple, rough, hard-coded bare bones. **Make it work, then refactor.** I found myself at the end of the night with code that both didn’t make much of a webpage and also wasn’t in any state to commit to our repository. Not wanting to end the night empty-handed, I’ve stripped out my code but left the structure intact so that I can dive in tomorrow with a fresh(-ish) slate. Especially since we have a limited time window to complete this project, I will endeavor to be more mindful of this in the future.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Respond to prompt #4 on Product Lab
- [x] Work on TDC landing page