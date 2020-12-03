---
layout: journal
title: "Market Goals and Soft Skills"
excerpt: Setting defined goals and checkpoints through the rest of the month for my Thursday Market Research nights, and a discussion about soft skills.
author: Max Lepper
categories: [journal]
tags: [airtable,goals,spotify]
date: 2020-12-02 23:24:03 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [general]
references: ["https://irregular.cafe/","https://developer.spotify.com/documentation/web-api/","https://developer.spotify.com/documentation/web-api/quick-start/","https://dev.to/fgauna12/i-wrote-a-daily-blog-post-for-100-days-here-s-what-happened-3673"]
timespent: 295
sleep: 300
recreation: 20
workout: 35
---

## Journal

{% include focus-box.html focus="Learning, Producing, Networking" theme="Tools" %}

### Notes

This morning kicked off with a great conversation in [Irregular Cafe]({{page.references[0]}}), where we discussed the recent holiday weekend, communication, interviewing for tech, and some fire tricks. On the interviewing front, we discussed the importance of soft skills and being able to communicate examples.

The point was made that "you can teach technical skills, but you can't teach soft skills," meaning that the development of those soft skills can only be built at a personal level over time. Another point was the power of examples, and how a whole interview could be conducted over why someone is a "hard worker," and how that claim is empty unless you can back it up. I particularly like measurable and quantifiable examples, like "reduce hourly labor expenses for this problem by X%," however I do not know if my examples being skewed more towards engineering will be a benefit or detriment. Ultimately, I try to be mindful of the bottom line by seeking to reduce waste/automate and constantly deliver value, so hopefully I can find an effective way to communicate those objectives. Values?? My mentality on this subject probably has a few factors involved.

Spotify Wrapped 20202 came out today, which is always fun to review! On a few different occasions, I've been curious if I could dig into the statistics and create my own slices to better understand my listening habits. It's certainly a deviation from my core objectives today, but I also don't want to stifle curiosity, so I checked out their [web API docs]({{page.references[1]}}) to see what all is accessible. Everything looks to be very well written, so I took a few minutes to try out their [API tutorial]({{page.references[2]}}).

