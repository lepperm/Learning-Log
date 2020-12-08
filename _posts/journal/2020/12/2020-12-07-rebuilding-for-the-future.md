---
layout: journal
title: "Rebuilding for the Future"
excerpt: Starting to rebuild my portfolio with a plan for future growth and better structured development.
author: Max Lepper
categories: [journal]
tags: [networking,portfolio,react,storybook]
date: 2020-12-07 23:44:58 -0400
modified_date:
published: true
status: bulletpoint
confidence: log
importance: 3
context: true
comments: true
skills: [react,material-ui,javascript,storybook,seo,gitlab-ci]
references: ["https://www.linkedin.com/pulse/part-2-sales-approach-landing-your-job-frank-morris-/","https://developers.google.com/search/docs/data-types/faqpage","https://search.google.com/test/rich-results?utm_campaign=devsite&utm_medium=jsonld&utm_source=faq-page"]
timespent: 390
sleep: 260
recreation: 20
workout: 0
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

There has been a lot of progress this past week, but as I seek to build my network and apply for roles, good branding and representation will be important. My portfolio is overdue for a redesign, and I'm strongly considering starting over from scratch.

Before that, though, I came across a post covering how to [use a sales approach to a job search]({{page.references[0]}}) (ADD FRANK'S POST HERE). This absolutely clicks and has made me realize that I was stopping short of where I _should_ have been trying to land with my efforts over the past few days. Thanks to my observation so far about how more senior organization members tend to connect more readily on LinkedIn, this seems like an excellent strategy to generate genuine and meaningful discussion. This approach feels much less uncomfortable, compared to what I was doing!

With the job search course corrected, it's clear that I need to prioritize my resume and portfolio ASAP if I am going to start having conversations with people directly, otherwise I may be poorly representing myself in these initial discussions.

With my portfolio, I've wanted to learn Storybook both to broaden my toolset and to also have a bit more fine control over the individual components making up what will be, essentially, my main face online. I know there were some issues with Storybook when I tried to integrate it on a fresh `create-react-app` build, but perhaps this has been resolved since then (they were!).

generated a new site and started getting set up
noticed that my repo was a little messed up
shuffled things around a bit and tried to get it to a good place for a commit

I had looked into it before and have been very interested to implement google rich results in my portfolio. The [FAQ]({{page.references[1]}}) formate seems to be the best fit. Google provides a neat [test environment]({{page.references[2]}}), so I spent some time building out some generic info and creating a contact form.

implemented crcf
configured options
pulled in templates

made adjustments to CI script, want to be more rigorous with my commits going forward, force proper workflow and staging. may push out to staging site for testing.

recreated my noscript data, added twitter
removed css, the delay is annoying. will need to add style eventually.
things seem to be working well!

may add in service worker again, primarily for cache management/busting.

Need to come up with some kind of favicon that doesn't look cringy

at the end of the night (read: early morning), the actual site content is bare, and that's not great, but I have a nice clean environment to work with tomorrow, and quite a few worries alleviated 

Definitely not enough time to finish blog, pushing out tonight.

**Packages to utilize**

- [x] firebase
- [x] react-router-dom
- [x] prop-types
- [x] Material UI
- [x] Prettier
- [x] Storybook
- [x] create-react-component-folder
- [ ] [@loadable/component](https://loadable-components.com/docs/getting-started/)
  - <https://reactjs.org/docs/code-splitting.html>
  - <https://create-react-app.dev/docs/code-splitting/>
- [ ] react-helmet (maybe? May need to look into SEO more, as first pass didn't perform as expected)
- [ ] Framer Motion (eventually? Low value at this stage)

- want to have a single core page (reference examples from a few posts back)
- react-router to swap out core contents
- mobile friendly
- persistent but minimal navbar and footer
- focus on keeping things clean with some stylization
- take time with components, want to build for flexibility over the long haul
- would like to use testing
- restructure repo, use tags and proper dedicated staging and production sites, maybe make staging password protected to help SEO on main?

https://softwareengineering.stackexchange.com/a/25996
How could I have my site function both with react and without? Do I need to re-build the site and do a `noscript` alternative CSS file, perhaps?

https://github.com/react-static/react-static/tree/master/

## Tasklist

- [x] Produce a key theme for the week
