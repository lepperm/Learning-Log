---
layout: journal
title: "CSS Grid and Responsive Web Projects"
excerpt: Finishing the educational portion of FCC's Responsive Web Design Certification and starting the projects.
author: Max Lepper
categories: [journal]
tags: [css]
date: 2020-09-09 00:47:39 -0400
modified_date: 2020-09-10 07:49:11 -0400
published: true
status: finished
confidence: possible
importance: 1
context: true
skills: [css]
references: ["https://www.freecodecamp.org/learn"]
timespent: 80
sleep: 460
recreation:
workout:
---

## Journal

Technically, I missed a day! Does it count if this post is barely after midnight? Who knows. Regardless, I passively found myself whittling away at the CSS Grid section of FreeCodeCamp's [Responsive Web Design Certification]({{page.references[0]}}), and managed to complete everything. My [CSS skill]({{site.baseurl}}/skills/css) page notes now include my notes from everything I have covered so far.

Next up is the Responsive Web Design projects, a 5-part course that, after evaluation, will yield a certification and 5 extra portfolio pieces (even if they will be fairly simple). It looks like the projects will be built in CodePen.io, which I have encountered but not yet used myself, so this will be good experience.

One thing that I am currently unsure about is how much I should work towards the FreeCodeCamp curriculum. I am positive that I will want to go through everything eventually. However, at an estimated 300 hours per certification, and 10 certifications listed, at my current average per-day learning rate of approximately 4 hours a day, it will take me over two complete years to become what they claim is a "well-rounded developer, ready for most entry-level developer jobs."

Having never been in a non-industrial developer role and being largely uncalibrated to the expectations of the industry, this seems daunting as the barrier for entry-level. Some peers I have spoken with feel that I am ready now, others have indicated that a little more focused learning would be enough, and others have expressed that I should give up.

Without the personal experiences of already working in web development, I'm left in a "moving goalposts" situation. How will I know when I can start applying to jobs without burning opportunities? At what level could I enter the industry? Would it make more sense to break into the industry as a project manager with my agile training and transition to development down the road, better calibrated and with more study time under my belt? Heck, is it possible that I'm good enough for a reasonable role _right now_? The more I learn and expose myself to, the more I realize just how much time is needed to learn tools which, depending on when I can break into the industry, may all not even be in use anymore. I do not want to assume I am more qualified than I am, and I also do not want to waste more time doing things that don't contribute towards [my objective]({% post_url blog/2020/08/2020-08-27-risk-mitigation-in-planning-learning %}#my-objective) than is necessary.

On a different note, I noticed that the current active streak is calculated with Liquid at build and not the true JavaScript current time, which may be inaccurate/misleading if I miss some days. I've added an improvement to-do to change this, and it should take into account if there was or was not a streak at the previous build.

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Work on the FFC CSS Grid Challenges

(All other existing tasks postponed, as I am on vacation. Still not doing a super great job of not working on stuff, though)

- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only