---
layout: journal
title: "Networking, Prioritizing, and Accessibility"
excerpt: Joining an irregular coffee club, organizing our issues for AGWSU, blog improvements and accessibility, and adding the equivalent second job time commitment being devoted to this learning journey.
author: Max Lepper
categories: [journal]
tags: [social,networking,lean,accessibility,project management]
date: 2020-09-03 23:20:48 -0400
modified_date: 2020-09-07 19:26:52 -0400
published: true
status: finished
confidence: highly likely
importance: 3
context: true
skills: [javascript,html,css,accessibility,agile-pm,git]
references: ["https://www.freecodecamp.org/learn","https://leansmarts.com/summary-2-second-lean/","https://search.google.com/search-console/about","https://www.linkedin.com/in/davidebest","https://seesparkbox.com/","https://agwsu.org/","https://www.linkedin.com/in/nealstrobl/","http://www.davidmacd.com/blog/select-box-label.html","https://www.twitch.tv/happydevelopment","http://nicolasgallagher.com/git-checkout-specific-files-from-another-branch/"]
timespent: 245
sleep: 440
recreation:
workout:
---

## Journal

Another new quote:

>“Your life does not get better by chance. It gets better by change.”
>
> -- <cite>Jim Rohn</cite>

Especially during a time where most of the changes we are hearing about are increasingly despair-inducing, this is a good reminder to also focus on improving what can be immediately influenced in our personal lives. If you're here, you've probably already figured out that I'm actively trying to do this with my career, but it goes beyond just your job. My wife works from home remotely 80% of the time currently, so we have been actively trying to implement a [2-second Lean]({{page.references[1]}}) mentality around the house, meaning that if something bugs us and we can improve it in 2 seconds, we make the improvement. By trying to make little (and big) adjustments constantly, our home office has become a very productive and efficient working space, and it continues to improve with time and awareness of our pain points. Same thing with socializing in a COVID-19 world - we have a Discord group shared among friends, and early on, we implemented Tuesday and Friday night game and socialization evenings. This dedicated time for socializing seems to have really helped people with feeling isolated, and has encouraged much more general social interaction outside of game night hours, as well!

This morning, I was very fortunate to attend an "Irregular Coffee Club" Zoom call with [David Best]({{page.references[3]}}), whom I crossed paths with a few years ago through Dayton-area startup groups. The concept was to establish an open time window where people could pop in for networking outside of their regular circle of interactions, especially for people working from home, similar to irregular interactions with regulars at your local coffee shop. (Actually, it seemed like I was the only person in attendance _not_ working from home, and that people were shocked that I was going into an office. Yup, me too!) The interaction was excellent, and it was great getting to meet some new and interesting people doing drastically different things.

It had been a long time since I had been in a socially-speaking position outside of work. I'm ironically even more socially isolated back in the office and hadn't noticed the impact until about 2 minutes into the call. Hopefully, the initial awkwardness will wear off with future sessions, and that it wasn't super noticeable. It definitely makes me want to seek out more networking calls!

In a related vein, I was making an effort earlier this year to attend more tech group meetings in the local area, and was particularly enjoying the excellent lunch-and-learn sessions hosted by [Sparkbox]({{page.references[4]}}). When COVID happened, a lot of the local tech Meetup groups seemed to, surprisingly, fizzle out of existence! Out of all topics, I would have thought that tech groups would see the least disruption, but that was not the case in practice. I know that we are all coping and adapting to things differently, and some people have experienced sudden and drastic life changes when all this started.

Next to in-person time with friends and family, I think that these social learning sessions are the kinds of social interactions I am missing the most. The [Imagine.Dat D3 workshop]({% post_url note/2020/08/2020-08-22-imagine-dats-d3-react-workshop %}) was a much-craved experience, and I will be on the lookout for more events like that. I also need to look outside of Dayton and see about finding some active and welcoming communities to engage with...social media is just a bit of a hurdle for me right now.

Following up from yesterday, my configuration changes did successfully correct my user-declared canonical URL on the site and through [Google Search Console]({{page.references[2]}})! One thing I am curious about is if having a DNS subdomain redirect record from [log.maxlepper.me](http://log.maxlepper.me) could be contributing to the issue. The pipeline badge in my footer also worked flawlessly, and everything now stacks correctly on mobile.

It still looks a bit awkward, but I am really liking the functionality of the new landing page post filter. Right before bed, I was learning about accessibility for form elements and selects, and wanted to go ahead and implement this in the new filter, but wasn't sure the best way to do so. I found [this blog that compared the output of various screen readers]({{page.references[7]}}) against how they were labelled, and opted to use `aria-labelledby`, as it seemed to have the most consistent results across the screen readers used. I also copied in the off-screen `.sr-only` CSS class that was used in [FreeCodeCamp's]({{page.references[0]}}) Applied Accessibility course (which I'm finally going to wrap up tonight!) and applied the class to a new label element, to provide context to the button while limiting adding more visual clutter to an already busy page.

Activating the filter, however, seems to be hiding some footer elements. Upon closer inspection, the elements disappearing with an active filter are `li` elements getting scooped up by `document.getElementsByTagName("li")` in my filter script. An easy filter for `null` values fixes the issue.

Tonight, I need to update our backlog for [AGWSU]({{page.references[5]}}), as [Neal]({{page.references[6]}}) and I are now formally into sprint 7. With the new sprint, I will be focused on prioritizing issues for our next major deliverable feature, identifying outstanding issues, and areas for code health improvements.

The backlog process took a little while longer than usual tonight, as some schedule changes extended this sprint and I had outstanding items to catch up with. All things considered, the issue backlog for sprint 7 looked great, and I mostly handled cleaning up and closing out completed issue logs.

With that complete, we had noticed on [Neal's stream]({{page.references[8]}}) yesterday that the GitLab issue templates were not properly populating when creating new issues. Using my newfound Git familiarity and a quick verification with [this blog covering checking out individual files and patching from different branches]({{page.references[9]}}), I was able to nab the files from the Master branch successfully! Working in a live git terminal feels so fast and dangerous, haha.

Exposure to the DevOps process through the AGWSU project and now my personal project has been exciting, and I have found myself really interested to get into it more. From what I have heard, specialization will be the next goal after breaking into the industry. At this point, I am perhaps less certain what I would like to ultimately go for - data visualization, DevOps, project management, machine learning... but thankfully, I have enough fundamentals and front-end ahead of me that I will hopefully have a little time to figure it out.

## Tasklist

- [x] AGWSU project management
  - [x] Wrap up and document sprint 6
  - [x] Sort and prioritize sprint 7
  - [x] Manage the backlog
  - [x] Create artifacts, notes, and metrics for review meetings, coordinate schedules
- [x] Complete the FFC Applied Accessibility Challenges
- [x] Inspect Learning Log indexability in Google Search Console, request re-indexing
- [x] Some footer content is disappearing when post filters are applied, troubleshoot

### Blog Changes
- [x] Add accessible tag data to the landing page post filter select box
- [x] Add stats to represent my 7-day average values as an equivalent job work week, how close to a full-time learner am I right now?