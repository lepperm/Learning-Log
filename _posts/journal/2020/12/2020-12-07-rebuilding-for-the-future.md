---
layout: journal
title: "Rebuilding for the Future"
excerpt: Starting to rebuild my portfolio with a plan for future growth and better structured development.
author: Max Lepper
categories: [journal]
tags: [networking,portfolio,react,storybook]
date: 2020-12-07 23:44:58 -0400
modified_date: 2020-12-11 18:29:40 -0400
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [react,material-ui,javascript,storybook,seo,gitlab-ci]
references: ["https://www.linkedin.com/pulse/part-2-sales-approach-landing-your-job-frank-morris-/","https://developers.google.com/search/docs/data-types/faqpage","https://search.google.com/test/rich-results?utm_campaign=devsite&utm_medium=jsonld&utm_source=faq-page","https://softwareengineering.stackexchange.com/a/25996"]
timespent: 390
sleep: 260
recreation: 20
workout: 0
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

There has been a lot of progress this past week, but as I seek to build my network and apply for roles, good branding and representation will be important. My portfolio is overdue for a redesign, and I'm strongly considering starting over from scratch.

Before that, though, I came across a post covering how to [use a sales approach to a job search]({{page.references[0]}}). This absolutely clicks and has made me realize that I was stopping short of where I _should_ have been trying to land with my efforts over the past few days. Thanks to my observation so far about how more senior organization members tend to connect more readily on LinkedIn, this seems like an excellent strategy to generate genuine and meaningful discussion. This approach feels much less uncomfortable, compared to what I was doing!

With the job search course-corrected a bit, it's clear that I need to prioritize my resume and portfolio if I am going to start having conversations with people directly, otherwise I may be poorly representing myself in these initial discussions!

With my portfolio, I've wanted to learn Storybook both to broaden my toolset and to also have a bit more fine control over the individual components making up what will be, essentially, my brand HQ online. I know there were some issues with Storybook when I tried to integrate it on a fresh `create-react-app` build, but perhaps this has been resolved since then (they were!).

I made a fresh app with `create-react-app` and started getting all of my packages, presets, and configurations set up. I noticed that my repository had gotten mixed up at some point, so I spent a little time carefully comparing the old files with the new files and pulling over snippets as appropriate. The master and dev branches then got shuffled around and set back to how they should have been, adding a tag before mixing things around. For now, I modified my CI pipeline to allow dev commits to only deploy to the staging environment, and I will be more rigorous about a proper release sequence.

I had looked into it before and have been very interested to implement google rich results in my portfolio. The [FAQ]({{page.references[1]}}) format seems to be the most appropriate fit for this situation. Google provides a neat [test environment]({{page.references[2]}}), so I spent some time building out some generic info and creating a contact form in Google Forms. I don't know if these will show up when I search for my staging site, but that would be really neat to see live before pushing to production! In the meantime, here's how they look in the rich search console:

{% include blog-img.html source="/assets/images/posts/2020/12/07/rich_search.png" alt="The preview output from the Google Rich Search console" %}

Next up was implementing `create-react-component-folders`, which I had played around with a bit previously. The templates didn't get adjusted just yet, but I went ahead and pulled everything in to modify moving forward.

After that, I recreated the content of my `noscript` section in my `index.html`, adding Twitter and removing the old CSS. I had animations that delayed how the information was revealed to a user, but now that I've been at this a few months, I realized how annoying that was, haha. I'll eventually need to add some styling, but for now, this still gives users something to work with.

I am thinking about adding in a service worker again, primarily for cache management/busting. Field testing Learning Log, I have some things I like and some things I don't like about how this performs, as sometimes old content gets trapped in the webapp. Related, I also need to come up with some kind of favicon that doesn't look cringy.

At the end of the night (read: early morning), the actual site content is bare which is not great, but I have a nice clean environment to work with tomorrow, and quite a few of my initial worries alleviated. ~~Definitely not enough time to finish blog, pushing out tonight.~~ It took a few days, but I've finally had a chance to get back and finish this blog, whew!

**Packages to utilize**

- [x] Firebase
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
- [ ] [react-static](https://github.com/react-static/react-static/tree/master/)
- [ ] Framer Motion (eventually? Low value at this stage)

**Focus Areas**

- Want to have a single core page (reference examples from a few posts back)
- React-router to swap out core contents
- Mobile friendly
- Persistent but minimal navbar and footer
- Focus on keeping things clean with some stylization
- Take time with components, want to build for flexibility over the long haul
- Would like to use testing
- Restructure repo, use tags and proper dedicated staging and production sites, maybe make staging password protected to help SEO on production? Once the new design is live, that is!
- How could I have my site function both with react and without? Do I need to re-build the site and do a `noscript` alternative CSS file, perhaps? Look at `react-static`

## Tasklist

- [x] Produce a key theme for the week
