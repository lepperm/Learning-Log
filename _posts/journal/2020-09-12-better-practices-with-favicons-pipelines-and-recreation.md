---
layout: journal
title: "Better Practices with Favicons, Pipelines, and Recreation"
excerpt: Already fixing my brand-new favicons to include a version identifier and better color contrast, updating CI/CD pipelines for AGWSU and my portfolio, and adding a new "recreation" metric.
author: Max Lepper
categories: [journal]
tags: [css, accessibility]
date: 2020-09-12 18:23:37 -0400
modified_date: 2020-09-12 23:52:11 -0400
published: true
status: finished
confidence: log
importance: 2
context: true
skills: [css, html, accessibility, gitlab-ci]
references: ["https://realfavicongenerator.net/","https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/117","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/commit/b102f59348786adcbfbeeb878c7925c4e7161338"]
timespent: 265
sleep: 370
recreation: 50
workout:
---

## Journal

**NOTICE:** If you happened to visit my site between late last night and around 6:40 PM today, you may need to clear your cache / uninstall the app to see the favicon/pwa changes!

After pushing my updates live last night, I quickly noticed a few issues with my favicons. There were contrast issues, inconsistencies, weird gaps...it was generally not the greatest experience. Additionally, I read that a version number should have been included, so that favicon information will update when changed instead of being more-or-less cached forever.

I popped back out to [realfavicongenerator.net]({{page.references[0]}}) and began the process of redesigning the logo from my testing. Ultimately, I decided on going with a filled-in book, with subtle gradients on both the inner pages and the book border. Out of the 4 trial sets, this seemed to be the most consistently discernible, and I was able to use the original svg in silhouette-style applications.

Tweaking the colors was a challenge! Using both white and black as primary colors in the logo is, in retrospect, not a great idea. Using a darker background to pop the white and get that contrast ratio over 7:1 washes out the border, and making the background lighter to increase the contrast with the silhouette then creates this conflict between the site being dark and the splash being bright. And without manually creating a bunch of icons, things that work for a light theme do not automatically work for a dark them. The [WAVE accessibility plugin for Firefox]({{page.references[1]}}) was especially helpful, as I was able to rapidly compare contrast ratios and desaturate the page.

I was originally trying to use blue tones, similar to what I'm using on badges and interactive element borders, but at the suggestion of my wife, I switched to more of a green-teal hue. The point she made was that grey already has blue/cool tones in it, and by adding a bit more warmth to the color, it made it pop exponentially more. I ended up using the teal-green for iOS and Android Chrome mobile, and then a much darker navy with a white silhouette for Windows Metro and macOS Safari. When possible, the logo itself is used. While there is "branding" inconsistency between the favicons and my actual site now, I feel like these are more solid on their own. Additionally, the site will most likely change FAR more rapidly and often than the favicon, so ideally they will manage to stand on their own.

(I pushed a draft of this post and the favicon changes right around here)

As suspected, the color scheme specifically with Chrome is a little off, especially with the teal-green title bar but the dark grey and blue page - it is extremely noticeable that the color doesn't fit in. For now, though, I think I will keep things as they are, as it's very likely that this site will change.

Switching over to AGWSU, I finally made the [changes to our CI pipeline]({{page.references[2]}}). For context, free GitLab accounts will have a 400 minutes per month restriction on pipeline runner time go into effect on October 1st, and I wanted to take advantage of the grace period before then to test everything. A few changes and test runs later, I was [satisfied with the runner results]({{page.references[3]}}) and closed out the issue. The pipeline seems to hang open in between manually triggers, however, so I placed a 15 minute timeout for the entire pipeline to help free it up. I replicated the changes to my portfolio site, as well.

Ultimately, Learning Log is going to absolutely decimate my runner time, as I have it running nearly every day. I suspect that there is some way to capture my install artifacts and reuse them, but that's a task for a later time. DevOps has been very fun to dabble in so far, and I could see it being a very satisfying role.

If you have read a few posts on this blog, I've mentioned that I have been struggling to relax or rest recently. I won't go into the "why" because it's complicated, but, being aware and trying to find methods to attack the issue are at the forefront of my current situation. To this end, my wife offered a compelling suggestion - make recreational time a trackable metric bound to log entries, set a goal, and measure performance. So, I've added fields to track this information moving forward, and will try to refine things as I go.

Determining what is sufficient as "recreation" has been part of the issue in the first place - on the rare occasion that I play games they're typically intensive resource management games, and we don't watch much television, and my other hobbies have largely been tabled to pursue web development learning. Judging from my rapid approach back to the Burnout Zone following our vacation, forcing myself to prioritize _some_ kind of recreation will be essential for efficient learning and staying on top of all my other existing tasks and responsibilities.

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [x] <span title="Task carried over from previous day">=X</span> Build only on Master commits, Dev builds must be triggered manually
  - [x] <span title="Task carried over from previous day">=X</span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [x] <span title="Task carried over from previous day">=X</span> Lighthouse testing on trigger only
- [ ] <span title="Task abandoned">=X</span> ~~[Check my favicons](https://realfavicongenerator.net/favicon_checker?protocol=https&site=maxlepper.gitlab.io%2Flearning-log%2F)~~ (This link does not work for me on any browser or device)
- [x] Remake my favicons with a version identifier for proper caching
- [x] Add "recreation" metric to logs to get in the habit of mindfully resting
- [ ] <span title="Task to be added to next entry">=></span> Add some way to see a list of all references used across the entire site