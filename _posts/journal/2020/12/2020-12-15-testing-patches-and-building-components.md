---
layout: journal
title: "Testing Patches and Building Components"
excerpt: Learning how to create package patches, changing my design, and blocking out components.
author: Max Lepper
categories: [journal]
tags: [portfolio,design,technical]
date: 2020-12-15 23:47:40 -0400
modified_date: 2020-12-17 22:31:29 -0400
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [javascript,react,material-ui,sass,css,design]
references: ["https://blaipratdesaba.com/how-to-use-an-npm-node-module-that-has-been-forked-b7dd522fdd08","https://blaipratdesaba.com/how-to-use-an-npm-node-module-that-has-been-forked-b7dd522fdd08","https://www.npmjs.com/package/patch-package","https://stackoverflow.com/a/52249619","https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0","https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass","https://material-ui.com/customization/palette/","https://material-ui.com/styles/advanced/","https://mui-treasury.com/components/card/","https://github.com/pvoznyuk/react-update-url-on-scroll","https://www.justinmind.com/blog/hamburger-menu/","https://www.joshwcomeau.com/effective-portfolio/","https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/"]
timespent: 450
sleep: 265
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

Yesterday, I submitted [a PR for a feature addition to `create-react-component-folder`]({{page.references[0]}}), which will allow me to specify if `crcf` replicates the component template with single or double quotes. This tiny detail is important, as Prettier and Storybook fight with each other on the single quotes, requiring me to go in and correct the new files before everything stops shouting. While I'm waiting on the PR to hopefully be accepted, I'd like to start using my changes!

I had prototyped the changes to my repo locally before forking `crcf`, completed the changes on the fork, and re-integrated into my project for testing. I'd like to be able to preserve these changes in case I need to do something like delete "node_modules" for whatever reason. It looks like I should be able to point the package towards [my fork of the package]({{page.references[1]}}), but I also encountered a package called [`patch-package`]({{page.references[2]}}), which looks like it should allow me to preserve the canonical link but patch in my modifications. It also looks like it should be able to help notify me if `create-react-component-folder` gets updated, which would be neat!

Setup was easy enough, I just installed `patch-package` as a dev dependency and `npx patch-package create-react-component-folder` to create the patch, and now I have a new shiny "patches" folder with my changes!

Let's be dangerous here for a minute, just to see what happens! 😈 I'm going to delete my "node_modules" folder and `package-lock.json`, then run `npm install`, and see if a new `crcf` component gets generated with single or double quotes, indicating if the patches were applied.

Very quickly, I ran into some trouble!

```
Unexpected end of JSON input while parsing near '...2x5AfqKYFrJRwrhtnjvfo'
```

I double-checked to make sure I got everything, but I couldn't seem to get `npm install` to work. A little searching revealed [a great explanation of what's going on with this error]({{page.references[3]}}) on Stack Overflow. Following their directions, I tried `npm cache clean --force`...

```
npm WARN using --force I sure hope you know what you are doing.
```

Haha, uh oh. 🙃 Me too!

Fortunately, `npm install` went through fine, and it seems to have cleaned everything up nicely! Now, to test my patch. I performed two tests:

- `npx crcf App` (default behavior, should be single quotes if not patched)
- `npx crcf App2 -sq` (new runtime argument, should throw an "unknown option" error if not patched)

Both tests worked perfectly, and I'm honestly really excited! This seems like such a powerful utility to have in my toolbelt for little fixes like this. I'll be watching my PR to see if it gets accepted, and then see what the process is like to remove my local patches down the line.

On to _actual_ development now.

My "public" folder was pretty messy from the favicons, so I reorganized all but the basic favicon to a folder and updated paths. The fonts I had picked out last night (Ubuntu, Poppins, and Frank Ruhl Libre) similarly were added to my "fonts" folder. I'm still not totally sure which versions I will use, so for now I'm going to focus on Ubuntu-Bold and Poppins-Light, as it'll be easy enough to try swapping out the alternatives and eliminating the extras before going to production.

I imported my font declarations in my App.scss file, but it gave me an error message:

```
Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.
```

Stack Overflow to the rescue again today, I [found a thread]({{page.references[4]}}) explaining that `node-sass` is ahead of `sass-loader`, and the major revision level had just bumped. After rolling things back to 4.14.1, it worked perfectly. That being said, I still haven't really used Sass much yet. I'm not totally sure if it will even really be needed in my Portfolio, since Material UI uses `withStyles` and `makeStyles`, which I've used previously.

Regardless, I can take a little time to look into it! I watched a video and read over the official docs, recording some notes in my [Sass skill progression page]({{ site.baseurl }}/skills/sass). The video also pointed me towards the [Live Sass Compiler]({{page.references[5]}}) VS Code extension, which compiles to cross-browser compatible CSS syntax in realtime - pretty neat! It does look like, however, that trying to use anything besides MUI's `withStyles` is not recommended and overcomplicated, so I'll have to save spending time with Sass for a different project.

