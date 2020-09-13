---
layout: journal
title: "Supercharging the Skills Table, Tasks, and Stats"
excerpt: Adding snappy header sorting to the Skills table, adding even more Stats into the stats page, and making sure my Tasks page always has work for me ready to go.
author: Max Lepper
categories: [journal]
tags: [javascript]
date: 2020-08-21 23:46:02 -0400
modified_date: 2020-09-07 19:40:43 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [html, javascript, css, liquid]
references: ["https://www.w3schools.com/howto/howto_js_sort_table.asp","http://www.javascriptkit.com/dhtmltutors/customattributes.shtml","http://alanwsmith.com/jekyll-liquid-date-formatting-examples","https://stackoverflow.com/questions/31340018/get-the-difference-in-days-between-two-dates-in-jekyll","https://www.w3schools.com/howto/howto_css_arrows.asp", "https://css-tricks.com/snippets/css/css-triangle/","https://shopify.dev/docs/themes/liquid/reference/objects/for-loops","https://shopify.github.io/liquid/basics/operators/","https://webmasters.stackexchange.com/questions/119670/how-do-you-serve-jekyll-pages-with-gzip-compression-on-gitlab-pages","https://github.com/philnash/jekyll-gzip"]
timespent: 460
sleep:
recreation:
workout:
---

## Journal

The first task for today was to sort the Skills table by headers, and to be able to click again to flip direction. Since I'm filtering the data to make it more human-friendly, it's more difficult to accurately sort upon extraction. While searching, I learned about [data attributes]({{page.references[1]}}) in HTML to hide a copy of the unfiltered data in the respective table cells, making things much easier!

Starting with the [W3Schools example]({{page.references[0]}}), I modified their table script and extended it to sort either text or number values with additional parameters. Since it contains hardcoded empty data, I removed the progression and category keys from the skills json data set, as the skills collection is handling this data now.

With the table sorting on header clicks, displaying some indication to the user is the next step. I wanted to add CSS arrows to indicate sort direction, referencing Excel tables for the arrow direction. There are a ton of posts about making a CSS triangle, but most of them didn't explain why the code worked at all. After some searching for the "how," I found this [awesome animated example]({{page.references[5]}}).

With this last change, I believe that the Skills page is about as done as it can be for now! Maybe some of the content will change eventually, but I am very happy with this so far.

Now onto the stats page. Figuring out how long it has been since the last post was fun, since Liquid calculates at build but Javascript calculates when run on the user's browser. I converted the local time and the post time into UTC, did some math, and ejected a pretty string. For fun, I have it selectively adding an "and" to whatever the final time segment is, where applicable.

Having a "streak" mechanic for daily blog posts might not be sustainable in the long run, but it may also be a good motivator to keep me blogging more when I do blog. Liquid's `forloop` was very helpful to [keep track of locations through loops]({{page.references[6]}}) and to correctly add days to streaks while capturing broken streaks. I tried to build in some conditional outputs to encourage myself to keep making posts daily, like a broken streak penalty value, and stating if I have a current streak or not.

Cleaning up extra unflagged rows from displaying in skill progression pages was as simple as doing a few quick checks and wrapping the row loop in an `if` statement. I am using `status` as the primary determinating key value for all progression entries. I am not sure if this is the best decision right now, but considering this whole blog is about learning how to be a better developer, then tracking and completing learning exercises seems like it should be the #1 indicator.

Using the time difference calculations I worked out for my Stats pages, I replicated this to selectively display a Blog task if no post has been made within the last 24 hours. Originally, I was going to have it only appear if I still needed to make a post, but changed it to also give me an encouraging message if I have posted.

On the Tasks page, I wanted to keep track of any skills that still need progression entries created. Since I'm already matching skill tags to skill pages in the Skills page, by collecting the unmatched skills instead, I was able to flip my collection around to generate a progression page to-do list.

Finally, Tasks needs to present learning item suggestions in a far more controlled manner. The goal is to selectively have it offer a certain number of courses, ideally from the smallest not started ID to largest, from a certain number of skills. The current method of just randomly grabbing samples isn't conducive to actually learning in a structured way.

I struggled with this for a while, admittedly. I had been at things for a while already and was pretty tired, but made a goal to get things worked out before the end of the night. When taking a break for dinner, I wrote some pseudocode in line where I stopped to help myself remember my train of thought:

```javascript
/*
* In here, I need split openTasks apart and find the skill name to see if it matches our sample.
* If it does, then I need to collect all of the related skills and sort by ID number, which then gets sorted.
* Finally, display up to a total maximum of:
*
* per task limit = suggSplitEven ? (suggTaskSample/suggSkillSample) : suggTaskSample
*
* entries, incrementing a counter (tasksPicked) to keep track.
* If !suggSplitEven and we run out of entries before we get to the later tasks, skip them
*/
```

Coming back refreshed and focusing in, I was able to get things working! There are three primary configuration values: sample size for skills, total number of learning items, and if those learning items are split more-or-less evenly between skills. By adjusting these, it's easy to dial in on what is offered. Since it uses Liquid's `sample`, too, it randomizes the content every time the site is built.

The last thing on my to-do list is to modify the CI pipeline to gzip up project assets for GitLab Pages hosting. I found a recommended line for serving gzipped files to GitLab Pages [here]({{page.references[9]}}), and also encountered the [jekyll-gzip]({{page.references[10]}}) plugin. I'm going to try the CI line for now, but the plugin looks nice, and I'm interested to try it out!

I may go ahead and check off the gzip task now and hope that I'm not jinxing myself. If I am, I'll edit this post to let you know and criticize my reckless hubris. If there aren't any updates, then whew!

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Gzip project files as part of pipeline to serve via Pages
- [x] Sort skills table by header on click
- [x] Style skills table sorting
- [x] On skill progression, don't show additional empty rows beyond first loop
- [x] Stats - How long has it been from now until last post?
- [x] Stats - Longest streak of consecutive posts
- [x] Stats - Variables added to the top to quickly configure section options
- [x] Alternate tasks - Has a blog been drafted for today or tomorrow?
- [x] Alternate tasks - Add a skill listed in the skills table but not in the skills collection
- [x] When suggesting new tasks to start, tasks should be the lowest NS ID for the skill, change sample collection approach?