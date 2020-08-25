---
layout: journal
title: "More Git Learning and Skill Table Improvements"
date: 2020-08-24 22:27:41 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [git]
excerpt: Working on Git, making Skill table improvements, and some general housecleaning
references: ["https://learngitbranching.js.org/"]
skills: [git, javascript, html]
timespent: 300
---

## Journal

I successfully completed the [Git learning course]({{page.references[0]}})! Many of these terms have been familiar to me for a while now, but the simulation and animation really helps explain what happens with each operation.

On the Git skill page and for the key on the Stats page pie chart, Mermaid.js doesn't seem to play very nicely with mobile. I did some research and tried some configuration options, but nothing seemed to change the behavior of the charts at all. While the Git page is a little ugly but still fully functional, the pie chart does not provide enough information to be useful, and I will most likely need to open a ticket unless I can find an existing issue.

Doing some housecleaning, I fixed a Tasks page issue with slugs for learning items needing to be "downcase," and renamed all `skill.name` entries to match the file type, properly using the `fullname` field in both tasks and the skill table.

From migrating Todoist tasks to skill collection entries, there were lots of orphaned pages that are accessible manually, but could not be normally navigated into. Exposing these entries automatically is an entry in my [Blog Improvements]({{site.baseurl}}/todo#improvements) list, so I tacked on an "extra skills" loop to scoop up these inaccessible pages. Now the issue was that the table wasn't in alphabetical order on, and I couldn't quite figure out how to sort the table together during site generation without doing some array juggling, which I'd prefer to avoid. Thankfully, I can reuse my existing header sort functions and call the default sort at the very end of my page. Boom, works like a charm! The headers also were using the default cursor, so I changed it to a pointer to better guide users.

Since there were only a few unmatched skills in the Skills table, I created matching collection entries and populated them with some basic information. On a rebuild, the Tasks section for missing matches disappeared entirely - just as planned! However with the improvements earlier today, this table is already getting rather long. I may need some kind of alphabetical jumping or filtering. Filtering could be nice, especially if you could use sliders to dial in a time range, or a date-picker to search a "last logged" date range, or click on chips to highlight which categories you want to show.

On a whim, I went ahead a whipped up alphabetical jumping. This was accomplished by taking either the `fullname` if one exists or the `name`, slicing the first character, checking to see if it has already been used in an array of letters, and then injecting the anchor with the appropriate ID if it is the first instance. Technically, this won't correctly catch `extraSkills` that may be alphabetically higher ranked, as these two sets of rows are independently of each other and then mixed together, but it's certainly close for a 20 minute fix. To generate the navigation bar, I reuse the completed array of letters to build a JS object of a wrapper `div` filled with `href` anchor links.

## Tasklist

- [X] Continue working towards [Git #1]({{ site.baseurl }}/skills/git#1)
- [x] Fix Tasks page internal issue links
- [x] Look into Stats page pie chart key not displaying on mobile
- [x] Add skill collection entries for all skills (completing Tasks entry)
- [x] Add skills that exist in collections but not in the data source populate to the Skills table. Selectively replace missing data.
- [x] Basic alphabetical jumping in Skills table