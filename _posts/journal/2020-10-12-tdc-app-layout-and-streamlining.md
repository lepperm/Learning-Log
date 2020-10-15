---
layout: journal
title: "TDC App Layout and Streamlining"
excerpt: Collaborating on the TD Collection main app page layout and wrestling with an an unwieldy number of checkboxes.
author: Max Lepper
categories: [journal]
tags: [design,material-ui,agile-pm,tdc]
date: 2020-10-12 23:14:29 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [agile-pm,material-ui]
references: []
timespent: 310
sleep: 330
recreation: 30
workout: 15
---

## Journal

Following up from yesterday, I was feeling a bit more restored and set forth to take a more proactive approach figuring out where we were with TD Collection. I posted a call for input in the Discord and affirmed what I would be doing each day, going forward. In GitLab, I started roughly chunking out Epics with checklists for items that could be individual issues, once better defined.

On future projects, holding a proper sit-down planning and issue creation session with the whole team so we can put some estimates and weights on everything and capture more up front would be preferable, for sure. Product Lab is a unique situation, as I know we have all been wrestling with the timing for different reasons.

Next up, I had a few different responses that got posted in Product Lab. There haven't been very many opportunities where I felt like I could provide good input or questions into the other projects, but thankfully I have been getting thought-provoking questions from other members. The process of externalizing and thinking through things is helpful, and I'm looking forward to hopefully opening up opportunities for further prompts.

In the evening, Neal messaged me and said that he was going to work on the main app layout in chat, and that I'd be welcome to join in. I had some half-baked ideas for approximately how things could be laid out, but I was really interested to see what he would think and hopped in chat.

Right out the gate Neal proposed that, rather than having our "Get Started" call-to-action go to an email / registration capture form, it would just take users directly to the token view. Then, when they go to add a token to their collection, it will promp the user to either sign up or log in. This will give users a much better idea about how our site will work and the quality of the data in our database, which should be a much lower resistance to sign-up.

Next up was the main app design. The key elements to capture were:

- Tokens in a grid view, with details and an "add" button
- Search bar
- Search filters
- User menu button

Additionally, we added chips for active search filters into the design.

Quickly into laying out the search filters, we discovered why some of the existing solutions are as cumbersome to use as they are - there are over 165 discrete filterable options, not including text or specific number values! The solution we are currently considering is a one-section-open-at-a-time controlled accordion component. Here is the current v1 for the main app design:

{% include blog-img.html source="/assets/images/posts/2020/10/12/mainapp_draft01.png" alt="Our first pass at the main app layout" %}

Oh, and our theme colors changed a bit more.

Looking into the filters has exposed some questionable and confusing inconsistencies in the filter options, so we may locally rename these options to be a bit more distinct. Uriah gave us some great feedback and clarification on our questions, and I think we have a pretty good target set up.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Collaborate with Neal on main app design