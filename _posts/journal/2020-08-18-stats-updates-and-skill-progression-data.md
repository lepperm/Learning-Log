---
layout: journal
title: "Stats Updates, Style, and Skill Progression Data"
date: 2020-08-18 22:41:19 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [sass, markdown]
excerpt: Powering up my Stats pie chart, improving my CSS, and pulling in progression and course data to my skill collection entries.
references: ["https://sass-lang.com/documentation/variables", "http://blog.virtuacreative.com.br/markdown-tips-and-tricks.html","https://materialdesignicons.com/"]
skills: [sass, liquid, javascript, markdown]
timespent: 275
sleep: 
workout: 
---

## Journal

Adding Mermaid.JS back in without the use of a plugin made it very snappy, so I was excited to clean up the basic pie chart I dropped into Stats late last night. I added in a dark theme so that I was more legible, and then worked to group together smaller skill groups. An initial skill percentage threshold of 3.4% is used to scoop up the smaller skills and place them under an "Other" wedge, with a complete list of all scooped skills under the chart. Part of the reasoning for this number was that right around 3-4% was where the wedges were too close together to see, so it's partially to keep things readable. Ideally, I will always have a few "primary" wedges, anyway.

With the pie chart in place, making it quick to inject other charts around the blog was my next step, so I added a simplified `mermaid-init` module that loads the script and the initialization function when included. I also extracted all hard-coded SVGs around the blog and added them to an icons folder in `_includes` for a bit more flexibility.

Things have started getting messy in the site folder, so I added all of my root pages to `Pages` (simple enough) and isolated my Progression SVGs in `assets` to be referenced as Markdown definitions for easier Progression table entry. The Progression and regular SVGs will not overlap, so this works out nicely.

I've never used Sass before, but started getting into it a little bit by assigning color variables in my `styles.scss` file, which builds on the Minimia dark theme defaults. The badges were updated to give a little indication on hover, and I added a configurable "scroll to target" module with a subtle hover animation.

Truth be told, it has been difficult keeping myself from making lots of little animations. I know from reading portfolio reviews on Reddit that it's "substance over flashiness", and that's what I have been trying to hone in on more. Some day, however, I would really like to make something heavily animated for fun...I'll put that in the [Project Bucket]({{ site.baseurl }}/bucket-list/#projects).

Finally, I worked on cleaning up the Progression layout more. I like where it is headed, but really need to start filling out the tables. I've found three excellent sources of coursework online that I would like to parse into respective sub-lists. Eventually, I would like to automatically collect up a list of all "In Progress" and "Up Next" learning items into a hidden url, where I could have a to-do list for myself ready for when I have free time.

Towards this end, I've learned how to assign classes and IDs using Markdown, as well as discovering other more advanced syntax. I have gone ahead and assigned IDs to my skill progression tables, which should [greatly aid](https://stackoverflow.com/questions/3248869/how-do-i-get-data-from-a-data-table-in-javascript) with this to-do idea.

## Tasklist

- [x] Make Stats pie chart more legible and make components easily reusable for use in posts or other areas around the blog
- [x] Clean up folders
- [x] Further refine Progression/Skill pages
- [x] Clean up and improve styling, look into Sass?