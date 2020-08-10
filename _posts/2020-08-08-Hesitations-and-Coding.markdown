---
layout: journal
title: "Hesitations and Coding"
date: 2020-08-08 23:32:24 -0400
author: Max Lepper
categories: [blog]
tags: [mentality]
excerpt: A discussion puts things into better perspective and helps me overcome my hesitations in coding
---

I had a conversation with a friend tonight about design approach for a [collaborative project](https://gitlab.com/neal.strobl/wsu-adventurers-guild). During the discussion, he tasked me with taking a look at an issue and trying to figure it out for myself - nothing out of the ordinary. He mentioned that he wasn't sure about the true complexity or time expectations for the issue, and that I would need to get into it and see what all breaks.

To be transparent, I had been working on rewriting some personal documentation and was a week removed from actively working on studying. When I left off, I had been really struggling to make things work and had determined that a return/review of fundamentals was required. I wasn't feeling very confident in my overall understanding and miscalibrated for exactly where I was in my learning (partially the reason for the creation of this site!). I expressed my hesitation at undertaking something that could cause so much damage to the site functionality and why I wasn't feeling very confident in my understanding.

In response, he told me something that I had never consciously considered:

> No one will die if the site isn't perfect.

Now, bear with me. This will probably seem really confusing to people who are already established web developers, or software learners, or people who make applications for fun or as a hobby. But for me, I have been doing industrial application development for over half a decade. Prior to the past few months, this has been my only intensive development experience outside of a few pet projects and macros that I still haven't posted.

In my role, things like versioning and documentation weren't really done prior to me trying to implement the practices, and pushing for engagement among the rest of the team has been fraught with mixed consistency over the years. Finding the latest version of a project may mean having to find the right laptop bag, with the right USB thumb drive, in the right folder three levels deep with nondescript names. The threat of losing or using incorrect software was astoundingly high, and I am still working to restore and assimilate projects into our repository as they are encountered.

But the **real** issue is that I develop applications for industrial equipment, specifically mobile industrial vehicles - think things like cement trucks, piling excavators, rock crushers, and utility trucks. Operators work in close proximity to large moving components under hydraulic power, which can easily move around heavy loads of raw materials and wouldn't so much as falter in contact with a human. Incorrect code, incomplete testing, and unconsidered possiblities or interactions could cost someone's life. When builds are deployed, _that's it_ - the vehicle is in the customer's hands with minimal on-unit testing and headed across the country, and any software changes or corrections could take months to deploy with extra expense and downtime. The omnipresent threat of human harm is a consideration that haunts my every line of code and build release.

Thankfully, I have never recieved any reports of injuries, and I have safely caught bugs during on-site development through my testing processes. Thinking this way for so many years has absolutely tinted how I look at "live" code, however. I am so much more comfortable slapping together a repository for a pet project or I'm learning than I am making changes to a live site that currently works well and may be used by other people.

But my friend was right:
No one will die.
No users will be seriously impacted.
No money or clients will be lost.
No one will get sued (probably).
If the live site gets deployed and is mangled beyond repair somehow, we can just roll back the commits, and everything will be back to normal in seconds.

It seems obvious now, but looking at it this way blew my mind.

I'm excited to finally start (safely) breaking things.
