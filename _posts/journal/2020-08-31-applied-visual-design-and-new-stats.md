---
layout: journal
title: "Applied Visual Design and New Stats"
excerpt: Exploring a quote, some Stat page updates, and completing the next section on FreeCodeCamp.
author: Max Lepper
categories: [journal]
tags: [css]
date: 2020-08-31 23:12:28 -0400
modified_date: 2020-09-07 19:28:51 -0400
published: true
status: finished
confidence: likely
importance: 4
context: true
skills: [css, html]
references: ["https://www.freecodecamp.org/learn","https://wiki.lesswrong.com/wiki/The_map_is_not_the_territory"]
timespent: 325
sleep: 400
recreation:
workout:
---

## Journal

[Skip ahead to the actual log by clicking here!](#the-actual-log)

Today started off with a new quote:

>“Time to improve is limited. The clock is always on and doesn't care if you don't feel like it. Someone else does and they're passing you by.”
>
> -- <cite>William James Moore</cite>

I really like that second sentence, and it's something I would have told myself from ten years ago.

The third sentence, I believe, is problematic.

In the USA (where I'm from), we're taught from a young age that we need to compete for resources, and that other people succeeding means that we didn't work hard enough, and that people who fall behind did so because _they_ didn't work hard enough. Yes, you have to put the work in if you want to get somewhere, but your own successes or failures belong only to you, and only in the context that you define them. Individual life experiences are inherently unique to each person, so saying that someone is "passing you by" makes the sweeping assumptions that they:

- Have the same end objective
- Have the same measures of success
- Have the same access to the [Four Key Resources]({% post_url blog/2020-08-27-risk-mitigation-in-planning-learning %}#key-resources)
- Have the same environment, living situation, and access to mental health
- ...and many other factors

Some people thrive in a competitive environment and mentality, so I'm sure that third sentence packs a motivational punch to someone. It could be, too, that my internal views are so skewed by the fact that I struggle to genuinely relax, and that nearly all actions I take are calculated and usually have a direct objective of driving some kind of value/benefit, either for myself or others.

But, if pushing yourself means taking on a giant project and working as hard as you can, go for it. If pushing yourself means getting out of bed, going for a walk, and cooking a nutritious meal, then power to you. If pushing yourself means working LESS and trying to make more time to prioritize your mental and physical health, then absolutely do that thing. What works well for one person will not universally work well for someone else. Our paths are not linear, and what progress looks like is unique to each individual.

I put a lot of effort and consideration into trying to verify and calibrate the statements I make on here to how they may be viewed a few years or further into the future, not just for other readers, but also for myself. My [mental map]({{page.references[1]}}) needs to be constantly updated with time, new information, new experiences, and a constantly shifting world, but my hope is that my values are aligned well enough I will still feel at least okay about what I have written ten years from now. I haven't exposed much of the data and reading backing my current snapshot of a position in these blogs, and I should probably strive to be better about citing sources.

At least, that's how I feel, and that's probably more than enough soapboxing into the void for today! <span style="white-space: nowrap">¯\\_(ツ)_/¯<span>

### The Actual Log

As I build out my HTML and CSS essentials, I think it clutters and skews things to have them listed on my Skill stats. To counteract this, it would be good to have an array of "assumed skills," where the time and progression is still logged and flagged, but it is assumed that I absolutely need it and could not drive value to my other supporting skills without it.

Listing "HTML & CSS" on a web development résumé now kind of feels like listing "English" as a skill.

In my Stats configuration section, I have an array variable that gets used as my filter. Skill ranking will verify if the current skill name matches any value in the assumed skills array and then break and skip over if a match is found. This handles things like, the total pie chart skill time value, and each entry in the pie chart, and popping items off the "top skills" array to the correct total number of top skills, despite HTML and CSS being up near the top. With this system in place, I can now easily add additional items to prevent polluting my skill statistics. I'm not sure what other skills would be good candidates, however...maybe SEO, Markup/YAML, and maybe Agile if I'm not in a project management role? This may be a question that networking will ultimately help answer.

I was also curious about my approximate average learning log times. Some days I get 2-3 hours in, whereas others I basically work a second full-time job. I'd like to combine same-day entries, as well. Combining same-day entries and dividing by posts was the easy part, as I could just evaluate all the post dates with a `%Y%j` date filter for full century and 0-366 day, and then a `uniq` filter to sort for unique values only, then get the size of the array. Right now, I have one post for every single day, but I'd like to also capture the average time per real-world day since the first log. I've approached this by taking the `(minor century value - 1) * 365`, adding a relative baseline leap year value with `floor((minor century value - 1) / 4)`, adding the 0-366 date value for both the most recent and last dates in the sorted dates array, and finally subtracting old from new to get the net difference in days.

My wife and I have some vacation coming up, and I'm concerned about arbitrarily punishing myself for taking a proper vacation by way of losing my log streak. I'm sure that I will break my streak eventually for some most likely legitimate reason. Similarly, I do not want to artificially inflate my log with "vacation"-flagged entries, or minimally-contributing entries (like how my second entry last night felt, whoops). The issue is two parts - I do not have a system to capture small updates where I do not have a meaningful update to write up, and I'm experiencing "new workbench" syndrome.

For the first issue, small updates, my current thinking is that if I haven't learned enough or done enough that I have at least something little to say about it, then I'm not sure it legitimately counts towards the purpose of "Learning Log" and should be omitted.

The second issue, "new workbench" syndrome, is a term I've encountered through an interest in woodworking. It's for when you've just spent a lot of time and effort into building something important, like a new workbench, but it's so new and unmarred that you hesitate to actually use it for the intended purpose. People will take a chisel and make a big gash in their shiny new workbench to break this feeling and start using it without holding back. Maybe a few days of much-needed vacation will be a nice chisel in my log streak.
{: #new-workbench}

I already have logic in place to capture my anti-streak, and then I will actually be using the streak mechanic as intended. It will probably feel less bad if I legit need to miss a day, afterwards. I know that logs and dates could be manipulated to keep the streak going, if I really wanted, but I would only be cheating myself, and I don't think that literally anyone else will care.

It seems that getting in the habit of blogging regularly has helped me to slowly get more comfortable - I've written over a thousand words already and barely noticed! Quality over quantity, of course, but I just don't traditionally think of myself as someone who writes.

Winding down for the night, I settled into the next [FreeCodeCamp]({{page.references[0]}}) section on Applied Visual Design. It's really making things click into place in a way that feels so obvious in hindsight, and I'm kicking myself for not realizing what a great resource this site was sooner!

## Tasklist

- [x] "Assumed skills" filter for Stats skill ranking
- [x] "Assumed skills" filter for Stats skill pie chart
- [x] Average log time
  - [x] total time / total # of logs
  - [x] total time / total # of days between date range
- [x] Work towards FreeCodeCamp