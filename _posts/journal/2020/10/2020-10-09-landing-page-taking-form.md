---
layout: journal
title: "Landing Page Taking Form"
excerpt: Building out the TD Collection landing page, and the last day for Irregular Café.
author: Max Lepper
categories: [journal]
tags: [tdc,product lab,material-ui]
date: 2020-10-09 23:00:00 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [material-ui,react]
references: ["https://material-ui.com/components/grid/","https://material-ui.com/api/grid/","https://www.irregular.cafe/"]
timespent: 395
sleep: 320
recreation: 0
workout: 0
---

## Journal

This morning was the last day for [Irregular Café]({{page.references[2]}}). It's going on a 2+ week hiatus, and hopefully will eventually return ready to attract a more dynamic crowd. It was around for about a month, and very quickly became something that got me excited and motivated to get out of bed and to drive to work early. I have met some incredibly interesting people along the way, learned a lot from them, gotten more comfortable speaking around people again (thank goodness, it was rough for a bit), and received valuable tips and feedback about what I'm doing as part of this journey.

I hesitate to more directly ask for input on things. Not for fear of rejection or criticism, but for...I suppose a fear of not properly respecting other people's time? I don't want to ask someone to do something for me when I haven't done my part first. Now that I've written this out, this sounds like self-worth mentality things again...haha whoops. Despite my ingrained hesitation, Irregular Café has shown me that there are people who are willing and happy to share their knowledge and kick around ideas. Maybe I can use this hiatus to reflect and ask for more direct feedback.

Picking up from yesterday, my primary goal for tonight is to build out the TD Collection landing page structure to try and match our layout.

I started out hand-drafting our layout and blocking out components for elements and how they should be nested. The content for our feature cards are nested about 4 grids deep, so this was helpful to track my place while initially building things out.

About halfway through the evening, Neal popped in to help figure out some CSS shenanigans that were going on and to suggest adjustments to the layout. He also coached me through using Material UI styles and connect some loose dots I had in my understanding.

The evening wrapped up with most of the core elements from our draft present on the page and in approximately the right locations:

{% include blog-img.html source="/assets/images/posts/2020/10/09/build01.png" alt="The components of the site slowly coming together" %}

Here’s the current draft for comparison:

{% include blog-img.html source="/assets/images/posts/2020/10/09/draft03.png" alt="The latest draft for our landing page (v3)" %}

Next up will be adding the background and adjusting the spacing of the elements, and then making sure that they properly scale. Right now, the page does not play very nice with mobile, and the elements all horizontally crunch together. Normally, we’d want to design for this first, but laying out for desktop was quicker and more intuitive for me.

At this stage, the landing page is already kind of a “very nice to have” element, so handling mobile gracefully falls under this umbrella. I’ve written down notes for how I think it should collapse (stack into column, reverse order between title and features, etc), so hopefully at least some of that can get rolled into refactoring.

Schedule-wise, I had gotten word that I will need to be out of town for the entire last week of the month for work, and Neal will also be out for full week. With this, our team has been discussing how to dial in on what exactly we want to have by the end of the month and determine the tasks to make it happen.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Work on TDC landing page