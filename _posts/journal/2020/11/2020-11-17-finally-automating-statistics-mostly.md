---
layout: journal
title: "Finally Automating Statistics (Mostly)"
excerpt: Utilizing my new Node.js experience to update Learning Log statistics with a single console command!
author: Max Lepper
categories: [journal]
tags: [nodejs,vba,100 days of code]
date: 2020-11-17 23:57:14 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [nodejs,javascript]
references: ["https://tkacholeksandr.home.blog/2019/01/25/fs-copyfile-fs-copyfilesync-in-node-js/","https://tomcritchlow.com/2017/01/26/f-yeah-side-projects/","https://gitlab.com/-/snippets/2039799"]
timespent: 60
sleep: 265
recreation: 20
workout: 40
---

## Journal

We had received notice that someone was looking to purchase the place we're currently living in, so most of this evening was dedicated to trying to get through some small projects and personal tasks around the house.

I did get a few minutes to work on catching up with posts towards the end of the night. Thanks to the Node.js script I wrote the other day to [generate configured React apps]({{page.references[2]}}), I had a stroke of inspiration and figured out a quick-and-dirty way to update Learning Log stats. Finally! This has been an irritating manual process for far too long, but all that is going to change tonight.

The solution was easy - I just [copy files via `copyFileSync` to override]({{page.references[0]}}) the old `_data` values. I'm sure I could do something similar with Ruby, but since I know how to do this with Node.js _right now_, that's what I went with. Now if I could figure out a way to chain this with Jekyll building...

Also! It looks like today is my 100th day of Learning Log! I technically started pursuing development a few months before Learning Log, and I haven't posted for a 100 day streak (looks like 82 total posts), but semantics aside it still feels like a great milestone. I even may go out on a limb and post it online! 😊

Not included in Learning Log time, I spent a little time at work developing a potential internal tool for rapid data entry using VBA. We have hardware that we load programming into before shipping to customers, but no system currently to track serial numbers, what software was loaded, or when it was loaded. Being able to capture this data would be a huge quality boost internally, and provide better service to our customers.

It's nothing super elaborate, just a UserForm in Excel that I was able to put together quickly, but I did try to really focus on the user flow. There are required fields with input validation, dynamically enabled and disabled controls as a form of stepper / user directing, and dictionaries to act like objects to manage data. It does a great job of preventing premature or incomplete addition of data to the log, and I've optimized the per-unit input flow to reduce cycle time between units in a batch as much as possible, which was the key objective with the form. I'll be demoing to project stakeholders next week to get their feedback.

## Tasklist

- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Look into duplicated "Firebase" entries in Skills page on Learning Log
- [x] Finally automate updating stats for Learning Log