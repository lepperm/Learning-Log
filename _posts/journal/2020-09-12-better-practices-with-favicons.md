---
layout: journal
title: "Better Practices with Favicons"
excerpt: Already fixing my brand-new favicons to include a version identifier and better color contrast.
author: Max Lepper
categories: [journal]
tags: [css, accessibility]
date: 2020-09-12 18:23:37 -0400
modified_date:
published: true
status: draft
confidence: log
importance: 2
context: true
skills: [css, html, accessibility]
references: ["https://realfavicongenerator.net/","https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/","https://github.com/lavas-project/jekyll-pwa","https://developer.mozilla.org/en-US/docs/Web/Manifest","https://developers.google.com/web/fundamentals/primers/service-workers","https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679"]
timespent: 140
sleep: 370
workout:
---

## Journal

After pushing my updates live last night, I quickly noticed a few issues with my favicons. There were contrast issues, inconsistencies, weird gaps...it was generally not the greatest experience. Additionally, I read that a version number should have been included, so that favicon information will update when changed instead of being more-or-less cached forever.

If you happened to visit my site between late last night and now, I'm terribly sorry, but **you'll probably need to clear your cache / uninstall the app to see the favicon/pwa changes!** 😬🙏 I'm glad to be learning this now, though.

I popped back out to [realfavicongenerator.net]({{page.references[0]}}) and began the process of redesigning the logo from my testing. Ultimately, I decided on going with a filled-in book, with subtle gradients on both the inner pages and the book border. Out of the 4 trial sets, this seemed to be the most consistently discernible, and I was able to use the original svg in silhouette-style applications.

Tweaking the colors was a challenge! Using both white and black as primary colors in the logo is, in retrospect, not a great idea. Using a darker background to pop the white and get that contrast ratio over 7:1 washes out the border, and making the background lighter to increase the contrast with the silhouette then creates this conflict between the site being dark and the splash being bright. And without manually creating a bunch of icons, things that work for a light theme do not automatically work for a dark them. The [WAVE accessibility plugin for Firefox]({{page.references[1]}}) was especially helpful, as I was able to rapidly compare contrast ratios and desaturate the page.

I was originally trying to use blue tones, similar to what I'm using on badges and interactive element borders, but at the suggestion of my wife, I switched to more of a green-teal hue. The point she made was that grey already has blue/cool tones in it, and by adding a bit more warmth to the color, it made it pop exponentially more. I ended up using the teal-green for iOS and Android Chrome mobile, and then a much darker navy with a white silhouette for Windows Metro and macOS Safari. When possible, the logo itself is used. While there is "branding" inconsistency between the favicons and my actual site now, I feel like these are more solid on their own. Additionally, the site will most likely change FAR more rapidly and often than the favicon, so ideally they will manage to stand on their own.

There's more to work on today, but in an effort to get these changes out before the page is viewed more, I'm going to push it out early to help correct the issues. I'll leave this note in, and probably come back to add more to this post later tonight.

## Tasklist

- [x] Remake my favicons with a version identifier for proper caching
- [ ] Add "recreation" metric to logs to get in the habit of mindfully resting, determine qualifiers for recorded time
- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only
- [ ] <span title="Task to be added to next entry">=></span> Add some way to see a list of all references used across the entire site
- [ ] <span title="Link is not working">=X</span> ~~[Check my favicons](https://realfavicongenerator.net/favicon_checker?protocol=https&site=maxlepper.gitlab.io%2Flearning-log%2F)~~ (This link does not work for me on any browser or device)
