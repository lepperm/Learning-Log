---
layout: journal
title: "Progression Polish, Skill Cleanliness, and Navbar Search"
excerpt: Creating an entirely different skill collection structure, fully-automated skill collection output pages, an automated learning task collection system, and cleaning up the navigation bar.
author: Max Lepper
categories: [journal]
tags: [yaml]
date: 2020-08-19 23:58:51 -0400
modified_date: 2020-09-07 19:41:16 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [liquid, markdown, yaml, sass, html, javascript]
references: ["https://github.com/avillafiorita/jekyll-datapage_gen","https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one","https://shopify.github.io/liquid/tags/iteration/","https://materialdesignicons.com/", "https://jekyllrb.com/docs/liquid/filters/"]
timespent: 340
sleep:
recreation:
workout:
---

## Journal

Today, I started out working on the to-do page from the previous log entry. I wrote a JS script to extract the table data, but was unsure how to actually collect all of the data I was looking for. If the skills were all data entries instead of pages, I could extract the values directly from the data instead of messing with a table.

The `Markdown` skill progression page seemed a fitting test subject, so I created a yaml file as a data-ified version of the page composition. It was structured to be easier to update but still ultimately capture all of the same information. Working in Markdown tables isn't too painful thanks to the [Markdown All-In-One plugin for VS Code]({{page.references[1]}}), but it is a bit clunky at times - definitely an area for workflow improvement.

Using my new `Markdown` yaml, I want to have the pages generated more-or-less from scratch. I tried out [jekyll-datapage-generator]({{page.references[0]}}), but the more I looked into it, this will really only be useful if I have _single_ data file that I want to generate multiple pages from, rather than multiple data files to multiple pages. But wait, this is what I'm already doing with Collections!

The `Markdown` yaml file became a markdown file (ironically enough), and all of that data structure was stuffed into the Front Matter. This exposes the `page.content` value now for my quick reference section, so win-win! The layout automatically builds the entire page from this Front Matter, and updating entries on my part is definitely faster. While the setup for images is slightly more verbose to implement than it was in Markdown, it is heavily simplified in the individual entries. I thought about using Liquid's table iteration tags, but opted to build the tables in html directly for simplicity.

The key for the table has been bothering me, and I wasn't quite sure what to do with it. I have it saved for personal reference, but removed all other references, opting instead to inject the image definitions back into the skill "1.0" pages until I can get them upgraded to the new data-style.

Circling back around to my original objective, it was now much easier to gather up in-progress and upcoming items for a to-do page! I added IDs to learning items to make scooping them up easier. Then, I created a Tasks page, had it loop through each skill page and, if it contains in progress or up next items, output them to a task list with links to the target material and internal entry.

If all of my marked items are complete, the page will update accordingly and suggest a new task from any `NS` (Not Started) tasks. I have this set up to handle suggesting a few items, but the initial Jekyll `sample` is not liking more than one, so I will need to look into this further.

The Navigation bar is very cluttered, so with Maddie's suggestion, I added a search field to the header bar, reusing the existing url query logic. Tags and Categories are in a similar vein, so I removed them from Nav and added them above the Search page search bar. Now things look much nicer, and respond better on mobile to boot!

## Tasklist

- [x] Create page of generated action items
- [x] Create new skill collection file structure
- [x] Create new skill collection page layout
- [x] Add a search bar to the header