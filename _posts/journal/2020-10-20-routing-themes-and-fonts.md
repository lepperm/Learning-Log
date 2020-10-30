---
layout: journal
title: "Routing, Themes, and Fonts"
excerpt: Fixing up a handful of issues from the end of yesterday as more things start to make sense.
author: Max Lepper
categories: [journal]
tags: [react,material-ui,hooks,tdc]
date: 2020-10-20 23:51:22 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,material-ui]
references: ["http://www.oblique-strategies.com/","https://material-ui.com/styles/advanced/","https://material-ui.com/components/text-fields/","https://material-ui.com/customization/default-theme/","https://reactrouter.com/web/guides/quick-start","https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"]
timespent: 220
sleep: 320
recreation: 30
workout: 30
---

## Journal

A new prompt was posted in Product Lab today for [Oblique Strategies]({{page.references[0]}}), which is randomly selected suggested alternative ways to look at problems, encouraging you to think differently and try to apply them. It's an interesting approach, however I've struggled to get cards that I could figure out how to apply to TD Collection specifically, so I'll come back to it later.

Checking the TDC environments, there an issue on staging site, since GitLab Pages hosts at a subpage rather than at route. I modified the rules for [React Router]({{page.references[4]}}) to catch all mismatched urls and redirect to the Landing page to "reset" the path when we hit a 404. In the future, it may make more sense to specifically capture the `/truedungeoncollection` landing and reroute that, and have a separate legitimate 404 page.

When I was changing all the components over from classes, I appear to have missed converting Navigation, so I went ahead and switched it over to a functional component. It may be good to add a state to toggle visibility on the search bar, so then we could reuse the component between the Landing and Main App pages. I need to figure out if I can still have the drawer clip if the Navigation bar is used externally, or if I should move Navigation inside the Landing and Main App components.

Next up was to dig into themes more, adjusting the colors, and working to get background colors stacking correctly. I encountered a [breakdown of the values in the default Material UI theme]({{page.references[3]}}), which may be helpful to refer back to. Try as I might, I still can't seem to fix the background image not resizing. I feel like it's something tiny that I've missed. Regardless, I've created a bug issue in the repository.

Finally, I discovered where fonts were declared in AGWSU. There is an `App.css` which I had completely missed until performing a full search of the project files, and both fonts are called out with [`@font-face`]({{page.references[5]}}). Now, everything is successfully declared and added to build folder - success!

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Actually convert Navigation to a functional component
- [x] Add 404 redirect to landing page for staging environment testing
- [x] Make the background color properly cover everything
- [x] Fix fonts so that they show up correctly
- [ ] Make the landing page background scale to always cover all elements => Moved to BUG issue on GitLab