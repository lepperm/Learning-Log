---
layout: journal
title: "TD Collection Landing Page Drafts"
excerpt: Working with Neal to craft drafts for the TD Collection landing pages, and a quote on curiosity.
author: Max Lepper
categories: [journal]
tags: [tdc,design,product lab,mentality]
date: 2020-10-07 23:54:12 -0400
modified_date:
published: true
status: live
confidence: log
importance: 3
context: true
comments: true
skills: [general]
references: ["https://fs.blog/knowledge-project/maria-konnikova/","https://www.lesswrong.com/posts/3nZMgRTfFEfHp34Gb/the-meditation-on-curiosity","https://scrimmage.us/the-product-lab/","https://www.canva.com/colors/color-palette-generator/","https://material.io/resources/icons/"]
timespent: 230
sleep: 380
recreation: 30
workout: 25
---

## Journal

>“Less certainty, more inquiry”
>
> -- <cite>Erik Seidel (via Maria Konnikova)</cite>

I listened to an [interesting interview with Maria Konnikova]({{page.references[0]}}) about her experiences approaching professional poker from the perspective of a psychologist and writer. The quote above was a distilled comment from her poker mentor, Erik Seidel, and is such a fantastically concise and impactful statement.

It's a reminder to ask yourself questions and stay curious, and to think things through for yourself instead of succumbing to mental shortcuts (or gymnastics). If there's a certain way that things are done, or if there's a "correct" solution, it does not serve you well to just blindly accept without understanding the decision-making that went into that neatly packaged solution. This aligns nicely with rationality practices and the distinction of genuine curiosity, as detailed in [The Meditation on Curiosity]({{page.references[1]}}).

Admittedly, I have been wrestling with this a bit through my learning process. With so much to cover, it is _absolutely_ mentally easier to get a quick answer and run with it. Stopping to ask "why" can seem like adding another rock on an already massive pile, and a relentless string of head-first dives off the peak of Mt. Stupid would probably leave some blunt force trauma to my enthusiasm - the perspective is nice, but a little break between strings is preferable for moral! In the long run though, avoiding asing "why" won't serve me very well when it comes to technical understanding.

Fortunately, the technical side is where I am inherently more curious. If I grab code from Stack Overflow, I tend to play with it and break it to understand what all the moving parts are before moving on. If I'm stumped on a code challenge, I may look up the answer, but then try to mentally break it down step-by-step and add my own take on things. This is especially true for this site, where I've either tweaked or completely consumed everything that has been pulled into it.

"_Steal like an artist_" is a phrase I've heard a lot in the art world. The rationality being that, in order to truly _steal_ something, you need to know it better than anyone and make it yours, rather than just borrowing. Selectively curating what you "steal" helps you to incrementally craft your skills, style, or whatever it is that you're focusing on, and create something that is very uniquely your own. With development being also a highly creative process, this seems to apply quite nicely.

I've similarly been trying to be mindful of knowing when to leave a problem for future-me. There is plenty that I just do not understand, or is so beyond where I presently am, that the letters telling me what's going on are hitting my eyes and bouncing off. And that's okay! That's what I've done with my portfolio site right now. Honestly, I can't stand how it looks at the moment and I want to throw most of it away and start over, but I'm building skills and experience and other portfolio pieces that will let me come back to it with fresh eyes and more informed perspective, and far more miles under my belt than during my last attempt. Like an RPG, I'm off working towards other quests in order to level up before facing the boss!

On the [Product Lab]({{page.references[2]}}) side of things, Neal and I met up online to hash out the design for TD Collections (TDC). I was curious to see his iteration process and approach, especially starting from scratch. Uriah and Neal had already written up some notes on what they wanted to advertise on the landing page, some color codes, created a logo, and taken stock photos, so we were coming in with a great pool of supporting resources.

The tool used to design the layouts is Adobe XD, which Neal has gotten familiar with through AGWSU. We grabbed the Material-UI design kit and wireframe templates to gain inspiration and select a basic layout for the page. One of the first things we did was to discuss color theory and review the existing palette, which was cobalt greys and golden yellows and oranges. While this looked great, it didn't visually play very nicely with our stock images, which were predominantly purple and bronze.

To help us get started working with our stock images, Canva has a great [color palette generator]({{page.references[3]}}) tool which gave us colors like Bison Hide and Blue Bell. Neal played with saturation and hue to fine-tune different secondary and primary colors to fill out the palette, giving us a nice spread of options that looked great next to each other. The logo also got a minor color change to match the surrounding elements.

Using the wireframes, we narrowed down and eventually agreed on a landing page layout using a 2:1 split. The wireframe was setup for a blog, so the page was heavily simplified and the post boxes were reworked to hold our feature pitches. About two hours in, here was our first rough draft:

{% include blog-img.html source="/assets/images/posts/2020/10/07/draft1.jpeg" alt="Our initial draft" %}

While we were pretty happy with the "bones" of this layout, something felt off that we couldn't quite articulate into words. It felt "muddy" and not very comfortable to look at. Neal was already planning to take new stock image photos with different framing and whitespace to fit the layout better, so perhaps this change would also help counteract what we were feeling.

Fortunately, 20 minutes of tweaking and adjustments of minor elements later, and we came up with a second draft:

{% include blog-img.html source="/assets/images/posts/2020/10/07/draft2.png" alt="The second (and much better) draft" %}

Notice how much better the font stands on its own against the background, specifically with the title text? The increased contrast between the background and the text greatly improves legibility and gives it a crisp, clean appearance. This is far more professional and comfortable to look at, and the off-white text from our palette still works nicely with the purple table background. There's still more to do and build on, like adding icons to the feature boxes and wrangling in the font sizes, but I will try to capture the iterations and reflections along the way.

Speaking of icons, I have produced a shortlist of potential [Material-UI icon]({{page.references[4]}}) candidates for our feature cards:

Manage:
- save_alt
- move_to_inbox
- archive

Trade:
- compare_arrows
- swap_horiz
- published_with_changes
- sync_alt

Share
- share

For now, I'll sleep on them and see which ones jump out at me as the easiest to understand in the morning.

With the design at a place where we are both initially happy, I'm cleared to dive into the project tomorrow and start building! Having a clean slate to work with is exciting, and I'm both hopeful and nervous to see how things go. The trickiest part of this layout will most likely be getting the title element to line up with the "get started" element, especially as the page side changes or if a device is rotated. We'll see how it goes!

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Respond to prompt #3 on Product Lab
- [x] Collaborate with Neal on landing page layout