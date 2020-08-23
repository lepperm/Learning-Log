---
layout: journal
title: "Actually logging some learning!"
date: 2020-08-22 23:54:31 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [git]
excerpt: Learning git cli commands in an effort to not rely on Sourcetree so much, and adding a "Blog Improvements" section in my Tasks page for improvements that I would like to capture.
references: ["https://learngitbranching.js.org/"]
skills: [git, liquid, html, javascript, css]
timespent: 120
---

## Journal

During the D3 webinar, it was mentioned that the git command line could be used to rapidly switch between branches. So far, I've mostly just used git clients, like Fork, GitHub Desktop, and Sourcetree (my current client). Pulling in some learning resources, I found [this page]({{page.references[0]}}), which is now official Learning Log task designation [Git #1]({{ site.baseurl }}/skills/git#1)! 🎉 Fancy, it's like I'm actually using the site for the intended purpose instead of a big Liquid sandbox.

This interactive Git learning sandbox contains a total of 34 levels, and I was already learning new stuff that I hadn't used before by level 4! The visual representation of what was happening was a huge benefit, and I tried to recreate some of these sequences as notes in the [Git skill page]({{ site.baseurl }}/skills/git).

Speaking of using the site as a big Liquid sandbox, there are a number of lingering tasks for the site, and so far I have been grouping them into a Todoist project. I already use Todoist to manage everyday and life action items and smaller projects, so I definitely don't need to be tracking projects that can track themselves.

<div style="text-align: center;">
(Future post about my task distillation pipelines??)
{% capture image %}
![My Karma level in Todoist]({{site.baseurl}}\assets\images\todoist-karma.png "Top 1% of users 3 years running 😎👉👉"){: style="vertical-align: bottom;padding: 1.2em;"}
{% endcapture %}
{{ image | markdownify }}
</div>

In my includes, I created two files, `blog-todo.md` and `blog-done.md`, which I will build out with action items as I generate them. On the Tasks page, I added a mash-up of Liquid, HTML, and JS to selectively include the section dependent on these files containing content, and then controlling hiding and showing the "done" archives.

## Tasklist

- [x] Work on [Git #1]({{ site.baseurl }}/skills/git#1)