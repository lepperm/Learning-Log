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
references: ["https://maxlepper.gitlab.io/hook-clock/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Code%20Style%20Guide#jsdoc","https://stackoverflow.com/questions/18894433/nodejs-child-process-working-directory","https://stackoverflow.com/questions/19563737/change-current-directory-with-node","https://stackoverflow.com/questions/26343974/create-file-with-command-line-in-node","https://www.freecodecamp.org/news/how-to-create-files-automatically-and-save-time-with-magic-scaffolding-8dcd1b31483/","https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/","https://stackoverflow.com/questions/8258785/json-with-function-value-with-parameters"]
timespent: 510
sleep: 380
recreation: 40
workout: 30
---

## Journal

I managed to catch a quick meeting with Neal for a code review of [Hook Clock]({{page.references[0]}}). He told me that he looked at my code for about half an hour prior to the call, and said "it's perfect," which was much better than what I was expecting!

We discussed potential improvements, such as adding some defaults to the Clock component directly, and he also pointed me at AGWSU guidelines for some distilled guidelines on [JSDocs]({{page.references[1]}}). Since the scope of the demo is pretty focused, he said that the variable names used are plenty fine and the functions are clear, but that I would want to use a little more specificity in a larger project - for example, instead of `name` I could use `clockName`, and similar changes.

With that all being said, I think it's safe to mark Hook Clock as officially "done!" 🎉🎉🎉

Riding the thrill of finishing one project, I dove back into my Node.js script to try and knock out another one.

I was having some issues with the script working correctly in different directories, but this post with [more information on changing the working directory]({{page.references[3]}}) ended up being very helpful. Next up was to [utilize templates to create files]({{page.references[5]}}) for my configurations and settings. The blog post I stumbled across had all kinds of great snippets to play with. It covers building a script to automatically watch for new Component folders and generate the appropriate files, which would be a great alternative to `create-react-component-folder`!

Digging through the documentation more, I spent some time reading up on [blocking versus non-blocking in Node.js]({{page.references[6]}}). I was hoping that I could maybe run some processes in parallel to speed things up, but was noticing that certain commands didn't execute as I expected.

Last up was trying to pass the project name into my template files. I definitely overcomplicated this and spent some time running in the wrong direction before this post on [passing a value to a function in a JSON object]({{page.references[7]}}) brought me back.

Many trial-and-error runs with minor adjustments to the flow and wording later, this script is ready to go, outputting customized and configured React apps from scratch, and easy to expand! I tried to reuse the idea of object-based construction from Hook Clock to assemble a lot of the user interaction and avoid deep confusingly-timed prompts. Should I want to make modifications or expand the setup process further, it should be very simple to do.

## Tasklist

- [x] Code review of Hook Clock
- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Get Prettier working again