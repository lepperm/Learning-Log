---
layout: journal
title: "Working Skills and Adding Stats"
date: 2020-08-13 23:41:23 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
excerpt: Fixing my Skills page and using the lessons learned to capture blog stats.
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://jekyllrb.com/docs/datafiles/", "https://www.w3.org/TR/2016/REC-html51-20161101/textlevel-semantics.html#the-a-element", "https://jekyllrb.com/docs/liquid/tags/#links", "https://stackoverflow.com/users/14096749/max-l","https://stackoverflow.com/questions/63400845/how-can-i-use-a-liquid-generated-json-as-a-data-site-data-object-in-jekyll"]
skills: [javascript, liquid, jekyll, html, css]
timespent: 305
---

## Journal

Right off the bat, I started over going through my skills data. The JSON was valid, and I could see the data with an "inspect" filter. I slowly iterated on accessing the data through index calls, console.logs, and inspects in little steps. Not even 5 minutes in...it just worked, and I felt kind of silly. I was trying to do far too much, and breaking the data in the process. In the end, it really was as simple as everyone made it look:

```
// %s redacted for accurate code
{- for skill in site.data.skills -}
  <script>console.log("{{ skill.name }}");</script>
{- endfor -}
```

Live and learn, right? The good news is that I now have incredibly simple access to all kinds of data. I went ahead and made each skill name in the table a hidden anchor so that I can redirect skill links from journal pages to the skill table entry. Regarding moving the data files around, I finally created a [Stack Overflow account]({{page.references[5]}}) and posted my [first question]({{page.references[6]}}). My concern is that this may cause me CI issues, or certainly at least be something that I forget to do occasionally.

Watching the console log on my live site, I noticed a 503 error related to GitLab that would appear on every refresh in every page. I assume this has something to do with access permissions, but since my repo is set to Public and the most open visibility option is "Everyone with Access," I'm not sure how I could make it more open than it already is. I made a comment in the GitLab chat. If I don't hear anything, then I may move forward with opening a ticket, but I am also not sure if it's anything to worry about.

To start generating site statistics, I decided to hijack the JSON object created for `jekyll-simple-search` and include a bit more data in a more flexible format. Using what I learned for the skills data, I was able to generate multiple arrays of similar data, and start generating some simple statistics. Right now, the loops are made up of repeated code, so I will need to find a way to make it more reusable. There seem to be a few different types of json array patterns I have been running into with Liquid, so I may possibly try to capture some of those as includes. I assume it would probably take an `include` statement wrapped in a `capture`...this might need some experimenting!

## Tasks

- [x] <span title="Task carried over from previous day">=X</span> Update skills to populate from json
- [x] Make each skill entry in the table an anchor that looks like regular text
- [x] Clicking journal skills redirects to the skill table entry
- [x] Extract stats from all posts
- [x] Post to ask about automating moving my compiled JSON to _data, or what the right way to handle this would be (https://stackoverflow.com/questions/63400845/how-can-i-use-a-liquid-generated-json-as-a-data-site-data-object-in-jekyll)
- [x] Create a stats page to summarize stats from the entire blog
- [ ] <span title="Task to be added to next entry">=></span> Change previous and next arrows to wrap correctly
- [ ] <span title="Task to be added to next entry">=></span> Modify date, author, time to read, word count, and social media sharing to wrap correctly
- [ ] <span title="Task to be added to next entry">=></span> Look into GitLab Pages `GET https://gitlab.com/users/sign_in 503` error in console on each page load (https://gitter.im/gitlab/gitlab#)