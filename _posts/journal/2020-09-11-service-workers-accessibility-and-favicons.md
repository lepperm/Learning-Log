---
layout: journal
title: "Service Workers, Accessibility, and Favicons"
excerpt: Finally adding a favicon to this site and learning about setting up a service worker to get things working as a progressive web app, plus focusing on accessibility.
author: Max Lepper
categories: [journal]
tags: [service workers, css, accessibility]
date: 2020-09-11 23:27:06 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
skills: [css, html, accessibility]
references: ["https://www.freecodecamp.org/learn","https://codepen.io/lepperm","https://codepen.io/lepperm/pen/abNYBJK","https://uxwing.com/","https://realfavicongenerator.net/","https://github.com/lavas-project/jekyll-pwa","https://developer.mozilla.org/en-US/docs/Web/Manifest","https://developers.google.com/web/fundamentals/primers/service-workers","https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679","https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/","https://stackoverflow.com/questions/45536537/centering-in-css-grid"]
timespent: 345
sleep: 390
workout:
---

## Journal

I created a new [codepen.io]({{page.references[1]}}) account and started into the Responsive Web Design Projects for [FreeCodeCamp]({{page.references[0]}}). The very first project in the list is a [tribute page]({{page.references[2]}}), and after a brief introduction to CodePen, I had forked the FCC test suite project and started satisfying the user stories.

One thing that is not specifically required, but that I would like to strive for, is increasing context and accessibility in these projects. Since they are smaller and fairly simple, it would be a great testing ground to mentally start getting a handle for how elements should be grouped and where values and settings need to be added. That being said, lingering on projects too long is objectively Bad™, especially with 111+ projects in the FCC backlog. I discovered the [WAVE Accessibility Extension]({{page.references[9]}}) for Firefox, which seems to do a great job of giving examples and showing exactly where my accessibility should be improved. There is a decent amount of work to clean up.

Here's the current version of the project:

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="js,result" data-user="lepperm" data-slug-hash="abNYBJK" data-preview="true" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="FCC Tribute Page: Project 1.1">
  <span>See the Pen <a href="https://codepen.io/lepperm/pen/abNYBJK">
  FCC Tribute Page: Project 1.1</a> by maxlepper (<a href="https://codepen.io/lepperm">@lepperm</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Chances are, unless you're actively following this blog, the above Pen will already have a proper completed tribute. As of this writing, though, I still have quite a few details to fill in before I can stamp it as "done". I feel a bit guilty about not aiming for a more fleshed-out page, especially as I read more about Alice Ball's accomplishments, but fortunately Wikipedia has many well-written references attributed and my intent is primarily awareness/amplification. And completing the page, of course.

Up to this point, my site has not had a favicon, mostly because I haven't known what to use, but it has definitely been bugging me. Plus, the debugger is constantly screaming at me. At least for the time being, I decided to go with a simple open book, as Learning Log has been, in a sense, me trying to be an "open book" about my experiences. The selection is a bit limited, but I ended up picking the `read-book-icon` from [UXWing]({{page.references[3]}}), which has a very flexible license agreement that both allows for modification and does not require attribution. I will be keeping them in mind as a solid option going forward! Next up was to create the actual favicon, and I found this [great online tool with many simple options]({{page.references[4]}}). Following the instructions, it was simple to get everything added to the site.

In the files generated, I found a `site.webmanifest` file, and a little research showed me that this was related to progressive web apps. I've done a little bit with this on my portfolio site, so why the heck not try to add it to Learning Log, too? I found a nice-looking [PWA Jekyll gem plugin]({{page.references[5]}}) immediately, and set out to get it integrated. The generated [web app manifest]({{page.references[6]}}) could be used as-is, and I took a little time to read up on [service workers]({{page.references[7]}}) to build out my understanding of what happens behind the scenes.

After tweaking my configuration a little bit, I was able to use Chrome Developer Tools to confirm that the service worker was live and caching my site!

{% include blog-img.html source="/assets/images/posts/2020/09/11/serviceworker.png" alt="An image confirming my service worker working" %}

Using the DevTools to enable and disable my connection and to try clearing data and changing my blob configurations was very informative, both in terms of comfort with the tools, and understanding how things were being cached. Trying the push messages from DevTools didn't seem to trigger any kind of response, though, and it looks like I will need to [add in some code]({{page.references[8]}}) to take advantage of some of the PWA features. As with most things, I'm realizing, it's never so simple as slapping in a plugin - but that's absolutely not a bad thing...I just need to come back to it later. Until then, I will be sure to install the web app on my phone for testing!

It feels like I did not complete nearly as much as I set out to accomplish today, especially looking at my task list, but I feel like I made good steps in terms of understanding and tools at my disposal.

## Tasklist

- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only
- [ ] <span title="Task to be added to next entry">=></span> Add some way to see a list of all references used across the entire site
- [ ] <span title="Task to be added to next entry">=></span> [Check my favicons](https://realfavicongenerator.net/favicon_checker?protocol=https&site=maxlepper.gitlab.io%2Flearning-log%2F)
- [x] Add CodePen social button
- [x] Add favicons
- [x] Add a service worker and make my site work as a PWA
- [x] Work on FCC tribute page project