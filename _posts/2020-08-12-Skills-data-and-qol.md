---
layout: journal
title: "Skills Data and Quality of Life Improvements"
date: 2020-08-12 23:24:16 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
excerpt: Working towards richer skills data, search improvements, javascript loading framework, QoL improvements
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://devhints.io/jekyll", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await", "https://javascript.info/async-await", "https://dmitryrogozhny.com/blog/how-to-add-custom-script-to-single-post-in-jekyll", "https://jekyllrb.com/docs/datafiles/"]
skills: [javascript, liquid, jekyll, markdown, html, css]
timespent: 445
---

## Journal

When I left off yesterday, I was able to extract a query from the search url, but not automatically load the results. Suspecting a timing/execution issue, I poked around a bit to confirm. My thought is to use an async method to first grab the query and then pass a search parameter to simple-jeykll-search. This was a great excuse for a refresher so I took some time to [learn]({{page.references[3]}}) [more]({{page.references[4]}}). In the process of tinkering with structure and the script placements, auto-search began working earlier than expected. Making the call async/await was very straight-forward, however, so I implemented it just to ensure that any valid search query will be fetched in the future.

Curious to see how certain Jekyll values are exposed, I implemented a quick previous and next post link at the bottom of each post and journal. At the time of writing, everything is in "_posts" and has not yet been moved into collections. If I get to collections, I will be interested to see if and how this behavior changes.

My about page was the template default, so it was time to change that. I wrote up a little blurb with links to GitLab and my portfolio, and passed over all my posts to spell check myself. The past three months has had me staring at computer screens for 13-17 hours every day, so my eyes have been struggling, and I haven't been good about my [eye exercises](https://gitlab.com/maxlepper/eye-helper) like I should... 😬 I was surprised at how many spelling errors from the past 4 days I had completely overlooked, despite it being a pet-peeve! Shout-out to my wife who can spot spelling errors like a hawk in 0.2 seconds, I hope reading these posts is less triggering going forward, haha!

My search JSON object is created by extracting all the Front Matter data from each post. The Skill page is partially functional right now, but I would really like to have more detailed information in a sortable format. Existing logic could be mostly moved into the skills.json file and populated correctly after some minor adjustments. As of this writing, however, I'm not exactly sure how to get the data back OUT of the JSON and into the skills table.

It appears that storing the skills.json in the "_data" folder doesn't get generated in "_site" on build, possibly because it contains Liquid syntax, but I'm not entirely positive about that. My thinking was that any file with a YAML opening space was hit on compile, but I probably missed something somewhere.

With a non-Liquid JSON via copying the generated skills.js from my assets/js/ folder into my root "_data" folder, it looks like site.data.skills now can pull in the information...to an extent. So now the question will be, can I use files from assets or includes like a _data source, OR, can I automate copying the generated JSON object from build to a _data directory.

The raw data comes in as:

```
{"name"=>"javascript", "category"=>"TBD", "progression"=>"TBD", "entries"=>"2", "time"=>"11 h 50 m", "lastused"=>"TBD"} {"name"=>"liquid", ...}
```

When I try to jsonify the data, I get:

```
"{\"name\":\"javascript\",\"category\":\"TBD\",\"progression\":\"TBD\",\"entries\":\"2\",\"time\":\"11 h 50 m\",\"lastused\":\"TBD\"}" "{\"name\":\"liquid\",\...}
```

For whatever reason, I cannot seem to access this data, although everything I'm reading makes it look super simple. Looks like it will have to sit broken for another day, unfortunately.

## Tasks

- [x] Update journal format to optionally include tasks (manual headers?)
- [x] Make post search auto-populate results with url query
- [x] Previous and next post links at the bottom of each post
- [x] Write a proper About page with external links
- [x] Spell checking!
- [x] Extract stats from all posts
- [x] Perform skills aggregation to json output
- [ ] <span title="Task to be added to next entry">=></span> Update skills to populate from json