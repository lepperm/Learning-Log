---
layout: journal
title: "Storybook and Design Research"
excerpt: Implementing Storybook into my Portfolio, and reviewing portfolio sites on Awwwards for inspiration.
author: Max Lepper
categories: [journal]
tags: [storybook,portfolio]
date: 2020-11-04 23:33:18 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [react,storybook]
references: ["https://storybook.js.org/docs/react/get-started/introduction/","https://github.com/snaerth/create-react-component-folder","https://material-ui.com/styles/api/","https://cssinjs.org/?v=v10.4.0","https://storybook.js.org/docs/react/api/csf","https://github.com/storybookjs/storybook/blob/master/lib/core/docs/storiesOf.md","https://github.com/snaerth/create-react-component-folder#publishing-templates",":https://github.com/snaerth/create-react-component-folder#options","https://www.awwwards.com/"]
timespent: 295
sleep: 340
recreation: 50
workout: 10
---

## Journal

I'm back in town from a short and nicely socially-distanced trip to the Smoky Mountains! Neal is still sick with the flu, and our Product Lab demo is scheduled for tomorrow evening. I don't want to do too much work on TD Collection until we can all sync up and discuss how to proceed, so I'm thinking about revisiting my portfolio a little to see where I left off, and to lay groundwork for moving forward.

One thing that I've been aware of and that Uriah has suggested was [Storybook]({{page.references[0]}}), which is an isolated component UI development tool. It may turn out to be too much overhead for a portfolio, but may also be a good foundation to try and focus on building better individual components. I'd like to take a bit more time and try to structure things cleaner than before, with an emphasis on keeping things reusable and flexible.

Using the guide for `create-react-app`, I set out to get Storybook up and running. On a brand-new `create-react-app` right now, there's an issue with CRA being updated to version 17.0 but Storybook is still looking for version 16.X, and it doesn't compile correctly. For simplicity, I cloned my Portfolio and followed the setup instructions on my existing code, as it was built before the updates. Thankfully, there were no issues, and everything up and running quickly!

A few months ago, I originally put my Portfolio together in under 24 hours, before I had a better grip on what exactly I was doing. It's a bit of a mess, to be honest, but it was a great way to really dig in and help better identify what I didn't know at the time. For starters, I didn't really know how to approach components. TD Collection was great practice for this, so I wanted to start blocking out some components to break up what I already had into more manageable chunks.

After making one component, this seems like a lot of boilerplate, and I'd love to automate things a bit more. A quick search lead me to [create-react-component-folder]({{page.references[1]}}), which looks like a highly-configurable way to approach this issue! The configuration files were created and I started putting in some [options]({{page.references[7]}}). I see CSS and SCSS (which I need to get more familiar with), but no JSS, which I had seen used in AGWSU. From what I learned during TD Collection, I recognized JSS as how I was styling Material UI components and, sure enough, it looks like [Material UI uses JSS]({{page.references[2]}}) with styles! The styling in my components over on TDC definitely added some clutter to components, so this would be a good chance to revisit the AGWSU code to learn exactly what's going on there and how to break out styling from the component logic.

Before running further with that tangent, I recreated a simple button component using my newly-configured `create-react-component-folder`. I got distracted reading a few different posts for a little bit, but when I came back, I noticed that I was having issues getting Storybook to work again. It didn't like the stories that were generated from `create-react-component-folder`. I spent some time looking at the existing stories and the story that was generated and trying to get them to play nicely together.

Eventually, I learned that `create-react-component-folder` is using the [storiesOf legacy format]({{page.references[5]}}), and my code was throwing errors. From the documentation:

> `storiesOf` is Storybook's Legacy API for adding stories. Up until Storybook 5.2, it has been the primary way to create stories in Storybook.
>
> In Storybook 5.2 we introduced a simpler and more portable Component Story Format, and all future tools and infrastructure will be oriented towards CSF. Therefore, we recommend migrating your stories out of `storiesOf` API, and even provide automated tools to do this.
>
> That said, the `storiesOf` API is not officially deprecated. For the time being we plan to support it for the foreseeable future.

In spite of this, after reviewing the Storybook [Component Story Format (CSF)]({{page.references[4]}}), converting the `create-react-component-folder` story to CSF resolved the issue immediately. Very curious! It looks like I should be able to [change the `create-react-component-folder` template]({{page.references[6]}}) for Storybook stories to be the CSR format instead of `storiesOf`. It mentioned that `storiesOf` needs to be used for React Native currently, but I wonder if that will change in the future.

After chasing all that down, I needed to change focus for a bit. [Awwwards]({{page.references[7]}}) is a great place to look for inspiration, so I looked through about 40 sites to draw some redesign inspiration. I've listed my favorites below along with notes:

<https://kuon.space/>
  - Project detail breakdown, beautiful!
  - Project preview images are great
  - Great on mobile
  - Animations don't get in the way, polished
<https://brunoarizio.com/>
  - Visually interesting
  - Controls are absolutely designed with touch in mind, not scrollwheel-friendly and does not perform as expected with a mouse
    - I need to establish a good device testing pipeline!
<http://2016.robinmastromarino.com/>
  - Layout, persistent and minimal navbar and footer
  - I like how the intro section has changed since Awwwards snapshot and live site, now shows current employer
  - Beautiful layouts with great images and videos, presented in a visually stimulating way
  - The participant breakdowns are nicely done and give good credit to the whole team
  - Social media links disappear on mobile, doesn't seem like anticipated behavior
  - Loader on page change probably due to videos, but a little obnoxious seeing on every page
<https://fleurmoreau.fr/>
  - **LOVE** this site!
  - Projects front-and-center
  - Easy to navigate
  - Simple sections
  - Most animations are gentle and polished without being intrusive to the actual content, absolutely fantastic on project detail pages
  - Beautiful on mobile, little bit of text overlap but different colors helps a lot
  - I feel like being able to horizontally scroll between projects one-at-a-time (similar to https://kuon.space/) would be nice, but may need to see what other people thing from a UX perspective
<https://thierrychopain.com/>
  - I really like how the asymmetric scrolling was done here
    - Feels like there's maybe a little too much movement for me
  - Clean and tidy, especially for just how much information is packed into these pages
  - Looks like it might be breaking on resize? Project headers stack on each other
    - Possibly due to asymmetric scroll? Seems like a JavaScript thing is happening
  - Lots of very large font, a little overwhelming at times
<https://thomasaufresne.com/>
  - Very simple site, tons of great stuff on codepen!
  - Developer for Thierry Chopain's site

I think out of the initial forty, the following four best capture and express what I would currently like to go towards, ranked by an arbitrary internal feeling of design impact:

1. <https://fleurmoreau.fr/>
2. <https://kuon.space/>
3. <http://2016.robinmastromarino.com/>
4. <https://thierrychopain.com/>

With these in mind, I'll try to revisit them a few times over the next few days to see if I still like the same things, and we'll go from there!