Next up is setting up my themes. Continuing from yesterday, I fleshed out my primary candidate palette to a full set:

{% include blog-img.html source="/assets/images/posts/2020/12/15/palette.png" alt="Trying to round out my palette a bit more with the natural tones." %}

Playing around with this lead to a deep research binge into [Material UI's palette information]({{page.references[6]}}), and [detailed information on themes]({{page.references[7]}}), and eventually got into passing props to styles. I had some ideas I was chasing, but I'm pretty sure now that my approach is overcomplicated. Just in case I come back to it later, here are some of the links I found notable:

- <https://material-ui.com/customization/palette/>
- <https://material-ui.com/customization/components/>
- <https://stackoverflow.com/questions/48879517/passing-props-to-material-ui-style/51036613#51036613>
- <https://codesandbox.io/s/giubj?file=/demo.js>
- <https://lifesaver.codes/answer/can-withstyles-pass-props-to-styles-object>

Oof, what a ride. In my styling search, I did encounter a site that might be good for [component inspiration]({{page.references[8]}}).

The more I think about it, the more a single page scrolling format for the portfolio makes sense after all. One thing I wasn't sure of, though, was how to handle `react-router`. I'm used to routing out whole components, but I'm not exactly sure how it would work here.

I suppose I could just have traditional HTML anchors and hashes, but I'm reading things that make it seem like React doesn't play well with traditional anchors and hashes. I made a quick demo for myself and was able to smooth scroll an anchor into view, but it was all within the same component, so perhaps that is part of the issue.

If so, I've found a package called [react-update-url-on-scroll]({{page.references[9]}}) that looks like it will update the hash while scrolling and also preserve history, which would be nice. I've installed it but will worry about it later.

Towards the middle of the evening, I started getting discouraged and slipping into intense imposter syndrome. Things that I thought I understood didn't seem to make sense anymore, and I was struggling to figure out how to approach things and locking up. How could I have spent so much time getting here and yet not be able to just _make_ this site? Why am I stumbling now? What does this say about me being able to switch careers into software development?

Negative talk tracks, detrimental core beliefs, and poor goal alignment. It's so easy to slip into bad habits and counter-productive mental loops. I got up out of... desperation, honestly, and went to clean the kitchen and take out the trash. Changing my focus, doing something physical, and getting my active focus off the task at hand really helped to bring me back. At the end, I had a tiny burst of inspiration, and drew out a new layout.

{% include blog-img.html source="/assets/images/posts/2020/12/15/draft2.png" alt="A 'new' layout idea." %}

...wait, this is just my old layout. 🤦‍♂️ But! Some elements have changed, and my idea of how it should be structured and organized is fundamentally different. I am aware of many more things to be mindful of since my first pass, so this will be a good way to iterate in a meaningful way.

Running with this layout, I thought through some components that could be used (many of them persisted from the original layout idea from a few days ago) and chunked them out rapidly with the aid of `create-react-component-folder`.

It's a bit messy, but for now, I want to mostly focus on building out my thoughts and the structure. Using [semantic HTML elements]({{page.references[12]}}), the components were filled in with placeholder text describing what they were and what I would like to happen. This ended up helping me to really focus in more and think through the weight of each item, and how it should be organized. At the end of the night, I don't have a usable site, but I do have a vision that is much easier to move towards finally.

{% include blog-img.html source="/assets/images/posts/2020/12/15/fullpage.png" alt="The text-form blocking out of the components." %}

Hmm, that image doesn't look so great on Learning Log, however. If the branding works, maybe I'll pull my sites consistent with each other!

Deciding how to handle the navigation bar switching for mobile is an impending concern, but I stumbled across what at first glance seems to be a good blog post on [the use of the hamburger menu]({{page.references[10]}}), so that'll be a read for tomorrow.

Speaking of reads for tomorrow, I've been poking around [Josh W Comeau's blog](https://www.joshwcomeau.com/) a bunch lately and really enjoying the content, and was delighted to stumble across an ebook on [how to build an effective developer portfolio]({{page.references[11]}})! Better late than never, right? I'm excited to dig in! 😊

(Found [another palette I like](https://coolors.co/1c1c1c-c5fffd-88d9e6-8b8bae-0e6ba8), too!)

## Tasklist

- [x] Set up basic app structure and remove boilerplate
- [x] Initialize Material UI themes
- [x] Import my fonts
- [x] Specify my initial theme colors
- [ ] Might be a good exercise to develop user personas for my portfolio
  - [ ] Blake, a recruiter
  - [ ] Reese, a senior developer
  - [ ] Jamie, an Engineering Director
