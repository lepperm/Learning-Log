---
layout: journal
title: "Automating New App Configuration"
excerpt: Completing my little dip into Node.js with a fully functional and expandable React configuration script.
author: Max Lepper
categories: [journal]
tags: [nodejs,automation]
date: 2020-11-15 23:05:40 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [nodejs,javascript,prettier]
references: ["https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Code%20Style%20Guide#jsdoc","https://gitlab.com/-/snippets/2039799"]
timespent: 280
sleep: 220
recreation: 30
workout: 10
---

## Journal

({{page.references[0]}})

adding documentation
fleshing out templates and files
fixing prettier
Prettier broke on VS Code 1.50 and I've been stumped but just got it working.

Needed to add `"editor.defaultFormatter": "esbenp.prettier-vscode"` to the `settings.json` for VS Code

I could add in logic to build out components, but I think I've spent enough time on this tangent already and need to get back on track.

[posted my finished snippet on GitLab]({{page.references[1]}})

## Tasklist

- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [x] Add documentation to React project configuration utility
- [x] Post React project configuration utility to GitLab
- [x] Get Prettier working again