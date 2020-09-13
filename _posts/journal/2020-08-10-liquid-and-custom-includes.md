---
layout: journal
title: "Liquid and Custom Includes"
excerpt: Practice with Liquid, adding social media buttons, time to read.
author: Max Lepper
categories: [journal]
tags: [jekyll]
date: 2020-08-10 23:34:22 -0400
modified_date: 2020-09-07 19:45:15 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [jekyll, liquid, seo]
references: ["https://devhints.io/jekyll", "https://shopify.github.io/liquid/", "https://jekyllcodex.org/without-plugins/", "https://www.sureoak.com/seo-tools"]
timespent: 220
sleep: 
recreation:
workout: 
---

## Journal

Today started out with the new log pages totally broken on the live site - whoops! It ended up being a number of small issues and things I didn't entirely understand while setting up the site, but the key takeaway was to use `baseurl` in the config to counteract the site being hosted at a subpage on GitLab Pages. There were a few different issues related to this that I encountered and was able to resolve, now that the issue was more visible.

I am interested in technical performance as well as SEO, so I did some learning into how Jekyll handles things. There were a few small tweaks and I played around with a dynamic head element to add tags from the post (even though tags don't really do anything for Google).

The rest of the time was spent exploring ideas for things I could flesh out the blog with, and particularly things that I could add directly without adding Gems. I quickly came across [a site with examples of jekyll functionality that could be implemented without plugins]({{page.references[2]}}), which contains lots of great ideas and examples. I modified each and tried to integrate them into my current layout, with satisfactory results. There will definitely need to be some SASS learning and design overhaul down the line, but I want the content to be there first before making any major modifications.

Armed with this practice, there are a few ideas for how to show the true content of this site and hopefully expose some of that _Good Data_™ for analytics and to quantify skill development. The overall organization needs to definitely be changed, but getting started generating the data is the single most critical step at this point.