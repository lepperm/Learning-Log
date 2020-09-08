---
layout: journal
title: "A Detailed Breakdown of my Front Matter Data"
excerpt: Implementing and documenting additional Front Matter values for my blogs, logs, and notes.
author: Max Lepper
categories: [journal]
tags: [jekyll]
date: 2020-09-07 17:48:10 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
skills: [html]
references: ["https://www.gwern.net/About#confidence-tags","https://www.gwern.net/About#importance-tags","https://www.gwern.net/About"]
timespent: 50
sleep: 380
workout:
---

## Journal

Yesterday, I had written about potentially going back to restructure the Front Matter for all my posts with new [confidence and importance tag values]({% post_url journal/2020-09-06-confidence-and-importance-metrics-and-css-games %}). I took a little bit of time to write out how this should work and what all of the entries mean, as there's a fair bit being captured with each post now. Additionally, some reorganization of the data layout in each post will aid the initial post setup.

I had not initially planned on doing all of the blogs, but my wife and I were relaxing and watching videos, so I went ahead and knocked them all out! Next step was to add them into the intro section of the post templates. This gave me a chance to adjust the appearance more and how the elements break across lines. I heavily took inspiration from [gwern.net]({{page.references[2]}}), and will need to fully read through their approach to posting and documenting posts, as the structural quality of their site is far and away something that I would love to aspire to.

As a warning, this post is primarily a line-for-line explanation of some of the data values I embed into content for this site. Most of this data is utilized dynamically somewhere at build time, such as to generate all of my [skill tables]({{site.baseurl}}/skills/), my [post streaks]({{site.baseurl}}/stats/#ave-post-time), and [sleep quality tasks]({{site.baseurl}}/todo/#sleep-quality).

The "Data Key" section included below this section is tied to the living document in my reference folder, so this post should always reflect the latest version of my Front Matter.

{% include data-key.md %}

## Tasklist

- [x] Update Front Matter in all Blogs
- [x] Update Front Matter in all Notes
- [x] Update Front matter in all Logs

(All existing tasks postponed, as I should be resting and not posting or thinking about the site. Not doing to great on that front so far!)

- [ ] <span title="Task to be added to next entry">=></span> Work on the FFC CSS Grid Challenges
- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only