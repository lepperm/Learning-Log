---
layout: journal
title: "Blog Improvements and Development Roadmap"
excerpt: Adding a few minor features to Learning Log, and getting to bed at a decent time!
author: Max Lepper
categories: [journal]
tags: [improvements]
date: 2020-11-24 23:06:29 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [general]
references: ["https://www.investopedia.com/terms/k/kaizen.asp","https://spec.fm/podcasts/developer-tea"]
timespent: 135
sleep: 315
recreation: 40
workout: 10
---

## Journal

Not to toot my own horn, but I feel like I made great progress towards getting caught up last night! The automatic drafts handling that I rolled out yesterday has taken a surprising amount of workflow-related stress off my shoulders. I really want to make an effort to more frequently identify [kaizen]({{page.references[0]}}) opportunities like this, as the core change to the code was maybe two lines. In fact, there have been a few ideas for improvements that I might try to work on today.

When building out my Projects table, I noticed that the readme for Learning Log was out of date, so I'd like to change that wording a bit. I feel like draft posts also need a little bit of a "heads up" before the content, just in case someone gets to a draft post for the first time accidentally.

Additionally, I feel like I have reached a certain level of proficiency with Markdown where I'm sure there's more to learn, but I feel like I'm towards the "approaching infinity" logarithmic end of time required to gain further ability. Since it's part of my core toolbelt now, it doesn't make sense to attribute time to it every time I, for example, write a blog post, as I'm just using it and not actively gaining skill. Being able to denote this in some way would be really helpful. In response, I've added a `proficiency` Front Matter tag to progression entries, which will add a little verified-like badge both in the Skills table and on the Progression page. This will probably need to be fleshed out a bit more, and I might be able to somehow integrate it with my "top skills" statistics, but I will want to think on that for a while.

I've been listening to the Career Development Roadmap on [Developer Tea]({{page.references[1]}}), and have found it to be very helpful for trying to ground myself mentally. When I get through the segments, I would like to write something up to both detail my impressions and where I am along the map. Truly, stumbling across the right information at the right time, and knowing what to do with the information when you encounter it, has been one of the biggest influencers of progression and development in my journey so far (next to internal motivation). I know that there is no "right" path to get there, but it's interesting seeing places where I stumbled onto the right path and where I have drifted off of it, either falling behind or rushing ahead. Some day, it is my sincere hope that I will be able to distill and communicate information from these experiences into helpful and actionable perspectives for others. I guess in a way, this blog is the super verbose version of acting towards that hope.

After dinner, I managed to do some reading, but ended up ultimately being pretty busy and not making much further progress on blog initiatives or posts before it was already 11 PM. With the holidays coming up, I want to make sure that I'm not too tired, so I decided to prioritize getting to bed.

## Tasklist

- [x] Add an additional notice on posts that are drafts that it is, in fact, a draft
- [x] Update README.md
- [x] Tidy up blog todo lists
- [x] Add proficiency Front Matter to Skill entries to denote items that I am pretty comfortable with but maybe don't have a lot of time towards
- [x] Add proficiency badges to skills in table and progression pages
- [x] Create "Quotes" json
- [ ] Build a "Quotes" element to replace existing quotes
- [ ] Add a "Books" page that scoops up all book progression items and outputs them to a table (can be hidden for now!)
- [ ] Revisit the priority list from [11/22]({% link _posts/journal/2020/11/2020-11-22-the-spinning-plate-conundrum.md %}) and develop a schedule
- [ ] Look into duplicated "Firebase" entries in Skills page on Learning Log
- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for [Storybook stories](https://storybook.js.org/docs/react/api/csf) in my Portfolio
- [ ] ~~11/30/20 - Compile results of post frequency poll~~ (since the pain point has been eliminated and poll engagement has been minimal, I don't know if there will be much value in doing this anymore)
