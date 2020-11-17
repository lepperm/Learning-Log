---
layout: journal
title: "Hook Clock Code Review"
excerpt: Reviewing and finalizing Hook Clock as the first fully "complete" project in my portfolio!
author: Max Lepper
categories: [journal]
tags: [react,hook clock]
date: 2020-11-14 23:36:21 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [react,javascript]
references: ["https://maxlepper.gitlab.io/hook-clock/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Code%20Style%20Guide#jsdoc"]
timespent: 510
sleep: 380
recreation: 40
workout: 30
---

## Journal

I managed to catch a quick meeting with Neal for a code review of [Hook Clock]({{page.references[0]}}). He told me that he looked at my code for about half an hour prior to the call, and said "it's perfect," which was much better than what I was expecting.

We discussed potential improvements, such as adding some defaults to the Clock component directly, and he also pointed me at AGWSU guidelines for some distilled guidelines on [JSDocs]({{page.references[1]}}). Since the scope of the demo is pretty focused, he said that the variable names used are plenty fine and the functions are clear, but that I would want to use a little more specificity in a larger project - for example, instead of `name` I could use `clockName`, and similar changes.

With that all being said

https://developers.google.com/web/updates/2015/01/ES6-Template-Strings


got back into my node script

https://stackoverflow.com/questions/18894433/nodejs-child-process-working-directory
https://stackoverflow.com/questions/19563737/change-current-directory-with-node
https://stackoverflow.com/questions/26343974/create-file-with-command-line-in-node

https://www.freecodecamp.org/news/how-to-create-files-automatically-and-save-time-with-magic-scaffolding-8dcd1b31483/

https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

https://stackoverflow.com/questions/8258785/json-with-function-value-with-parameters

## Tasklist

- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Get Prettier working again