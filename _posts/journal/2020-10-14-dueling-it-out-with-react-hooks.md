---
layout: journal
title: "Dueling it Out With React Hooks"
excerpt: Working towards understanding React class-driven components versus functional components, and how React Hooks fit into the picture.
author: Max Lepper
categories: [journal]
tags: [material-ui,react,tdc]
date: 2020-10-14 23:07:11 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [material-ui,react,javascript]
references: ["https://dev.to/milu_franz/series/7304","https://medium.zenika.com/react-hooks-my-introduction-81b15e6eff20","https://scrimba.com/course/greacthooks","https://reactjs.org/docs/components-and-props.html","https://reactjs.org/docs/state-and-lifecycle.html","https://www.twilio.com/blog/react-choose-functional-components","https://reactjs.org/docs/hooks-overview.html"]
timespent: 375
sleep: 330
recreation: 20
workout: 5
---

## Journal

I played catch-up today, trying to distill the scratchy cryptic notes I scrawled for myself while working on things yesterday into coherent (at least somewhat) sentences. My preference is to work and write in tandem, and the vast majority of my posts are written this way. This allows me to catch my thoughts as I have them, process them by externalizing the thoughts, and then potentially correct myself later as I learn more - a true "learning log," if you will.

While reconstructing my previous day's work from a hefty sprinkling of mental flags is prone to pollution from hindsight bias, recalling the information in this way has sometimes helped things to click into place better, or to make new connections that I hadn't established the first time. For yesterday's entry, I had the code base up as I was recalling my steps, with the site live and modifying the code as I went. This was a particularly helpful session, as far as reinforcing my learning.

As for the actual focus of today, I have a nice long list ahead of myself. The biggest thing that I want to come way from today with is an understanding of React classes versus functions (in terms of components), and what hooks are, exactly.

Scrimba has a free [1-hour introduction class to React Hooks]({{page.references[2]}}), and my thinking was that a visual guided overview may be a good first pass, and probably do a better job of telling me up-front what I need to know first. Right out the gate, it looks like we're using functional components instead of class components, so I backpedaled to start from the top.

I've been poking around in React again recently, but I'll admit that not everything I learned four months ago is still bouncing around in my head. I'm feeling fuzzy on a few topics, so the [official docs for Components]({{page.references[3]}}) is probably the right place to re-start. Chasing that with [State and Lifecycle]({{page.references[4]}}) really started making things click together more, and I think I'm seeing how to re-work at least some of the Material UI hooks from the examples yesterday into the classes! Better yet, I have a better sense for how to rework my components into functions, which sounds like a good task for tomorrow. I chased down a few other threads and questions through this process to get a better grasp of everything that was going on.

Sifting through a few different blogs, a post comparing [functional components and class components]({{page.references[5]}}) really put things in perspective and offered excellent examples for how the two relate to each other. Finally! I felt like I was ready to circle back around to my Scrimba course. But it's 11 at night now, and I'm completely wiped out, as I never really recovered from being overextended yesterday.

I'll call it quits here rather than doing that thing where I say up until midnight and invariably hit a third-wind burst of inspiration and power through until past 2 AM. I know at least one of my readers will call me out on it... 😬💦

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [ ] Look into React Hooks
  - [ ] Complete React Progression [item #6]({{ site.baseurl }}/skills/react#6)
  - [ ] Complete React Progression [item #7]({{ site.baseurl }}/skills/react#7)
  - [ ] Complete React Progression [item #8]({{ site.baseurl }}/skills/react#8)
  - [x] Complete React Progression [item #9]({{ site.baseurl }}/skills/react#9)
- [ ] Work on TDC Landing Page layout
- [ ] Push commit of updated layout and routing with main app scaffolding, short-circuit "GET STARTED" link to Landing, for now