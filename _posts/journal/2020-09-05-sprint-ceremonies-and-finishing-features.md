---
layout: journal
title: "Sprint Ceremonies and Finishing Features"
date: 2020-09-05 14:51:21 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [agile-pm]
excerpt: Neal and I meet to sync up on the AGWSU project, wrapping up sprint 6 and moving forward with projections for sprint 7, and the timeline beyond.
references: ["https://agwsu.org/","https://www.linkedin.com/in/nealstrobl/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/92","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/93"]
skills: [agile-pm]
timespent: 140
sleep: 485
workout: 
---

## Journal

First thing this morning on the [AGWSU]({{page.references[0]}}) project, [Neal]({{page.references[1]}}) and I had meetings to wrap up [sprint 6]({{page.references[2]}}) and coordinate for [sprint 7]({{page.references[3]}}). Neal has put a lot of consideration into the structure of the site and reusability, so the feature-dominoes of our roadmap look like they will fall into place well this sprint! As much of the work Neal has been handling has been structural bones, my new objective is to work on updating our Architecture documents. This sounds like a good challenge and should give me a good perspective on how all the pieces work together. We also generated a list of action items that I will roll out as part of sprint maintenance.

The goal at this point is to complete the project by the end of sprint 8. I'm sure that there will be some cleanup and maintenance issues remaining, but we need to launch and get the site out there officially so that potentially revenue-generating projects can be started.

Today ended up being busier than expected, so the only other thing I may get to is editing more old posts. At the time of writing, I'm about halfway through, and I have been more pleased with the content so far than I had anticipated after the blog I read yesterday. I spoke with Neal about his perceptions of the site, and his take was that, while it probably won't get any serious inspection, it is _good_ that I have a blog. He doesn't anticipate that it existing would be a negative factor towards my objective. I will reach out to get some more perspectives.

In re-reading all of the content so far, it does seem more digestible than I was anticipating, probably because I'm experiencing it over ~4 minutes of reading and not spaced out over the course of an entire day. The paragraph breaks do jump around pretty drastically, and maybe I should be grouping things under headings or somehow visually distinguishing different topics to better signal to the reader that the subject has changed. I've added this to the blog to-do list over in Tasks. Some (most?) of the content makes reference to technical specifics that aren't directly in the view of the reader, so maybe I could try to include more code examples, or perhaps live demo code, like a CodePen.

## Tasklist

- [x] Sprint 6 retro and Sprint 7 planning meetings for AGWSU
- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only
- [ ] <span title="Task to be added to next entry">=></span> Work on the FFC CSS Grid Challenges

### Blog Changes
- [x] Edit older posts