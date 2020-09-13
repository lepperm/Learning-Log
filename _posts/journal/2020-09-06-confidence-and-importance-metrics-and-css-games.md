---
layout: journal
title: "Confidence and Importance Metrics, and CSS Games"
excerpt: Blog feedback sparks an exciting idea for more actionable metrics to capture with each post, and a little CSS learning with some quick games.
author: Max Lepper
categories: [journal]
tags: [css]
date: 2020-09-06 23:52:46 -0400
modified_date: 2020-09-07 16:19:21 -0400
published: true
status: finished
confidence: log
importance: 2
context: true
skills: [css]
references: ["https://www.gwern.net/About#confidence-tags","https://www.gwern.net/About#importance-tags","https://www.gwern.net/Resorter","https://www.gwern.net/docs/statistics/bayes/2008-kesselman.pdf","http://flexboxfroggy.com/","https://cssgridgarden.com/"]
timespent: 90
sleep: 395
recreation:
workout:
---

## Journal

Regarding [the perception of this blog]({% post_url journal/2020-09-04-irregular-coffee-cicd-limits-and-blogging-quality %}), outside of the value it generates for myself, I spoke with a friend, Kevin (blog link here in the future, potentially!), and asked about his thoughts. His response was very positive and encouraging! Kevin referred me to a different blog, and suggested considering metrics for things like [confidence]({{page.references[0]}}) and [importance]({{page.references[1]}}).

I really enjoy this idea, and the author of the blog in question appears to execute this very well. It would be informative to capture how I feel about what I have written, and update this belief over time with more experience and perspective. Similarly, trying to estimate how important the content within is for the reader would be an interesting exploration, and one that could be used to better calibrate my writing style and topics with time and feedback. The author of this post mentions an interactive sorting tool, [Resorter]({{page.references[2]}}), which they have written to counteract polarized results in self-evaluated ranking systems. This was the exact pitfall I was imagining experiencing myself before reading deeper into the article, and the proposed solution has piqued my curiosity!

In the context of this blog, I had just gone back through and re-edited all previous posts to try and improve the content and delivery. Some posts have had more personal/observational points, and others have had technical details requiring prior knowledge of what I have been working on to give context, and others legitimately just had notes about learning. With this in mind, I have identified a potential list of new data points to add to my logs:

- Status (Completeness)
  - Notes
  - Draft
  - In Progress
  - Finished
- Confidence (Categorizing the type of content and my feelings about it)
  - Log
  - Emotional
  - Fiction
  - Impossible - Certain ([Kesselman List of Estimative Words]({{page.references[3]}}))
- Importance (Estimated numeric value of information to the reader)
  - 0 - 10
- Context (If the contents of the article require contextual information from outside of the current entry)
  - True/False
- Modified Date
  - date (Currently used on blogs but not logs)

I'm going to sleep on this, as there are 33 posts that will require updating and evaluation - no small time commitment. However, this feels fairly comprehensive moving forward, and allows me to capture more consistent metrics about my mental state and post status. Posts identified as anything less than "finished" can be added to Tasks, and posts with confidence levels could be reviewed after a specified interval of time since the date/modified date to re-evaluate my confidence.

On a completely different note, I had encountered two CSS games, [Flexbox Froggy]({{page.references[4]}}) and [Grid Garden]({{page.references[5]}}). Since I'm trying to take it easy, but still crave trying to learn more, I knocked both of these out quickly. The way the content is presented is excellent, and I would absolutely recommend them to someone just starting out. It runs like a very condensed course, but still covers a lot of material with rapid feedback.

## Tasklist

- [ ] <span title="Task to be added to next entry">=></span> Work on the FFC CSS Grid Challenges
- [ ] <span title="Task to be added to next entry">=></span> Modify CI/CD rules for Portfolio, AGWSU, and any other sites for new October 1st runner minute restrictions
  - [ ] <span title="Task to be added to next entry">=></span> Build only on Master commits, Dev builds must be triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Timeout on testing limited to 5 minutes tops and triggered manually
  - [ ] <span title="Task to be added to next entry">=></span> Lighthouse testing on trigger only