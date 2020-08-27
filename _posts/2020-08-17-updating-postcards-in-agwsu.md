---
layout: journal
title: "Updating Postcards in AGWSU"
date: 2020-08-17 22:41:17 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [react]
excerpt: Back into React with pair-programming for AGWSU, and project maintenance and schedule tasks
references: ["https://agwsu.org/","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Code%20Style%20Guide"]
skills: [react, agile-pm, gitlab-ci]
timespent: 395
---

## Journal

This morning, I pair-programmed with [Neal](https://gitlab.com/neal.strobl) to [resolve issue #86](https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/commit/66aac2f68cfaf5655513289d3c229d45899483c6) for the AGWSU project on his [Twitch stream](https://www.twitch.tv/happydevelopment). Whew, that's a lot of links! Prior to Learning Log and starting up [my portfolio](https://maxlepper.me), this was my primary project. With some foundational web projects live, I'm trying to make more of an active effort to get in there and help more directly with the code, instead of just testing and managing the project.

After my merge request was accepted, I noticed that our test stage in our CI pipeline was hanging. The CI has been one of my responsibilities on this project, and something that I have had a blast learning about. This issue with the Test stage is a known issue, and a fully-functional pipeline relies on two other issues being resolved, [#89](https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/89) and [#90](https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/issues/90). In the meantime, adding a [timeout to specifically the testing stage](https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/commit/de1b6981636436d52f83c365a5dad4f70890e825) will help free up the runner. A 30 minute timeout should be more than enough time for our tests to complete under normal circumstances, and with `allow_failure` marked as true, the pipeline will continue staging and performance testing automatically either way. Once the site is released into the wild, I will most likely make passing tests a requirement.

With our pair-programming session complete, I had to get caught up with my project management, so I took some time to review the Issues list and update my sprint management tool:

{% capture image %}
![Screenshot of the AGWSU Sprint Tracking Log]({{site.baseurl}}/assets/images/posts/2020/08/17/2020-08-17 15_19_17-BurndownTool.png){: style="vertical-align: bottom;padding-top: 1.2em;padding-bottom: 1.2em;"}
{% endcapture %}
<div style="text-align: center;">
  {{ image | markdownify }}
</div>

This is just a small snippet of the tool, but it is a full project story management spreadsheet I developed to dynamically inspect compiled stats from various sprints or across a selection of sprints, while tracking time commitments, velocity, the backlog, and helping us to make decisions about where to focus each sprint. AGWSU is on a timeline, of which we are quickly approaching the end, so this data should help us to make realistic decisions about what tasks we can complete.

On a whim, I added a subdomain redirect from [my portfolio](https://maxlepper.me) to Learning Log via [log.maxlepper.me](log.maxlepper.me). A few minutes later, the changes propagated through and the subdomain redirects correctly! This is more for some minor branding consistency on the portfolio site, and I had worked with DNS before to set up my custom domain and was curious what all it would take.

I totally misunderstood the use of "-" characters around whitespace tags, and Mermaid.JS works like a charm now, so I've added that simple pie chart back to the Stats page, too.

## Tasklist

- [x] Resolve issue #86 in AGWSU
- [x] Add "Test" stage pipeline timeout so that open async calls no longer tie up the pipeline
- [x] Update all issues in issue tracker for Sprint 6
- [x] Extend Sprint 6 one week due to mutual schedule changes, update issues downstream
- [x] Add DNS redirect on log.maxlepper.me for Learning Log