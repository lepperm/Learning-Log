---
layout: journal
title: "Finalizing Notifications and Mastering Markdown"
excerpt: Putting finishing touches on notifications for now, submitting my finalized tribute project, and taking a quick Markdown course.
author: Max Lepper
categories: [journal]
tags: [javascript,freecodecamp,service workers]
date: 2020-09-15 23:58:21 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
skills: [javascript,html,css,markdown]
references: ["https://www.brainscape.com/blog/2016/08/better-learning-focused-vs-diffuse-thinking/","https://masteringmarkdown.com/","https://typora.io/"]
timespent: 255
sleep: 380
recreation: 120
workout:
---

## Journal

I feel pretty foolish this morning! When updating my PWA installed site, I think it would be neat to show the new content and take the user right to it, and that has been how my testing has worked so far. I have not, though, been publishing and unpublishing posts while testing!

In hindsight, yeah, that's definitely a critical test.

The "latest" post url and title are baked in by Liquid on build, so while the _service worker_ may know that there's a new update, it does not yet have access to the new post information, and the values for the title and post url will only update after the cache is updated. I would still like, if possible, to allow users (myself) to jump right to the latest content. So, how could we do this?

First up, I have to lose the post title. This introduces a huge point of failure if the value is incorrect/outdated, or people swiping it away because they've already read the post listed. In the future, I believe that I may be able to counter-act this with delivering a proper web push, but I mentioned yesterday that I am not going to go any further down that road for the time being, as this is already a fairly low-value feature that I'm spending way too much time on.

When it comes to directing users to the latest post, it should be a matter of using `site.posts.first`, like I already am using to get the url and title, but instead sticking it into a stand-alone page with a permalink. I already know from breaking things tremendously that injecting a post reference without specifying a Front Matter value drops in EVERYTHING - header, body, footer, and all - which we can absolutely use to our advantage. A few seconds later, and I have a new page:

{% raw %}
```liquid
---
  layout: null
  permalink: /latest-post/
---
{{ site.posts.first }}
```
{% endraw %}

Using `layout: null` gives me an empty webpage with a dedicated permalink, and the entire contents of the latest post fill the empty shell. This leaves us with a page that is virtually indistinguishable from the actual post. Easy!

Now I will swap out my reference to `site.posts.first.url` in my service worker update event with this new permalink. If a user is on the site and there is an update, they will have the option to either go to the new content or refresh whichever screen they are currently on. A few iterations of testing later, and I _think_ I can finally say that this is done! It's not perfect, but it's also not very visibly broken, so that should be enough to keep my brain from attacking the problem while [switched into diffused mode]({{page.references[0]}}).

With that wrapped up, I finished filling out the details for my now-complete tribute page:

<p class="codepen" data-height="457" data-theme-id="dark" data-default-tab="html,result" data-user="lepperm" data-slug-hash="abNYBJK" data-preview="true" style="height: 457px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="FCC Tribute Page: Project 1.1">
  <span>See the Pen <a href="https://codepen.io/lepperm/pen/abNYBJK">
  FCC Tribute Page: Project 1.1</a> by maxlepper (<a href="https://codepen.io/lepperm">@lepperm</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

My two main reflections from working on this page are:

1. It is easy to lose sight of the target of these exercises - I spent more time just picking someone to write the tribute for than completing all of the stories for the project! Having to write a real tribute for an actual person holds more....responsibility...than creating a fictitious product to sell, however, so I hope that future projects will roll out smoother.
2. I should probably take some courses on design and aesthetics. I struggled to come up with something that I found pleasing to look at. That's not a component that I am being graded on, I realize, but the final product does reflect on my capabilities.

I explored my CodePen account, making some tweaks to the settings, and forking the next four FreeCodeCamp projects. They definitely seem to get a little more involved, which is exciting! For now, though, I'm overdue to make progress on some progression items.

I'm pretty familiar with Markdown and use it often, but I stumbled across a free mini course offered by Wes Bos called [_Mastering Markdown_]({{page.references[1]}}). It's about 35 minutes long and I was curious to check it out quick to pick up any extra tips or best practices, as I have been redoing a lot of documentation at work. The course did do a nice job of explaining tokens for cleaner links, and I learned about using diff fences and being able to nest links and images, so it was great to round out my notes.

As an aside, I've really been enjoying using [Typora]({{page.references[2]}}), which is a Markdown editor that formats as you type. Although I personally write the actual documentation in VS Code at work, I have Typora installed in other computers and specified as the default app for Markdown files. This lets me serve nicely formatted and easy-to-read documentation for people who typically only use Microsoft Word. The other benefit is that, since it's Markdown, I can capture all documentation changes in our SVN repository, right alongside project files. The desktop app is currently free, however I do not know if this will change in the future.

## Tasklist

- [x] <span title="Task to be added to next entry">=></span> Finish FCC tribute project and submit
- [x] Work on a skill progression entry