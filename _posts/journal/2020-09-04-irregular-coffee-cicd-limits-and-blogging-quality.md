---
layout: journal
title: "Irregular Coffee, CI/CD Limits, and Blogging Quality"
excerpt: Planning for GitLab's new 400 minute limit on CI/CD, working on FreeCodeCamp, and debating if this blog is serving a productive purpose by being publicly accessible.
author: Max Lepper
categories: [journal]
tags: [css]
date: 2020-09-04 23:57:33 -0400
modified_date: 2020-09-07 19:25:21 -0400
published: true
status: finished
confidence: possible
importance: 2
context: true
skills: [css]
references: ["https://www.freecodecamp.org/learn","https://agwsu.org/","https://www.cybercoders.com/insights/why-programmers-should-be-blogging/"]
timespent: 140
sleep: 375
recreation:
workout:
---

## Journal

Friday morning began with another nice ["Irregular Coffee Club" session](https://irregular.cafe/), which is a drop-in Zoom call for socializing before work with people outside of your typical interaction circles. After the first session yesterday, I was really looking forward to it! I actually hopped out of bed when my alarm went off for the first time in months to make it on time, so I'm grateful to be part of the experiment.

There was an email about new CI/CD limits placed on free GitLab accounts, which means that I should probably make my pipelines more lean. In my Portfolio pipeline, for example, I have it automatically performing testing and optimizing, then deploying a build to GitLab pages for Main and Dev commits and running Lighthouse testing on the staging site, then deploying to production on manual trigger after review, and finally running lighthouse testing on the production site. I love it. But especially with me committing logs for THIS site daily-ish, regular commits for both [AGWSU]({{page.references[1]}}) and my [Portfolio](https://maxlepper.me) (at least until it's cleaned up and stable) will only have a fraction of that total 400 minutes to utilize. Thankfully, the live sites for both AGWSU and my Portfolio are hosted on Firebase, so it's just the testing/staging/audit workflow that will be impacted.

Next up on [FreeCodeCamp]({{page.references[0]}}) is Responsive Design, flexbox, and grid. My goal is to get in the habit of "mobile-first" development, as long as it makes sense for what I'm designing. I've been saying that for a while, but I don't know if I really understood what it meant initially, as the CSS is laid out more to condense correctly, rather than to expand comfortably. Again, FreeCodeCamp has done a great job of filling in the gaps in my current understanding. The 300 hours per course estimate up-front is intimidating, and I assume there will be substantial time wrapped up in each of the projects, but I am enjoying the process even more than I expected, and the content moves along quickly.

At some point in the next few days, I'm going to try and legitimately relax and [deliberately miss some days of posting]({% post_url journal/2020-08-31-applied-visual-design-and-new-stats %}#new-workbench). I think it will be good and hopefully help me to detach from becoming too focused on maintaining a streak instead of the true purpose of this site.

While briefly looking around on LinkedIn, I saw a post from CyberCoders about [why programmers should be blogging]({{page.references[2]}}). It makes some excellent points, such as how blogging can illustrate the writer's reader-first mentality, or communicate subject expertise, and for quality over quantity. I've mentioned it in previous blogs, but I have mostly written this site to capture a snapshot of my learning and thought process in web development from the ground up. This introduces a number of issues with my site versus the criteria this post presents:

- I am no subject matter expert in the focus material, as I am an early learner changing careers
- As these journals are retellings of my daily activity, challenges, and realizations, I am unsure about just how much quality this communicates to a reader. I hope that it give some insight into who I am as a person, and where I am on my learning journey. Maybe some of the realizations I have along the way would be helpful to someone, but it is not presented in a tutorial-style way that one would organically encounter my solutions.
- My posts are generated daily(-ish), and my main page filter was added specifically _because_ this is quickly becoming a lot of content.

Perhaps I should re-evaluate my approach with this site. If my current approach is hindering my future employability, then it would be prudent to make adjustments before I invest too much time. Lately, I feel like some posts have become increasingly stream-of-consciousness, which may be more of a detriment as I am trying to accurately and completely capture my state of mind and thought process.

Conversely, I do not make any false claims about the content I am producing for this site. The blog and log categories exist independently for this reason - blogs are specifically for content that can stand on its own, and is produced with less frequently (at hopefully higher quality) than log entries.

My initial issue was that I was not sure how to substantiate claims about my supposed skill level. The solution I resolved to run with was to capture the path, resources, and time used to gain skills and understanding, to validate my skillset.

Ultimately, this site will probably need to be shown to a few select people within the industry to gauge their impressions and perceptions of the content. Depending on how that goes, I will either continue what I'm doing, or go back to the drawing board. If this proves to be a failure for the purpose of validating skills publicly, then I will undoubtedly keep using it privately at the very least, as it has been a game-changer for increasing the quality of my learning experience.

## Tasklist

- [x] Complete the FFC Responsive Web Design Challenges
- [x] Complete the FFC CSS Flexbox Challenges
- [x] Work on the FFC CSS Grid Challenges
- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only

### Blog Changes
- [x] Edit older posts