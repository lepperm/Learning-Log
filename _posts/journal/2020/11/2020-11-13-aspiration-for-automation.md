---
layout: journal
title: "Aspiration for Automation"
excerpt: Getting sidetracked with learning more about Node.js.
author: Max Lepper
categories: [journal]
tags: [react,nodejs]
date: 2020-11-13 23:16:44 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,nodejs]
references: ["https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Developer%20Quickstart%20Guide#automatic-formatting","https://swcarpentry.github.io/shell-novice/02-filedir/index.html","https://stackoverflow.com/questions/1850920/how-to-navigate-to-a-directory-in-c-with-cygwin","https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js","https://nodejs.org/api/child_process.html","https://stackoverflow.com/questions/14548220/how-to-install-npm-package-from-nodejs-script","https://stackoverflow.com/questions/18894433/nodejs-child-process-working-directory"]
timespent: 310
sleep: 400
recreation: 40
workout: 30
---

## Journal

Following along with [the documentation created for AGWSU]({{page.references[0]}}), I'd like to figure out what I've configured incorrectly with my VS Code and make sure that Prettier can successfully run automatically on save. This would be more as a time-saver and a quick way to add some polish and consistency across my code.

With Prettier being opinionated, it's great getting instantaneous feedback as I write about what I should be doing differently. For example, I didn't realize that my VS Code was set to "LF" instead of "CRLF" for my end of line characters, and I tend to use `'` instead of `"`. Spacing and learning when to expand or condense lines is definitely helpful for clarity, as well.

Looking at the documentation, however, it seems like everything is correct. I will have to play around with this more, because I'm a little confused about what exactly is happening.

Related, one thing that I've noticed is that there's still some setup on a fresh `create-react-app` to reach a more robust foundation, and I have been curious about automating this somehow. Making a ready-to-go repo with everything preinstalled seems like a bad idea, as versions and dependencies change, and what packages I'd like to use shift often. I know that I can create bash scripts inside `package.json`, which is nice, but requires manual effort to add it after a few steps into the process already - that's not enough automation! 😂

It'd be super cool to double-click on a shortcut or run a script with some options, and go get a cup of coffee while a script automates setting up EVERYTHING - making a fresh app, installing frequently used packages (such as Material UI), configuring Prettier, configuring and adding my GitLab CI script, adding my folder structure and removing some of the CRA boilerplate, and basically giving me a fresh and fully-configured slate to dive right into. I know that this isn't something that I'd do very often, and it's definitely a tangent from my original goal, but it sounds like a fun thing to try out!

First, I tried chaining commands in the regular windows console, but when node launches, the commands don't carry through. I've made batch and AHK scripts before, but I've never had to have them cross over like this. I did some reading, but it didn't look very promising or easily comprehensible in a timeboxed window of a day to look into such a tangent.

I asked my friends if they had any experience with this, and using a bash script was recommended. Doing a little searching, it looked like [Cygwin](https://www.cygwin.com/) was going to be a quick way to get up and running with a Unix shell (I've since been told that there are better options). It's been a while since I used specifically a Unix shell, so I had to look up some [commands]({{page.references[2]}}). Trying
Trying to figure out how to get to windows files, I found a good thread [discussing how to access Windows files]({{page.references[2]}}) over on Stack Overflow, where a poster mentioned that you can create a symbolic link to C: drive `ln -s /cygdrive/c /c`.

The deeper I dug, the more confused I became, and it felt like I might be drifting off course. Another Stack Overflow question discussed [directly accessing npm]({{page.references[3]}})...but then I noticed that a poster further down make reference to [`child_process.exec()`]({{page.references[4]}}) - finally, we're getting somewhere!

After all that runaround with installing Cygwin and trying to cascade between environments, I looked into Node.js directly more and, duh, you can just have it run a JavaScript file directly. I felt like such a fool at how much more incredibly easy this was! Within minutes, I was passing arguments from the command line and verifying files and running commands.

The next issue was to switch into the newly-created React project folder to start installing packages. Changing the current directory with normal commands didn't seem to work. My first thought was that maybe I could end one child process and start another, possibly, or maybe there was some way to navigate the tree. After a bit of googling, I came across a post about [using `cwd` and `pwd` for `child_process`]({{page.references[6]}}) and the working directory, which helped get me closer to my answer.

Despite getting derailed a bit, today was a really fun experiment, and I am curious to explore Node.js more. This script is fairly basic right now, but it's working, and 2 out of 3 targets are already achieved - just file templating and directory structuring is left!

## Tasklist

- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Get Prettier working again