The authentication example files were copied into a demo folder using `git clone https://github.com/spotify/web-api-auth-examples.git .`, and I created my app in the [developer dashboard](https://developer.spotify.com/dashboard/). They don't directly mention it in the tutorial, but I had to set the `redirect_uri` to `http://localhost:8888/callback` in both the `app.js` project file AND in the settings for the app in my Spotify developer dashboard. With the basic settings configured, I was able to successfully authenticate my account! So far, so good.

I haven't done much work with APIs yet and want to get a more up-to-speed soon, so this is an opportunity to get a better sense of what direction I'll need to steer my learning. For now, I'll switch gears, but will be interested to dig in further.

Dev.to sent me an email with a few blogs, and one about [writing a daily blog for 100 days]({{page.references[3]}}) stood out. I like the rules proposed by the author - no missed days, always add value, try to help someone - and got to thinking about the contrast with Learning Log. They also make the point that [time is valuable]({% post_url blog/2020/08/2020-08-27-risk-mitigation-in-planning-learning %}#key-resources), and how regular blogging helped them to become a more effective communicator and over-commit less.

At nearly 100 blogs in myself, I completely agree that I feel like the act of writing is much more efficient. My notes are better organized, thoughts flow freely when I sit down to intentionally write, I don't fixate about revisions as much, and I feel like my communication style has become a little more natural-feeling as these posts have progressed. At least, that's my perception - feel free to call me out, haha!

The thought of blogging for 100 straight days does sound like a great challenge. Learning Log is a bit different, however, since I'm clocking my time. My main rule was that if I don't learn or work on something related to development, career development, or my mentality, then I can't write a blog. Right now, there are three posts with zero minutes clocked:

- One from when I was sprinting to ship my part of a project and had multiple drafts in progress and just wanted to post an update (before I had my drafts visible!). I have another blog that was drafted under the same day.
- One while I was doing some deep personal exploration and mental reflection and working on ["Risk Mitigation in Planning Learning"]({% post_url blog/2020/08/2020-08-27-risk-mitigation-in-planning-learning %}) (which was linked above)
- One for ["On Time, Productivity, and the Pursuit of a Better Future"]({% post_url journal/2020/10/2020-10-02-on-time-productivity-and-the-pursuit-of-a-better-future %}), which really should be a blog. This post was _hard_ to write and very emotional, but probably one of the posts that I'm most pleased with to date.

Rereading this, it sounds a bit like I'm making excuses, but ultimately I think I would prefer to intentionally take a few days off here and there for vacations and self-care but keep this blog going many years into my career. If I someday get to a point where I can sustain 100 days of measurable learning progress (or untimed intensive personal reflection), then that's what my streak "high score" counter is for!

But enough about all that, let's get into the core of tonight's focus - producing tools.

### Today's Focus

Yesterday, I mentioned that I was struggling to make good progress towards objectives with nebulous deadlines and metrics, so as part of my goals for today, I would like to:

- Mentally re-affirm my objectives as "want" choices instead of "should/need" statements
- Determine my key goal metrics and set a hard goal end date
  - I am not totally calibrated to how much effort this will entail, so I want to throw a number out and shoot for it instead of getting trapped in analysis paralysis. If the goal is too hard, then I'll know for the next time, and if it's too easy, then I'll hit the goal - things move forward either way.
- Break this key goal into checkpoint flags and distribute sub-goals between now and the end date.

With that established, let's go ahead and lay out the specifics:

**MARKET RESEARCH - GOAL #1**

Identify and perform basic research on 40 employers by 12/31/20
- Name, location, size
- Business sector, client/product/consultancy
- Website, social media

**MARKET RESEARCH - GOAL #2**

Perform in-depth research on 6 employers (15%) by 12/31/20
- Key contacts
- History
- Culture
- COVID-19 response (which will be a strong indicator of culture)
- Dress code
- Current challenges or needs (opportunities)
- Internal growth potential
- Do NOT fall into analysis paralysis, but collect as much detail as is accessible, and identify pathways to learn more. Perhaps reach out to an employee, or as my network for connections.

**MARKET RESEARCH - GOAL #3**

Identify 40 developer roles that I would be interested in by 12/31/20
- Role title
- Desired skills, languages, frameworks
- Desired years of experience, credentials, degrees
- Location, remote-friendly, benefits
- Work-life balance

With my initial endpoint targets in place, the next step is to determine my incremental goals. This month is a bit challenging with two holidays towards the end of the month, so let's assume that my schedule will get hectic and I have a total of 3 serious working days (assuming that I only focus on market research on Thursdays per my schedule) before my due date.

In this case, that gives us a goal of `40 / 3 = ⌈13.33⌉ ≈ 14` employers and positions a week to satisfy goals 1 and 3, and `6 / 3 = 2` of those employers should be researched in-depth as best as possible to satisfy goal 2. Or:

**WEEKLY MARKET RESEARCH GOALS**

- #1 Perform basic research of 14 employers
- #2 Perform intensive research of 2 employers
- #3 Perform basic research of 14 job postings

To my currently uncalibrated self, this seems like a tough goal to hit. Fortunately, I do have optional time slots already marked out over the weekends for market research. Depending on how tomorrow goes, I can either maintain these goals, or subdivide them further (7 each, twice a week). Hopefully though, once I get seriously moving on this, 90% of my apprehension and anxiety will melt away and this target will seem easy.

Utilizing my CRM, which already contains an Employers table, I can tie companies back to contacts, and track my engagement with key connections. A new Job Postings table could similarly be tied back to the Employers table. From all this interconnected data, it should be relatively straight-forward to perform rollups and pivots to help better identify strong opportunities and, hopefully, good fits.

Setting up a good template for myself will help establish consistency and give me direction when I dive into the task tomorrow, so my next objective is to build out the appropriate Airtable interactions. I have a Trello board already configured with some "lifecycle" stages and custom fields that I can replicate as Airtable columns. It took some time, but I was able to get many of the key elements configured, and populated one posting from some data I had on-hand as a test run. I feel that there may be more data points that I'll want to capture, but for now, I think this is good.

### Next Key Theme and Review

I feel that next week should be a build week. Learning Log could use some upgrades to allow me to generate weekly wrap-up reports for Fridays, and my Portfolio is pitiful and desperately needs some help, especially if I am to act on this market research.

This has been a productive week so far, considering that I'm only reviewing two nights. I'm anxious for tomorrow but feeling good about the new schedule. I really hope that this will allow me to maintain a little more balance and increase my overall progress.

## Tasklist

- [x] Generate a recommended key theme for next week, review learning for this week
