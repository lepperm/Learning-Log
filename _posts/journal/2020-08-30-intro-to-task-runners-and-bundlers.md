---
layout: journal
title: "Intro to Task Runners and Bundlers"
excerpt: Looking into task runners and bundlers, and learning about the history and application of Grunt, Gulp, Browserify, and Webpack.
author: Max Lepper
categories: [journal]
tags: [gulp, webpack]
date: 2020-08-30 13:47:08 -0400
modified_date: 2020-09-07 19:29:06 -0400
published: true
status: finished
confidence: likely
importance: 5
context: true
skills: [gulp, webpack]
references: ["https://stackoverflow.com/questions/33561272/task-runners-gulp-grunt-etc-and-bundlers-webpack-browserify-why-use-toge/33574602#33574602","https://survivejs.com/webpack/appendices/comparison/","https://css-tricks.com/using-webp-images/#using-webp-in-html","https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better","https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9","https://www.npmjs.com/package/fuse-box","https://github.com/ericgrosse/task-runner-bundler-comparison","https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files"]
timespent: 160
sleep: 375
recreation:
workout:
---

## Journal

I love trying to automate whatever I can. It might be considered a problem, but also it brings me a lot of personal satisfaction, and automation in the right place can pay huge dividends. For example, I wrote scripts at work to guide and automate production programming of electronic controllers. This not only cut the per-unit cycle time to 1/3 of human-entry time for an experienced operator, but also allowed me to set up a production programming computer for the goal of moving programming orders out of Engineering and to the shop floor, cutting our costs even further. Since the scripts automate most of the work and prompt the user for interactions, while verifying if the production environment is correct, it drastically reduces the training time and experience required.

As such, I've been pretty interested to learn about Gulp. I have used GitLab CI/CD task runners to automate pipeline deployment, but there isn't much running on my local environment. Concepts like minifying, creating WebP images with CLI, bundling JavaScript files, and other such tasks have popped up organically during my learning, and being able to both reduce the manual work required and increase my SEO scores would be excellent.

Terminology and knowing what can do what is my first issue, so I found a post on Stack Exchange discussing the [differences between Gulp, Grunt, Webpack, and Browserify, and what they're used for]({{page.references[0]}}). This was a great diving-in point, and gave me much more to look into.

Next, I read about the [history of runners and bundlers]({{page.references[1]}}), and the article I found did a good job of summarizing things. It was interesting to read about Make being released as far back as 1977, and transitioning from configuration-heavy Grunt, to code-focused Gulp, Gulp's synergy with Browserify, and now with configurable core and plugin approach with Webpack. [FuseBox]({{page.references[5]}}) also sounds very interesting!

While reading up about task runners and bundlers, I accidentally stumbled across a blog talking about [serving WebP images to users]({{page.references[2]}}). There are open issues both on my portfolio and AGWSU, so this was a nice surprise to find!

For further information on comparison between these runners and bundlers and more practical examples, I found an article that provided great examples of [pros and cons of each, and general conclusions]({{page.references[3]}}). While I didn't see a date on the article, it looks like comments started from 4 years ago, so maybe things have changed a bit since then. One thing that was mentioned was that...

>There's a growing trend, especially among the React community, to use Webpack _instead_ of Gulp.

It sounds like Webpack is complex to initially configure, and Gulp adds overhead, so there are trade-offs to both.

Getting into the actual execution, the specifics kind of got away from me. I made an effort to follow along and try to understand what was happening and why, but I think there is just more foundational information I need before I will fully understand what is happening. Thankfully, the author made [the example repo for this comparison process]({{page.references[6]}}) available on GitHub, so I've starred it for future reference.

Near the end, the author makes the case that Gulp has three core issues:

1. Dependence on plugin authors
2. Frustrating to debug
3. Disjointed documentation

When libraries get updated, the corresponding Gulp version of the library also needs to be updated, which does not always happen. Similarly, using Gulp adds a layer of abstraction over using the library natively. With this in mind, the conclusion of the offer was that using webpack and NPM scripts directly provided the best experience. Reading a few more posts, it seems that other developers agree.

I really hadn't expected, coming into this, that learning about Gulp might ultimately have me switching away from it in favor for something else. That's what is exciting about the web, though - it's very much a living thing, constantly changing and evolving. Coming from engineering, where there is room to adopt new skills but little to no pressure to change from "how it's been done" for the past 30 years, the risk and excitement of having to constantly keep up with the curve is exhilarating. Learning is a motivator for me, and this is a field where there will most likely never be a shortage of things to learn.

[Looking more into Webpack]({{page.references[4]}}), I next read a blog post that, right off the bat, gave a quote illustrating what I had already written above:

>Webpack offers enough power out of the box that you typically don’t need Grunt or Gulp at all. Yep, sorry, that shiny new skill you just mastered is already nearly useless. Uh…yay? Sigh. Welcome to life on the front-end. But hey, that’s the price of progress.

To my surprise, I discovered that `create-react-app` actually is [already using Webpack]({{page.references[8]}})! The more I had been reading, the more I was wondering if something was already running under the hood. I will need to get in there and poke around to see what all is actually happening when I run my commands.

I am sure that I will eventually want to learn enough about everything to be dangerous, but as I mentioned in my [latest blog post]({% post_url blog/2020-08-27-risk-mitigation-in-planning-learning %}), correctly prioritizing learning the correct things first is critical, as time is my most valuable resource. Sometimes, you have to spend some time to "read and update your map" and make sure you're headed in the right direction early, which is exactly what today has felt like.

## Tasklist

- [x] Learn about task runners and bundlers