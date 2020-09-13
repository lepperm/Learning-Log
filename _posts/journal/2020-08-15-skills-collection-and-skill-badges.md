---
layout: journal
title: "Skills Collection and Skill Badges"
excerpt: Creating a collection for detailed per-skill information and changing the log skill list to a collection of badges instead of a list.
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
date: 2020-08-15 23:41:11 -0400
modified_date: 2020-09-07 19:43:09 -0400
published: true
status: finished
confidence: log
importance: 1
context: true
skills: [javascript, liquid, jekyll, html, css]
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://jekyllrb.com/docs/configuration/options/","https://jekyllrb.com/docs/permalinks/", "https://gitlab.com/gitlab-org/gitlab-pages/-/issues/231", "https://jekyllrb.com/docs/collections/"]
timespent: 130
sleep: 
recreation:
workout: 
---

## Journal

Mobile testing revealed that the Skills page was resolving to `/skills.html` instead of just `/skills`, which was breaking anchor tag linking to the appropriate entry in the table. This was easily fixed with a [permalink]({{page.references[3]}}), and I also replicated this to the other pages. With the changes to the Category and Tag badges, I went ahead and changed the skills for journals into badges, too.

Skill progression is something that I really want to capture next. The thought behind this is that I can pull in more structured learning material and track my progress as [ {current complete} / {total items} ] in the main table. A `_skills` [collection]({{page.references[5]}}) was created with a few empty initial skills and added to `_config.yml`.

The Gitter chat for my 503 issue seems to be moving forward with more new issues and no responses to anyone's inquiries. I did happen to find [this issue]({{page.references[4]}}) in Gitlab Pages which appears to be active and flagged as a bug. While I don't really understand what is going on, it looks possibly related, so I'm closing this task until it either resolves itself or I learn enough to troubleshoot better.

Today was a pretty busy day, so I didn't get around to much else. My backlog in Todoist is getting pretty lengthy, however, so I am hoping to power through things tomorrow.

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Look into GitLab Pages `GET https://gitlab.com/users/sign_in 503` error in console on each page load [(https://gitter.im/gitlab/gitlab#)](https://gitter.im/gitlab/gitlab#)
- [x] Add permalinks to main pages to resolve skill anchor linking
- [x] Change journal skills to badges
- [x] Initialize skills collection for detailed per-skill progression info