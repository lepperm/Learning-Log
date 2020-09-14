---
layout: journal
title: "Browser Notifications and the Update Event"
excerpt: Setting up and serving update notifications after tying into the PWA plugin update event.
author: Max Lepper
categories: [journal]
tags: [javascript, service workers]
date: 2020-09-13 21:41:48 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
skills: [javascript]
references: ["https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events","https://medium.com/javascript-dots/creating-browser-notification-in-javascript-79e91bfb76c8"]
timespent: 160
sleep: 460
recreation: 95
workout:
---

## Journal

As expected, there was no notification in my installed app when the updates were pushed out, so I need to dig into this `sw.update` event triggered by the `jekyll-pwa-plugin`. First up, I needed to [learn about events]({{page.references[0]}}) and how to use them. Implementing this, I was able to get a simple alert box to display while navigating the site after an update. It's not the most elegant solution, but it works! The alert box was changed to a confirm box, and confirming refreshes the page. I am curious if, on opening the web app, it will pop up immediately, or if I will have to navigate to a page before it will prompt for updates. While scrolling through other references, I stumbled across this [blog about implementing browser notifications]({{page.references[1]}}), and playing around with that in conjunction with the `sw.update` event yielded improved results.

I spent some time rearranging the functions, testing different types and conditions of notifications, and trying to make the notifications more informative than just "hey, please refresh!" Visibility state conditions were interesting to work with, and it was incredibly satisfying to:

1. Tab away from the site
2. Right-click and refresh my site without making the tab active
3. Get the notification with this post title
4. Click on the notification
5. And have the tab become active and switch to the latest post!

I am curious to see if this is enough to start getting proper updates on my web apps, but I suspect that it's still not there yet. Either way, this as been a fun experiment. There is a _lot_ to learn about service workers and making all of this work. Probably more than I should really look into right now, as I've already trudged much further into the weeds than I should have. Here are a few other posts that I read through, but would like to revisit later:

- <https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679>
- <https://michielsioen.be/2019-10-26-the-pwa-experiment-pt1-setup/>
- <https://michielsioen.be/2019-11-23-the-pwa-experiment-pt2-debugging/>
- <https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717>

Today ended up being a pretty jam-packed day, so I didn't get to much else on the coding front. I hope to get that references list page done soon!

## Tasklist

- [ ] <span title="Task to be added to next entry">=></span> Add some way to see a list of all references used across the entire site
- [x] Implement a simple alert when new content is delivered