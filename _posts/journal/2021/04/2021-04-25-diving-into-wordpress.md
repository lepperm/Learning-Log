---
layout: journal
title: "Diving into Wordpress"
excerpt: Starting into learning Wordpress for a new client project.
author: Max Lepper
categories: [journal]
tags: [wordpress]
date: 2021-04-25 22:37:50 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [Wordpress]
references: ["https://sarahbgillam.medium.com/how-to-use-google-domains-with-dreamhost-and-how-to-get-free-email-for-your-domain-799775bd4703"]
timespent: 810
sleep: 410
recreation: 30
workout: 0
---

## Journal

{% include focus-box.html focus="Wordpress" theme="Client Projects" %}

Since my last entry, nearly all free time not devoted to resolving safety concerns around the house has gone towards working on a new client project. The project is a job board site to help pair companies with talented individuals for either volunteer or paid opportunities. Employers will pay per posting, and there may eventually be some kind of subscription offering for talent.

I had a few discussions with the client and was supplied with branding resources, feature requests, organizational structure, and all kinds of helpful data points. They had already secured the domain, so step one was to select a host and get the site live.

After some research, DreamHost ended up being the winner for their selection of pricing plans and the one-click Wordpress setup. I've had decent success with DreamHost in the past for hosting small projects, so I was already familiar with their control panel.

Setting up the Wordpress hosting, I specified our domain name and let DreamHost handle setting everything up. It took me a bit before I realized that, since I had specified the domain during setup, I couldn't do or access anything at all, not even via FTP, until the domain was switched over. Whoops!

After that, I reached out to the client to get the DNS namespaces pointed to DreamHost. We used [this guide, which also shows how to set up a free domain email]({{page.references[0]}}). With that pushed through, the site was live within the day, and I was able to get to work!

Wordpress is such a different experience from anything I've done so far. Everything is tucked away and wrapped into plugins, menus, and forms. I've seen references to PHP and shortcodes and other such elements that sound more like what I'm looking for, but I haven't gotten there quite yet. Honestly, I should probably stick to more of the official introduction guides instead of youtube.

That being said, I was anxious to get something in place quickly! For now, a "coming soon" page would be a great way to start collecting emails to let people know our site will be launching, and to start building some SEO. There were a few different plugins to choose from, so I selected one that looked like it would be fairly quick to implement and created this:

{% include blog-img.html source="/assets/images/posts/2021/04/25/sig-comingsoon.png" alt="A simple website with the words 'Silver is Gold,' a short elevator pitch for the site, and a mailing list sign-up form." %}

Through this process, I was checking for licensing, verifying fonts, trying to source graphics and resources, and trying to come up with wording that properly captured the goal of the site while being mindful of the client's requests for wording.

Next was the site itself. The "coming soon" plugin allows logged-in users to see the true site, which is nice for building. It looks like Elementor is the suggested site building plugin, and it uses the Astra theme to modify the appearance of everything. I had found a nice job board standard Wordpress theme already, but couldn't find anything equivalent in Elementor... and I'm a bit confused about how best to approach this.

For the core job board functionality, it seems that WP Job Manager is a mature option with lots of expandability. I will need to work with it more before I understand what all is happening. I also added plugins for user signups, signups via social media accounts, form builders, payment processors, a backup utility, and an SEO suggestion tool. Many of these were recommended to be used with each other, so I've been chipping away at the configurations.

Not having a layout that looks like our brand board is definitely a concern, from a demo standpoint. I'd like to figure out how to use Elementor (or if I even _should_ be using Elementor) soon, and then create the landing page. The job board functionality is perhaps less flashy but easily as important - a good-looking landing page is useless if the site doesn't fulfil its purpose! My next task is to push forward on both of these fronts and see if I can learn Wordpress a bit better overall.

## Additional Note

For these digest posts, I'll be rolling all of my time into a single post. The wellness metadata will be off, which is fine, but I do still want to capture time spent towards skill development as best as I can (fulfilling _this_ site's purpose!).

## Gratitude

### What is going well?

It's awesome actually having a site live and to be doing some web work again, even if it's nothing like any of the studies I've done so far. I'm really excited to hopefully make something happen, and ideally something that the client is happy with.

It also is really nice writing about my experiences. Blogging has been such a nice outlet and self-reflection space.

### What could be better?

Between increasingly complex and visible issues around the house, my workload at work ramping up, and trying to get moving on this project, my burnout from December has come back in a big way.

The increased stress has brought back my insomnia and bad nightmares when I do manage to fall asleep, and I feel a bit hopeless quite often. I'm hoping that by trying to be mindful and identify things for what they are, I can at least temper my internal expectations and keep things that can't wait inching forward.

Now that we're fully vaccinated, we're planning to try and get out of town and unplug for a few days sometime soon, and I suspect that will help tremendously.

## Tasklist

- [x] Select hosting
- [x] Coordinate and reroute DNS namespaces
- [x] Setup an email account
- [x] Create a "coming soon" page
- [x] Start learning plugins and setting things up