---
layout: journal
title: "Canonical URLs and CSS Consistency"
date: 2020-09-02 22:35:29 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [html, css]
excerpt: Looking into a malformed canonical URL and making CSS adjustments to the footer and interactive elements.
references: ["https://www.freecodecamp.org/learn", "https://search.google.com/search-console/about", "https://marketingplatform.google.com/about/analytics/", "https://stackoverflow.com/questions/10161177/url-with-multiple-forward-slashes-does-it-break-anything"]
skills: [javascript, html, css]
timespent: 200
sleep: 295
workout: 
---

## Journal

I stayed up too late last night being cheeky and throwing the pipeline badge up in my footer, after I had already pushed my updates. As I write more blogs, my site takes longer and longer to build, and I like to verify that I didn't break anything via mobile after my push. Having the badge in my footer will help me to verify if my pipeline has failed, or if it's just taking a little longer to "cook." I have been lucky that, so far, the GitLab runners seem to be very responsive, and I've never had to wait very long for my pipeline tasks to get scooped up.

My badge was falling back to alt text with the message, "could not load image," and I went on a bit of a wild CSS goose chase before finding a Stack Overflow suggestion to check Privacy Badger, which is a Firefox plugin I use. Yup, turns out GitLab was blocked, and granting it access popped the badge up immediately. Now, however, the footer elements smash into each other on mobile, so I'll need to see how the footer is structured to correct things.

Every few days, I like to try searching for my sites and check out both [Google Analytics]({{page.references[2]}}) and [Google Search Console]({{page.references[1]}}). My portfolio is live, even with relatively poor results until I figure out how to get Helmet playing nice, but Learning Log is completely invisible! I figured that it would at least show up somewhere in the list, but ten pages in with "max lepper learning log" yielded absolutely nothing. I know I've read about some issues with the site being hosted on GitLabs, and it might be good to add some more DNS rules. Yet, even with what currently appears to be a totally empty site to the google crawlers, my portfolio site (react) at least shows up a few links down, so something odd is going on with the simpler-by-comparison SEO of Learning Log (jekyll). Digging around the Google Search Console, I spotted something that stood out:

`User-declared canonical: https://maxlepper.gitlab.io//learning-log/`

Well, that doesn't look correct! Firing up the local environment, I went to the page to inspect the metadata directly:

{% include blog-img.html source="/assets/images/posts/2020/09/02/whoops01.png" alt="" %}

Hmm, the canonical URL in my development environment looks fine. But on the live site...

{% include blog-img.html source="/assets/images/posts/2020/09/02/whoops02.png" alt="An extra slash in my canonical URL" %}

There it is, the extra slash **does** appear. My suspicion for what is happening is that the default configuration for the local development environment URL (`http://localhost:4000`) is properly formatted from the beginning, and that I made an error in my configuration file.

{% include blog-img.html source="/assets/images/posts/2020/09/02/whoops03.png" alt="" %}

Bingo, there's an extra slash in my URL configuration parameter!

But, now that I feel the issue is fairly narrowed down, does this actually break anything? Adding [extra slashes](https://maxlepper.gitlab.io////learning-log///////skills/html//) into the URL on the live site seems to still navigate to the correct endpoint! I found a [discussion about this issue on Stack Overflow]({{page.references[3]}}), and it seems like there is some debate over whether or not it is "okay." My take-away from the thead was that extraneous slashes in the URL has the potential to cause resource routing issues and poor SEO (what I'm experiencing), so correcting the issue will be a good step, regardless if it ultimately corrects my search invisibility. When I push this log tonight, I will verify that the canonical URLs update as intended.

For the footer, I ended up cloning the existing elements and purposing them. This is definitely hackey, but I need to learn more about Sass and Minimia's structure of importing and setting styles before I will be able to properly set this up. I had attempted to add a second class to the right-hand column with a media query that selectively aligns the contents to the right or left dependent on the screen size. Everything I tried was not get applied to the elements through Firefox Developer Tools, however, even including forcing a color change with `!important`. I'm sure that it's something simple I'm missing, and my hope is to continuously improve this site (and fix things like this) as I learn more.

The main body of the blog getting longer and longer with every day, so I would like a quick way to filter the main page content. This was solved with a select box, custom HTML element data values, and a little JavaScript to add or remove `hidden` tags as the select box value is updated.

With multiple interactive elements, my CSS situation isn't cutting it, as everything feels like it behaves a little bit differently. I created new `interactive` color variables to denote both inactive and hover/focus states, and updated all interactive elements to use the consistent colors, states, and transitions. I don't want to get too flashy with animations, but a subtle 0.3s color change on an element does a nice job of quickly communicating to the user that you can do something by clicking it, I feel. Icons and graphical buttons get a matching background color to the site itself, whereas text boxes and buttons containing text get a soft dark-grey fill to make them stand out better against the background. This is especially noticeable on the Search page, as it is more immediately obvious that the main search bar has focus on page load.

The rest of the evening was pretty busy, and (thanks to self-bullying from my Tasks page) I need to get to bed early to raise my sleep target. I wrapped things up for the day by working on a few more items in the Applied Accessibility Challenges on [FreeCodeCamp]({{page.references[0]}}). With this journal complete, I'm excited to see if I correctly resolve the canonical URL issue!

## Tasklist

- [x] Work towards FreeCodeCamp

### Blog Changes
- [x] Google Search Console claims that my user-declared canonical URL for the landing page is incorrect! Attempt to resolve, adn revisit if unsuccessful
- [x] Am I declaring canonical URLS in the meta for each page? (Yes! They were wrong, same as above)
- [x] Footer spacing and updates
- [x] Allow for optional sorting of landing page by post categories
- [x] Add styling to post filter
- [x] Update CSS for all interactive elements for clarity and consistency