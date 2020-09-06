---
layout: journal
title: "Accessibility Training and AGWSU Merge"
date: 2020-09-01 23:46:31 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [accessibility]
excerpt: Starting on FCC's Applied Accessibility Challenges and completing the user registration feature merge request for AGWSU.
references: ["https://www.freecodecamp.org/learn","https://www.w3.org/WAI/standards-guidelines/wcag/","https://agwsu.org/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/merge_requests/11"]
skills: [react, css, html, accessibility]
timespent: 130
sleep: 380
workout: 
---

## Journal

Applied Accessibility Challenges are the next item to work on in [FreeCodeCamp]({{page.references[0]}}), and I am excited to try and be mindful of accessibility and make my sites usable for all people. A few years back, I worked in cellphones, and had a few repeat customers who were either partially or completely blind. At least at the time, iPhones were far-and-away the best option for accessibility, so in the course of working with my customers, I had an opportunity to learn these features fairly well and how my customers used them. One person, in particular, was amazing - he was completely blind but could navigate his phone with more accuracy and speed than I could as a techy kid! He explained that the audio cues were an important trigger to help track and verify his place, and that he had taken some time to study the menus to learn and memorize where things were.

I know that I have a lot to learn, but I would love to eventually provide a similarly highly-accessible experience for people who may visit my sites, as well as being aware and mindful of ways to improve accessibility.

FreeCodeCamp lists our key concepts for this segment as:

1. Have well-organized code that uses appropriate markup
2. Ensure text alternatives exist for non-text and visual content
3. Create an easily-navigated page that's keyboard-friendly

I may go ahead and create a new learning item for "accessibility" so that I can compile notes and track good resources. Depending on how integrated this is into regular HTML and CSS, this may be another item for yesterday's "assumed skills" filter. FreeCodeCamp referred me to [W3 Consortium's Web Content Accessibility Guidelines (WCAG)]({{page.references[1]}}), which I will be sure to read through more in-depth later!

I didn't get very far into this segment, however, because I had a new [merge request]({{page.references[3]}}) ready for testing in my inbox this evening on the [AGWSU]({{page.references[2]}}) project! This is for the user sign-up approval feature, which Neal has been hard at work spear-heading. When merge requests come in, I will typically run unit tests, acceptance tests, and device tests. Neal and I both signed up as new users independently and both verified that accounts were created in Firebase, as well as handling both rejecting and approving users. There was a little snag that we were able to resolve, and otherwise things worked great!

With the conclusion of this feature, we're set to close out sprint 6. We had a few scheduling issues and I've been dealing with some life things and doing all of...this (gesturing at this entire site), so we agreed to make a one-time exception to stretch this sprint longer than usual. Tomorrow, I will be updating our task tracker and time logs, processing all existing issues, prioritizing sprint 7 tasks, and prioritizing the backlog. I want to try to get in and contribute directly to the code more, so Neal said that he'd try to identify a few different issues that I could take on.

I also confessed to Neal about working on this site. To be honest, I had been feeling guilty about it and about working on things that weren't directly contributing, and about how hard Neal has been working to develop pretty much everything so far. I know helping to manage and organize things is contributing, but not in the way that I had envisioned. This process has, however, absolutely given me far more perspective into what all is involved, and where I am in my journey, and what I have ahead of me, even if I don't have 100% of the specifics plotted out. When I made the mental commitment to go into this, and with how rapidly I'm accustomed to learning new things at work, I believed that I could start out quickly at a beginner level and catch up when immersed...

{% include blog-img.html source="/assets/images/posts/2020/09/01/dunning-kruger.png" alt="Brushing off the dust and scuffs from my fall off Mt. Stupid" %}

I knew that I didn't yet know enough, but I had no idea just how deep what I didn't know went, and the sheer breadth of knowledge that was required. Now I understand better just how long it's going to take to reach the level I was aiming for, and I've also focused my aim.

These logs and blogs are kind of all over the place, topic-wise, but I am grateful to have them. It is nice having now become comfortable enough writing them to be more open and genuine, and to express a captured stream-of-consciousness. Maybe some day, someone in a similar situation will encounter my chattering into the void and draw inspiration. Maybe, a prospective employer or client will read these and determine that my attitude and outlook is a good culture fit for their team or project. Ultimately, though, the only person I'm intentionally writing these for, and the only person I'm holding out hope that they'll read them someday, is future-me. I hope that I remember how I got to where I am right now, and what started everything, and how excited and passionate I am for this wild new adventure.

## Tasklist

- [x] Work towards FreeCodeCamp
- [x] Complete testing and approve merge request #11 for AGWSU project