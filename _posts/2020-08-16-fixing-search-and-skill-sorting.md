---
layout: journal
title: "Fixing Search and Skill Sorting"
date: 2020-08-16 06:54:32 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
excerpt: Hooking up skill details, sorting the skill table, fixing query search, and a few dead ends.
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://jekyllrb.com/docs/configuration/options/", "https://stackoverflow.com/questions/52956555/sorting-by-last-in-jekyll-doesnt-work-reverse-sorting-etc", "https://www.w3schools.com/css/css3_flexbox.asp", "https://www.w3schools.com/howto/howto_js_sort_table.asp"]
skills: [javascript, liquid, jekyll, html, css]
timespent: 415
---

## Journal

<style>
.row {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
.column {
  display: flex;
}
.text {
  padding-bottom: 1.5em;
}
.image {
  width: 80%;
  align-self: center;
}
@media all and (min-width: 40em) {
  .row {
    flex-flow: row wrap;
  }

  .text {
    width: 50%;
    padding-right: 1.5em;
  }

  .image {
    width: 45%;
  }
}
</style>
<div class="row">
<div class="column text">
It would be really nice to automate setting up and time-stamping these new entries! It is interesting to be kind of working in Ruby but still having not touched any Ruby apart from the initial setup. This has made adoption very easy, but I am sure that also means I'm missing out on some native power. I have also heard about Gulp, and it is high on my list of things to look into more, because I could always do with more automation in my life.
</div>
<div class="column image">
<img src="{{site.baseurl}}/assets/images/posts/2020/08/16/programmer-move.jpg" alt="Taking 10 days to automate a 10 minute task - every one of my programmer friends" style="width:100%;"/>
</div>
</div>
<br/>
Skill progression pages need an output page, so I started a new layout and assigned it to my starter skills. I am not yet sure what all I want to show here, so I might keep it simple for the time being. I also want to only link to the skill page if there is a matching hit in the skill table.

Not having a coherent order to the skill list, I took another stab at getting sorting working on my JSON data. The [Jekyll docs]({{page.references[1]}}) claim that I am able to reverse sort order in their sort method, but this did not seem to actually work. With a little searching, [this was confirmed]({{page.references[3]}}). I love the last comment on the thread:

>“It's always best to refer to the only source of truth - the source code”
>
> -- <cite><a href="https://stackoverflow.com/questions/52956555/sorting-by-last-in-jekyll-doesnt-work-reverse-sorting-etc#comment102259766_52959052">Jack L.</a></cite>

This is something that I'll need to keep in mind. While other people's code can sometimes be intimidating and I might not know what's going on, taking the time to figure it out will reveal what is actually happening.

For fun, I wanted to try adding an image to a post. Immediately, the issue was that the image was closer to square than a nice hero-style horizontally dominant image. To address this, I felt a 2-column flexbox that collapses into a column on mobile might be nice, so I pulled up [the trusty w3 docs]({{page.references[4]}}) for reference. I know that there is a whitespace gap under the first paragraph of text. Looking into things a little, it sounds like I could make a responsive float that would help wrap the text around but still collapse on mobile with media queries, but that'll be something to try at a later date.

While looking into sorting the Skills table, my initial thought was to use the url query to grab sort parameters for column and direction and then use that to modify the table. I spent way too long fiddling with this, only to have the realization that Liquid isn't going to rebuild the table onload...of course. Whoops! Fortunately, all was not lost - while I spent a good bit of time trying to pass parameters and track values, I was able to improve the search function! By adding a timeout of 0ms, pushing the query value to the search function now reliably fetches the results as expected.

Feeling a bit defeated from getting distracted all night instead of powering through my backlog as I had planned, I resolved to just sort by time with the most frequently logged skills at the top of the list. It looks like it should be fairly simple to make this table [sortable by header]({{page.references[5]}})

I wanted to have a few simple graphs and charts on here, and had bumped into Mermaid in the past few days. I took some time to try and implement it, but was ultimately concerned with how much lag time it introduced to display a fairly simple pie chart.

## Tasklist

- [x] Make a post with an image and responsive styling
- [x] Figure out how to sort Skills alphabetically
- [ ] ~~Allow users to re-sort the Skills page with a url query~~ This should be natively possible with JS/HTML
- [x] Fix timing issue with Search page auto-search
- [ ] ~~Add a pie chart to stats for skills with Mermaid.~~ Laggy, removing
