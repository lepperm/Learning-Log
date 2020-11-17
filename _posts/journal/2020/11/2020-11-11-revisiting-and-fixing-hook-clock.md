---
layout: journal
title: "Revisiting and Fixing Hook Clock"
excerpt: Discussing burnout and deciding to charge forward polishing up Hook Clock for a quick win.
author: Max Lepper
categories: [journal]
tags: [react,hook clock]
date: 2020-11-11 23:37:51 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [react,javascript]
references: ["https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples","https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d","https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4","https://maxlepper.gitlab.io/hook-clock/","https://www.youtube.com/watch?v=N7oz366X0-8","https://scottsauber.com/2017/06/10/prettier-format-on-save-never-worry-about-formatting-javascript-again/"]
timespent: 380
sleep: 320
recreation: 50
workout: 25
---

## Journal

>“Action requires simplification.”
>
> -- <cite>Amy Magnus</cite>

During Irregular Cafe this morning, we had a great discussion about intuition and feeling as it relates to math, research, and technical thinking. An example that was given was mathematics professors marking up student's papers and equations based on feeling rather than by identifying the exact issue - practicing and chunking complex concepts over time provides a quick and powerful intuition of the problem from accumulated experience. That gut feeling can create a "feeling" of where the issue lies faster than we can work it out consciously.

In a sense, expansion and simplification lives at the heart of Learning Log:
1. Take concepts
2. Amass lots of information
3. Distill the information to personal notes and logs with my raw ideas and understanding at the time - which may be wrong, and that's okay!
4. Iterate

The scope of what I'm doing right now isn't quite as broad and nebulous as research, as millions of people have gone through this process before, so there's a fair bit of structure by comparison.

On the topic of problem solving and the approaches taken, I was introduced to [the Cynefin Framework]({{page.references[4]}}), which I think I may need to review a few more times to process more. Essentially, it posits that the problems should determine your problem-solving approach, rather than the people doing the problem solving...which makes a lot of sense, but I will be curious to try this in practice.

I have been feeling extremely heavy these past few days. There's a lot of studying that I need to get into, and moving on it quickly is important not just to skill development, but to being more productive and effective in all of the projects I would like to contribute towards. However after talking with friends and reading a bit, I fear that I may have already burned out, despite my efforts to avoid it.

I keep flipping back and forth between what to work on and trying to get myself to properly mentally digest content, but it's a struggle. Recent external stressors are probably at least part of why I'm feeling this way. It was an option I listed yesterday, but a "win" keeps getting recommended as a good way to get excited and push forward.

After flipping around between what that would look like, I ended up getting inspired to try and clean up [Hook Clock]({{page.references[3]}}). I need to polish up my demos as best as possible, and Hook Clock is the closest to "done" and could set a great example for other projects.

First up was to fix the clock components not being filtered, so I read a few blogs on [using map and filter]({{page.references[2]}}). I make some changes as illustrated, but the performance was very weird and ultimately wasn't working. Maybe this is a good place for Redux? Or is Redux too heavy-handed here? Going back again to what I should focus on...

After doing some testing and narrowing down where I thought the issue was, I reached out to Neal for his opinion. We tried a few different things, none of which made things work correctly, so he recommended that I create the clock as objects instead of components into my array. For removing elements, I could pass down functions from the parent to modify the clock objects by ID.

We also discussed MVC. Neal explained that it's a little fuzzy in React, as components can have their own MVC internally. For an example:

**M** - Redux store
**V** - Components (should be display-only as much as possible)
**C** - Functions to manipulate the model, and anything to the Reducer

After our conversation, I worked to pull logic out of clock component to make it more simple. In the end, it now just accepts values from App and displays (as it should be) and doesn't modify the input logic internally.

Next was to rework the tick, which I changed to be a useEffect hook in the parent App, which then assigns the `time` value of every clock object. The clock components are built from the clock objects, and a function is passed down to toggle the respective `visible` parameter for the object based on clock `id`. This ended up working great, and the process of building this out made a few different things click!

Next up was to try to simplify the overall code and add some basic documentation. I also added in snapshot testing - there was some configuration and imports missing but I was eventually able to get it to pass locally. (The snapshots did not fully pass when pushed live, however, so I'll need to inspect that. I assume the environment or renderer is somehow slightly different).

I also tried to configure Prettier to format on save, which was working in the past, but it looks like I've messed my settings up somewhere. I [followed a guide]({{page.references[5]}}) and was able to get correction suggestions, and formatting can be manually triggered. I think I changed a setting while building out Learning Log because it was yelling at my Liquid (which, maybe I could correct?), so I'm positive it's in there somewhere and that it's just a matter of digging around for it.

Wrapping things up, there's a tiny bit of stuttering sometimes on the site, but it has absolutely improved both the performance and user experience. I feel much better about having this on my repo, and there are many elements that will be great bite-sized references for myself going forward.

[Please check out the live site, if you're interested!]({{page.references[3]}})

## Tasklist

- [x] Go back and fix Hook Clock
- [ ] [Change the `create-react-component-folder` template](https://github.com/snaerth/create-react-component-folder#publishing-templates) for Storybook stories in my Portfolio
- [ ] Get Prettier working again