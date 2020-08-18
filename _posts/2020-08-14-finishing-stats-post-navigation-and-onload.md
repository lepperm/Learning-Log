---
layout: journal
title: "Finishing Stats, Post Navigation, and OnLoad"
date: 2020-08-14 22:37:31 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
excerpt: Finishing the stats page (sort of), adding some CSS to post-to-post navigation and the post header info, and reworking onload into an include function.
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://jekyllrb.com/docs/configuration/options/","https://jekyllrb.com/docs/permalinks/", "https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8"]
skills: [javascript, liquid, jekyll, html, css]
timespent: 330
---

## Journal

Early today, I noticed that Crisp was not loading on the search page. After picking things apart, I learned that there can only be one `window.onload` call per page, and that order will take precedence. In response, I put together an `onload.html` include to handle onload events in each page. In this method, I look for variables to be set at load time and use that to form my calls. This will allow me to selectively enable Crisp, or enable search provided I create a search object, and any other additional functionality down the road.

It had happened a few times, but while testing, I noticed that Search didn't always auto-populate results correctly. My initial suspicion was that I had set up my async function incorrectly, so I [did some reading]({{page.references[4]}}) and tried again. Now, I feel more confident that my async is set up...but I'm still only having about 50% success rate with search queries loading on page load. It finds the results immediately when the input field value updates, so I have mark this as done for now and will need to look into it more in the future.

There were some issues with how text was breaking on my phone, so I made modifications to the post and journal layouts. In the post layout, I noticed that `page.modified_date` was called and adapted my post Front Matter to support and display this new parameter, when present.

Curious to see if I can reduce the duplicated code, a second Stats page was created. Naturally, this appeared in the top  navigation bar, but it is not something that I would necessarily want to have front-and-center over the current primary stats page. I want the page to always be shown unless specifically should be hidden, so I created `exclude` Front Matter flags in my Pages. Copying the `header.html` to my includes folder, it was fairly straight-forward to selectively enable or disable showing pages in navigation using an `unless` with `my_page.exclude`.

The previous and next post links at the bottom of each page have needed some work. I modified them into flex buttons and added some simple styling in CSS. I also reworked the badges I'm using for the Category and Tag pages into something that actually looks like badges, and I am very pleased with how they turned out! Jekyll uses Sass by default, however I have not yet gotten around to working with Sass too much, directly. I am on a time crunch to launch and get this site as functional as possible so that I can switch back to a different project. I do feel like working on this site and re-reading through my logs has already greatly helped me feel more capable.

The Stats page got a little more work, with the average post time stat coming together nicely. The top used references is generating the final data, but it has fallen into the same pitfall as when I initially developed my skills array. Related, I tried to sort my `site.data.skills` information but ran into compiler issues, so I will also need to look into that.

My journal content was rearranged to put the log content first, and then the summary information second. This may be presenting information to users that is more expected first, and then additional and less relevant-seeming summary data further down the page.

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Change previous and next arrows to wrap correctly
- [x] <span title="Task carried over from previous day">=X</span> Modify date, author, time to read, word count, and social media sharing to wrap correctly
- [ ] <span title="Task to be added to next entry">=></span> Look into GitLab Pages `GET https://gitlab.com/users/sign_in 503` error in console on each page load [(https://gitter.im/gitlab/gitlab#)](https://gitter.im/gitlab/gitlab#)
- [x] Finish processing initial list of stats for Stats page
- [x] Add anchor-linked CSS to Category and Tag buttons on their respective pages
- [x] "No results found" on certain skill searches, troubleshoot