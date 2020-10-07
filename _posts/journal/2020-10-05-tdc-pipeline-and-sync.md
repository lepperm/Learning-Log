---
layout: journal
title: "TDC Pipeline And Sync"
excerpt: Having a sync meeting with the TDC team to lay out our plans for the month and future, and setting up our CI pipeline.
author: Max Lepper
categories: [journal]
tags: [product lab, tdc]
date: 2020-10-05 23:18:53 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [agile-pm, gitlab-ci, react]
references: ["https://scrimmage.us/the-product-lab/"]
timespent: 215
sleep: 390
recreation: 20
workout: 0
---

## Journal

I was under the weather over the weekend and spent all of Sunday recovering, so I've rolled my post notes into today's entry.

Saturday morning, our team had our first sync meeting for the True Dungeon token collection project, in conjunction with [Scrimmage Product Lab]({{page.references[0]}}). We reviewed:

- Overview of True Dungeon (TD)
- The tokens, variation, and what they're used for
- How a typical TD run goes
- What the token market looks like
- Current token competitors
- Summary of prior market research
- Review of ERD and data structure for the database
- Outline of MVP features
- Future phase timeline and outline

The prompt for Product Lab on Saturday was to describe the single most important feature for our project. For us, that's the collection management system. The existing solutions in the market are not very flexible and a little difficult to use, and it looks like from engagement on the forums that the market is asking for someone to fill this gap.

I have a long list of to-dos for tonight, getting the pipeline setup and tested. Documenting the process will be a good exercise to review what I have and see if anything should be adjusted.

## Tasklist

- [x] Use `create-react-app` to bootstrap a new React app
- [x] Generate a Firebase hosting token
- [x] Implement our CI/CD pipeline
  - [x] Set up Staging and Production environments
  - [x] Set up Firebase token as variable
- [x] Write up documentation describing how our pipeline functions and how to modify
- [x] Import issue templates from AGWSU
- [ ] <span title="Task to be added to next entry">=></span> Post my daily update on Product Lab