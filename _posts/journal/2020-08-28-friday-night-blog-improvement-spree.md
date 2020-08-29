---
layout: journal
title: "Friday Night Blog Improvement Spree"
date: 2020-08-28 23:10:57 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [journal]
excerpt: Cleaning up some more items around the site, and adding in features related to the upcoming large blog post.
references: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator","https://learngitbranching.js.org/","https://www.freecodecamp.org/maxlepper","https://shopify.dev/docs/themes/liquid/reference/objects/for-loops","https://stackoverflow.com/questions/46672231/in-jekyll-how-to-show-posts-from-last-week"]
skills: [css, html, liquid]
timespent: 280
sleep: 310
workout: 
---

## Journal

While blog images are looking pretty nice lately, it does require dropping in a chunk of code into new blogs, and any changes require going back through and updating old posts. No more, though! I have pulled in-blog images into an `include` function with `source` and `alt` parameters, allowing me to now drop in images with proper metadata with a single line. Moving forward, I can now adjust only the `include` function and have all images update accordingly. I would eventually like to add things like lazy loading, selectively using png or webp depending on browser, and better mobile performance and scaling, so this helps get things cleaned up now.

Related to my large blog post, which should get the final edits tomorrow, I've added in a parameter to log my sleep from the previous night to each post. This will largely just be for myself, but my thinking is that I could use this data to see if I can reveal any trends in my productivity/creativity/retention with relation to time. Additionally, it should be pretty easy to create a Task for myself if my average sleep time over X days is under a certain threshold value. When sleep time is the only free time you have to sacrifice, it becomes very tempting to use...so this will help me to be cognizant of sleep trends and hold myself accountable. I know that sacrificing sleep comes at the expense of efficiency, and needs to be carefully controlled.

Tasks is getting pretty long now, which is nice for me, but could maybe do with some faster navigation. I added a very simple table of contents, similar to the Stats page. My experience with TOCs in Jekyll so far has been interesting and frustrating at times. A markdown TOC in a `.md` file works great. This same approach ends up breaking my endpoint pages, like Tasks and Stats, if I change from `.html` to `.md`. Depending on how I go about including and capturing the TOC, there's a scope issue that prevents it from correctly capturing the page. My thinking is that this may be either something that could be solved with either a Javascript function or by reworking my endpoint pages and associated breaking `include` files. Tasks also got a truncated Learning Items section, where I can specify the total number of skills to display initially, and then you can click a link to expand all, similar to the completed improvements section.

I had written the `min-to-time` function a while back and was noticing that there was an extra space on the output. Upon review, it was immediately apparent that I had written it a while back (~ two weeks, basically ancient history now), so I tore it apart. The rewrite cleans up verbose mode and makes condensed mode more legible, while also correcting the spacing issue.

Because I can't leave anything alone, it doesn't make sense to show alphabetical anchor links for the Skills table list when you're not sorting by name. The pieces were already there, I just moved the construction of the link elements inside a function, and then either populate the links or nothing inside the target `div` using a [ternary]({{page.references[0]}}) at the end of the table sort function.

I've reached a point in the evening where I should probably try to actually unwind from the week a bit. It's moments like these where I question if I honestly know how to relax. I could play a game, or read a book, or watch something, but the ever-looming sense of urgency makes me feel guilty for even considering not working on a project or a learning goal. I know that I will pay for not allowing my brain to rest, however. The [Learn Git Branching]({{page.references[1]}}) site was perfect, as it was useful information presented as puzzles with nice animations. I'm going to work on [freeCodeCamp]({{page.references[2]}}) for a few minutes and, depending on how productive it feels, potentially call it quits for the day.

## Tasklist

- [x] Create a blog post image wrapper
- [x] Begin recording sleep values as an accountability measure
- [x] Add TOC to Tasks page (it's getting a bit long...)
- [x] Only show alphabetical skill table anchor shortcuts when sorted by name
- [x] Make Learning Item lists collapsible, truncate list?