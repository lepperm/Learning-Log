---
layout: journal
title: "Automating New App Configuration"
excerpt: Completing my little dip into Node.js with a fully functional and expandable React configuration script.
author: Max Lepper
categories: [journal]
tags: [nodejs,automation,prettier]
date: 2020-11-15 23:05:40 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [nodejs,javascript,prettier]
references: ["https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Code%20Style%20Guide#jsdoc","https://gitlab.com/-/snippets/2039799","https://github.com/prettier/prettier-vscode/issues/1598"]
timespent: 280
sleep: 220
recreation: 30
workout: 10
---

## Journal

Referring to the [AGWSU documentation]({{page.references[0]}}), I wanted to go through my React configuration script and add some documentation. This time, I actually tried generating the final documentation and seeing how it ends up being structured, which was very cool. I tried branching out and using a few different types of tags, like `@namespace`, but I'm not sure if I was getting them to work as intended, and ultimately ended up mostly including descriptions and parameters. The generated templates and files needed a little touch-up, too.

I could add in logic to build out a series of components, but I think I've spent enough time on this tangent already, and need to get back on track! Here's [my finished snippet on GitLab]({{page.references[1]}}).

Next up was to figure out what in the world was going on with my Prettier configuration. A while back, it suddenly stopped working on me. I assumed it was because I was breaking settings trying to write Liquid for Learning Log, but reviewing various setup guides, it looked like my settings were exactly what they should be. After searching around, I found issue #1598 on the prettier-vscode plugin GitHub repository, which says that there was ["no formatting after VSCode updated to 1.5.0"]({{page.references[2]}}).

Sure enough, it looks like I needed to add `"editor.defaultFormatter": "esbenp.prettier-vscode"` to the `settings.json` for VS Code. I restarted for good measure, but now Prettier magically cleans up all my `'`s again! Looks like tonight ended up being a satisfying two-for-one win! 😊

## Tasklist

- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [x] Add documentation to React project configuration utility
- [x] Post React project configuration utility to GitLab
- [x] Get Prettier working again