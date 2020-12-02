---
layout: journal
title: "The Tools of the Trade"
excerpt: Kicking off the new schedule by picking a key theme of "tools" for the week, and learning more about VS Code.
author: Max Lepper
categories: [journal]
tags: [VS Code,shortcuts]
date: 2020-12-01 23:44:29 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [general]
references: ["https://www.youtube.com/watch?v=WPqXP_kLzpo","https://www.susanshu.com/self-learning-tips-become-ready","https://www.reddit.com/r/LifeProTips/comments/k3j7g7/lpt_dreading_something_avoidance_makes_it_100x/"]
timespent: 160
sleep: 330
recreation: 30
workout: 30
---

## Journal

{% include focus-box.html focus="Learning" theme="Tools" %}

A new month calls for a (slightly) updated format! For now, I have a very simple table, but this is tied to a bit of HTML that will be injected thanks to a line of Liquid at build time:

{% raw %}
```liquid
{%- include focus-box.html focus="Learning" theme="Tools" -%}
```
{% endraw %}

My thinking is that when I eventually want to get fancy with things and make something that actually looks nice, I'll only need to make the adjustments once - **D**on't **R**epeat **Y**ourself, right? Or I've also heard **W**rite **E**verything **T**wice... I think once is fine for now.

I'm getting a bit of a late start to this week's theme, with yesterday being devoted to determining my structure going forward. However, the shorter window is perfect for building out my tools for this new focus and learning how to utilize the tools I'm already using better!

FreeCodeCamp recently released a [video about VS Code]({{page.references[0]}}) that I've been itching to chunk out some time to watch. I've discovered a few things on my own and from friends, but I can tell that I'm not using a lot of the power it contains. My notes are included below, however please know that this isn't a comprehensive overview of the whole video, just things that really jumped out as helpful! <a href="#continued">Click here to skip over the notes.</a>

---

### VS Code Tips

#### Keyboard Shortcuts

Open the command palette
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>

Select whole word under cursor
- <kbd>Ctrl</kbd> + <kbd>d</kbd>

With nothing selected, add whole line to the clipboard
- <kbd>Ctrl</kbd> + <kbd>c</kbd>

Shift line contents vertically
- <kbd>Alt</kbd> + up or down arrow keys

Copy line contents vertically
- <kbd>Alt</kbd> + <kbd>Shift</kbd> + up or down arrow keys

Custom shortcuts can be [created and support conditions](https://www.youtube.com/watch?v=WPqXP_kLzpo&t=2605s)!

#### Snippets

Snippets are saved as either a local or global [json file that can be modified](https://www.youtube.com/watch?v=WPqXP_kLzpo&t=3040s). There are some really great examples in this video that demonstrate how to build efficient snippets.

To access, click on the settings cog in lower left, then select "user snippets."

VS Code also comes with [Emmet snippets](https://docs.emmet.io/) enabled by default! This allows you to generate lots of structure quickly. For example:

`div>ul>ui*4` and `tab` turns into

```html
<div>
  <ul>
    <ui></ui>
    <ui></ui>
    <ui></ui>
    <ui></ui>
  </ul>
</div>
```

You can take this to extremes like `div.content#intro>table>tr.headers>th*4^tr*7>td*4`, which creates a div with an 8x4 table, and adds some classes and IDs to elements.

#### Settings

If you use the command palette to turn on `setting sync`, you can export all (or some) of your settings with your GitHub account.

#### Debugging

The video also contains a great overview of [using debugging](https://youtu.be/WPqXP_kLzpo?t=4020). Debugging looks incredibly powerful, and I feel a little foolish for not looking into it sooner! I will definitely be trying this out soon.

#### Version Control

From the [git tab](https://www.youtube.com/watch?v=WPqXP_kLzpo&t=4725s), you can perform all of your basic git actions. With GitHub integration, you can actually publish new repositories right from inside VS Code!

---

<span id="continued"></span>
My spouse sent me a Reddit post on [avoidance and goals]({{page.references[2]}}), which draws connections between having clear goals as a way to draw motivation and offset avoidance. Similarly, a post on Susan Shu Chang's blog mentions [reader's block]({{page.references[1]}}) during exploratory learning in a new subject, which I've definitely experienced in moments over the past few months. This hit me especially hard when I got on social media, and the torrent of seemingly valuable information ground my progress nearly to a halt.

Part of Learning Log was intended to help collect, prioritize, and evaluate sources of information, both for personal reference and to compile for learners on a similar path to find in the future. At the same time, and Susan's blog covers this very well ([go check it out]({{page.references[1]}}), it's great!), there is an extreme abundance of information out there. I do not want to get caught up in the trappings of trying to pick between multiple versions of the same information, or spending unnecessary time rehashing information I have already properly assimilated just to check off that I completed a course - these are low-value activities and ultimately wasteful of time.

For me, working on a small project is a great way to take the loosely connected nodes of information and learn how they interact in a more meaningful way. By trying to put the information to work, you get a deeper understanding for how concepts are interconnected and start getting a feel for how you can practically use the information. It's not unlike the understanding of an object that comes from holding it in your hands versus seeing it in a picture.

The recommendation of tighter deadlines and being mindful of <span title="Work expands so as to fill the time available for its completion.">Parkinson’s Law</span> is helpful, and yesterday was a great example of this. My timeline was a day, and thankfully I managed to complete my goals within that limit. Even if I had not, though, I still would have ended up much further along than if I had set a more nebulous target like the end of the week, or a month (meaning I probably wouldn't have looked at it yet).

There are a few tasks on my plate right now with extended goals like this, so setting up "checkpoint flags" along the way with incremental due dates would be a good way to keep pushing the needle forward. For example, researching employers and roles - I'm honestly a little intimidated about this task, for some reason. To counteract this, I want to determine what my first major goal would be and divide the work up backwards from there (and maybe bake in some error to help cushion me if I fall behind). And this could be recursive, depending on what the goal is and how long I'm willing to commit. For goals with a start-to-finish that's more difficult to measure (like redoing my portfolio), opting for a more aggressive timeline is probably for the best - even if you don't get it done in time, as long as you try, you'll be further ahead.

## Tasklist

- [x] Generate a Key Theme for the week
