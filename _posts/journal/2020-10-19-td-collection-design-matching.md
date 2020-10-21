---
layout: journal
title: "TD Collection Design Matching"
excerpt: Implementing the TD Collection design on the actual site, and progress snapshots.
author: Max Lepper
categories: [journal]
tags: [react,material-ui,hooks]
date: 2020-10-19 23:22:43 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,material-ui]
references: ["https://reactjs.org/docs/hooks-overview.html","https://jsdoc.app/","https://material-ui.com/components/grid/","https://material-ui.com/styles/advanced/"]
timespent: 390
sleep: 280
recreation: 30
workout: 20
---

## Journal

The landing page for TD Collection still needs work done to get it closer to the design, and it's currently built with classes instead of functions. With my new functional components and hooks experience, I set out converting everything to functions first, and everything went very smoothly.

Next, I spent some time reworking the landing grid to be a little more mobile friendly, and pulling in updated colors from the latest revision of the design. I spent some time wrestling with the background and trying to get it to display correctly behind all of the content, and then with figuring out how to get the dark overlay on the image. The magic CSS rule ended up being `filter: 'brightness(35%)'`, as adjusting the regular opacity value kept things too bright.

The main app page got a hefty bit of work, as well! I already had the drawer mostly working, and I was able to get it clipping under the appbar correctly, at long last. It took some time to find the right element and depth to apply the CSS rules to get the elements to match Neal's designs, but I slowly made progress and ended up not too far off. The navbar is currently being recreated in the main app, as I need to figure out how to get the rules to interact with my components correctly.

Everything definitely needs to be refactored to smaller components, as `Main.js` is huge and full of many moving pieces and a lengthy style section. I feel many components could be broken out, like the drawer, and the filter chips, and the individual token cards, and probably even the entire grid container for the token cards, if it would make sense to do so.

At the end of the night, here's where things ended up:

{% include blog-img.html source="/assets/images/posts/2020/10/19/landing.png" alt="The updated live landing page" %}

Simulating a mobile orientation gives us this:

{% include blog-img.html source="/assets/images/posts/2020/10/19/mobilelanding.png" alt="The landing page in a simulated mobile layout" %}

Lastly, here's the main app so far:

{% include blog-img.html source="/assets/images/posts/2020/10/19/mainapp.png" alt="My take on the main app layout" %}

The main app page is absolutely not mobile friendly right now. There's also a few other issues I noticed:

- Fonts disappeared at some point
- The background color does not extend over everything
- The background image does not scale
- There's weird drawer behavior on iOS (chrome and safari). Able to replicate on desktop, doesn't seem to be a problem on Android
- Staging site does not display correctly, need to add router 404 equivalent to redirect to the home page for now

I also have to catch up more on Product Lab, so I'll focus on that tomorrow and see if I can't clean up some of these bugs.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Work on TDC Landing Page layout
- [x] Push commit of updated layout and routing with main app scaffolding