---
layout: journal
title: "MacOS VirtualBox and Tabliss CSS"
date: 2020-08-26 23:27:31 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [css]
excerpt: Training my wife on VirtualBox, configuring a VM with macOS X, and customizing Tabliss.
references: ["https://www.geekrar.com/install-macos-catalina-on-virtualbox-on-windows-pc-new/","https://tabliss.io/","https://gitlab.com/-/snippets/2009089"]
skills: [css]
timespent: 105
sleep: 
workout: 
---

## Journal

Today was an extremely busy day, so I didn't get much of a chance to do any serious development. During the course of my workday, I encountered a browser plugin called [Tabliss]({{page.references[1]}}), which is a new tab replacement. Unlike other new tab replacement plugins I've used in the past, this was very snappy and modular. The sections are easy to configure, and it natively supports custom CSS! Eager to see what I could cook up, I spent a few minutes adjusting fonts and spacing, and changing links from underline on hover to color change on hover:

{% include blog-img.html source="/assets/images/posts/2020/08/26/tabliss_css.png" alt="My nice new tabs" %}

```css
.Time {
  font-size: 32pt;
  padding: 3rem;
}

.Quote {
  font-size: 16pt;
  padding: 3rem;
}

.Links a {
  text-decoration: none;
}

.Links a:hover {
  color: lightgreen;
}

.Unsplash .image {
  filter: blur(3px);
  transform: scale(1.1);
}

.credit, .Overlay {
  opacity: 0.4;
  color: grey;
  font-family: inherit;
}

.credit:hover {
  opacity: 1.0;
}

.Overlay:hover {
  opacity: 1.0;
}
```
This will most likely be worked on and developed further as I use it more, so you can find the [snippet on my Gitlab]({{page.references[2]}}).

I mentioned recently that my wife built a new computer. While part of that was out of necessity from a slowly dying motherboard, it was also partially to give her access to more powerful tools for education and projects, as she has been an interest in design recently. To expand the tools at her disposal, we were curious if it would be possible to set up a virtual machine running macOS.

I use virtual machines in my job all of the time to isolate my development environments, as just about every PLC manufacturer has their own proprietary IDE that doesn't place nice with others, sometimes even cannibalizing shared libraries. I have very little experience with macOS, but know that it has gained (or has had?) popularity within the development community for the flexibility and UNIX base over Windows, and also for iOS development. My wife has also encountered a small list of applications that she has been unable to find suitable alternatives for on Windows. Getting this configured and running would open up all kinds of alternatives for us, and be great experience for what could be done with VirtualBox.

After a lot of searching and numerous bootloop-riddled dead ends, I finally came across [this guide]({{page.references[0]}}). I'm glad that I did, too, as I'm unsure how I was supposed to know to do many of the steps involved. A little while later...

{% include blog-img.html source="/assets/images/posts/2020/08/26/macosVM.png" alt="macOS X up and running in VirtualBox" %}

...and we were up and running! I am excited to get the VM tuned up and to see what all we can do with it.

## Tasklist

- [x] Set up a VM with macOS