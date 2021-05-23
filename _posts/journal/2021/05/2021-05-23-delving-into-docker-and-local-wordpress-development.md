---
layout: journal
title: "Delving into Docker and Local WordPress Development"
excerpt: Looking to level-up my WordPress development lifecycle, I evaluate different options and workflows and start digging into Docker.
author: Max Lepper
categories: [journal]
tags: [docker, wordpress]
date: 2021-05-23 18:58:24 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [docker,wordpress]
references: ["https://www.silverisgold.org/","https://wpjobboard.net/","https://roots.io/bedrock/"]
timespent: 1260
sleep: 0
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

So far, for [Silver is Gold]({{page.references[0]}}), I have been making all my edits to the live site behind a "coming soon" landing page. This has been quick and easy for getting my bearings and trying to learn WordPress, but probably won't be the best approach long-term for a production site. Since I'm looking to switch our core job board plugin to [WP Job Board]({{page.references[1]}}) and rework the theme, now is a great time to make a change!

My computer has also been struggling lately with intermittent crashes and storage issues. My C drive is an old and tiny 128GB drive, so between Windows updates and the pagefile, all of my free space gets sucked up after a few days. Cleaning up some applications and processes that were running on boot from old projects has also been long overdue. I ordered the new drive last weekend and got it towards the end of the week, and was able to clone my old drive over and shuffle things around without too much trouble. Now my computer is zipping along with no major issues!

Back to the topic at hand, I figure there are really two related but separate issues I need to research - how to implement a WordPress development lifecycle, and how to develop for WordPress locally.

### WordPress Lifecycle

For a proper lifecycle, I'm thinking that there would be some kind of local environment for building, followed by testing, followed by deployment to a staging site, and finally followed by deployment to the production site. For sample data, the production site database could be cloned to the local environment and the staging site for verification against real data, or I could use dummy data meant to hit certain criteria.

For personal projects, I love using GitLab's CI/CD pipelines to test, build, stage, and deploy my code. I'm not sure if I'll be able to achieve this kind of workflow, but I'm very interested to see what's possible.

As I'm writing this, I've poured over quite a few articles, and some of them are beyond where I am or what I'm familiar with so far, so I'll include and organize some of the more useful links here for future reference and try to highlight my takeaways from the content in a relevant header below.

- [Setting up a Development Environment](https://developer.wordpress.org/themes/getting-started/setting-up-a-development-environment/#your%C2%A0wordpress-local-development-environment)
- [Introduction to automated WordPress deployments](https://carlalexander.ca/introduction-automated-wordpress-deployments/)
- [Development Best Practices (with Version Control)](https://wpengine.com/support/development-workflow-best-practices/)
- [Professional WordPress deployment workflow - how to handle plugins?](https://www.reddit.com/r/Wordpress/comments/98wu11/professional_wordpress_deployment_workflow_how_to/)

### Staging Site

- [How to Easily Create a Staging Site for WordPress (Step by Step)](https://www.wpbeginner.com/wp-tutorials/how-to-create-staging-environment-for-a-wordpress-site/)

**Plugins**
- WP Stagecoach (paid)
- WP Staging (free stage but paid push to production)

It looks like I can manually configure the staging, but the article above states that it is messy and not recommended. I'll have to look and see if DreamHost has good options for this natively.

- [A Beginner’s Guide to Website Staging (And How to Set It Up)](https://www.dreamhost.com/blog/website-staging-beginners-guide/)
- [Creating a staging WordPress site](https://help.dreamhost.com/hc/en-us/articles/360003838631-Creating-a-staging-WordPress-site)

Looks like I need to create it manually after all! DreamHost is pushing their premium DreamPress service, making me question if I made the right choice selecting them as the hosting provider over Bluehost. WordPress services seem to be where the money is, eh?

The article recommends creating a "dreamhosters" subdomain to use for staging. Looking through the Dreamhost portal, though, it appears like we should have up to 5 subdomains with our hosting! I went ahead and tried to add the staging site, and it looks to be in the process of being added, so I might try to use this subdomain for staging.

- [How to move WordPress to a different domain at DreamHost manually](https://help.dreamhost.com/hc/en-us/articles/214693138-How-to-move-WordPress-to-a-different-domain-at-DreamHost)

One concern I do have about a subdomain on the same server would be if pushing the changes live might interrupt or cause issues with users interacting with the site. I suppose this could be counteracted by having maintenance downtime, but that may be a question for a later date.

From some articles I've read so far, it sounds like things can get pretty messy when it comes to making everything work and talk together. For the time being, I'm more than content with manually managing the pipeline, just as long as I can implement _something_! I think I have some GitLab scripts to help me to deploy files via FTP servers for files hosted on Firebase, so I would imagine that I could modify and repurpose that here, as well.

### Developing Locally

Developing the site locally provides a lot more stability to the live site and thus the users, so avoiding disrupting the accessibility of the live site will be a priority. Additionally, developing locally means that my site performance will not be limited by my internet connection, and should ideally make my experience more responsive, which would be great! Some of the WordPress plugins are exceptionally sluggish, and opening the page editor always lags, so the time saved going back and forth would probably add up quick.

To run WordPress, we'll need PHP and MySQL, and some way to host the server locally, like Apache. With a quick search, it appears that XAMPP is a popular choice and includes everything we need but WordPress itself:

- [How to Create a Local WordPress Site Using XAMPP](https://www.wpbeginner.com/wp-tutorials/how-to-create-a-local-wordpress-site-using-xampp/)
- [WordPress Local Development For Beginners: From Setup To Deployment](https://www.smashingmagazine.com/2018/04/wordpress-local-development-beginners-setup-deployment/)
- [How to Move a Live WordPress Site to Local Server](https://www.wpbeginner.com/wp-tutorials/how-to-move-live-wordpress-site-to-local-server/)

I am a little concerned, as I have old projects running on localhost with Apache that are already a little wonky, and I don't want to spend more time on this than I have to - I'm already behind where I'd like to be. I could use VMs, but that seems like it's over-complicating things, too, and I'm not entirely sure how that'd work with networking.

Local by Flywheel looks very interesting, but I'm a little confused by some of the wording. It seems like moving files around may have a dependency on Flywheel or WP Engine, which are paid services, but maybe not? I may grab it to play around with. If it works, then that'll be awesome, but I should dig further as I'm sure this issue has been solved without relying on a tool that is so specific.

Honestly, until I have some more mileage on WordPress, I'm hesitant to commit to paying for services if I don't have to. This project is volunteer work and my personal finances are tight, and similarly I don't want to commit the client to paying for more reoccurring expenses than they have to with a business model that hasn't been tested against the market and is not yet generating revenue.

There it is, Docker! I'm glad I ran into this. I've seen people mention Docker, but haven't looked into it and now is a great time. It looks like Docker runs containers which are almost like a much lighter VM, where the OS is emulated as a process, rather than on virtual machines where the hardware is emulated and a complete OS runs within the VM.

Docker images get built into containers, and are essentially instructions on how the container gets built. Similar to how you can have a `package.json` file for a React app and use Node to grab and assemble everything you need to compile the app, the Docker images can be modified and built up in layers and then shared for other people to assemble into the exact same environment.

This seems great for keeping my local environment cleaner and for making the source code of this site accessible to other developers in the future. It also reduces some of the hesitation with digging into something new, as I could build up a quick container on whatever base it requires, or possibly find one that is ready-to-go in the Docker Hub community.

There's a lot to learn, and I'll need to revisit some of these videos a few times, so I'll include them here:

Docker
- [Docker For Beginners: From Docker Desktop to Deployment](https://www.youtube.com/watch?v=i7ABlHngi1Q)
- [Fast & Easy Docker Container For Local WordPress Development](https://www.youtube.com/watch?v=tQBMM1TFcfA)
- [Build a solid WordPress dev environment with Docker](https://www.youtube.com/watch?v=kIqWxjDj4IU)

Workflow
- [Managing Your WordPress Site with Git and Composer](https://deliciousbrains.com/storing-wordpress-in-git/)
- [WordPress Packagist](https://wpackagist.org/)
- [WordPress Deployment](https://spinupwp.com/wordpress-deployment-workflow-preparing/)

### Bedrock

Through my search, I also encountered [Bedrock]({{page.references[0]}}), which is a boilerplate for WordPress and modifies the folder structure to better expose areas where I would be developing. This sounds helpful, and the folder structure seems much cleaner. It might be more of a tear-up to switch to using Bedrock, so this might be secondary after I get a working pipeline in place.

- [Better WordPress Environment and Workflow with Bedrock and Local by Flywheel](https://www.youtube.com/watch?v=wNSaP-O5wrk)

### Bonus Links

- [Introduction to WordPress unit testing](https://carlalexander.ca/introduction-wordpress-unit-testing/)

### Reflection

Going into this, I definitely assumed that there would be a more obvious path to do what I wanted to do. I still don't know if I'm on the right path, and I'm a little bit discouraged to have taken so much time but still not solidified a workflow.

Exposure to new options, concepts, and honestly just learning what's out there has been good. Of my immediate technical network, no one has much experience with WordPress in general and I'm beyond everyone's realm of expertise. Before reaching out to a wider audience, it's on me to make sure I do my research as best as possible before I go bugging people for information. There has certainly been no shortage of information out there!

### Time Breakdown

Over the past few weeks, work has been exceptionally busy with multiple projects and customers with downed systems in the field, so I ended up pulling a few late nights. We also experienced a loss in the family and have been helping and supporting where we could. Between work, family commitments, and time-sensitive plumbing issues, I have been mentally tapped out.

Not having the bandwidth to make progress is frustrating, because then I was also beating myself for having to cut something that is extremely important to my goals and commitments, but ultimately a secondary task. The landscape of my time looks completely alien to what it was like a year ago, with many more competing priorities in different areas of my life. It will be nice to get back to actually just working on the site itself, and not the production pipeline, as helpful as it will be to have in place.

We're taking a quick trip away soon to try and decompress a little. My personal goal is to have something in place before we head out.

Same as last post, here's a breakdown of my time:

- 5/10
   - 2h
- 5/16
   - 4h
- 5/17
   - 6h
- 5/20
   - 3h
- 5/21
   - 1h
- 5/23
   - 5h

## Gratitude

### What is going well?

I'm excited to be learning Docker, and already see how helpful it could have been on other projects. Things are also (knocking on wood) calming down slightly around the house, as the urgent safety-related tasks are getting whittled away and mostly just the long-term and complex tasks remain. I'm grateful to be able to interact with our families in-person again with much less fear that we're putting them in danger.

### What could be better?

I do feel guilty when there literally isn't enough time for me to address everything that needs to get done. It's a cumulative effect when I'm too tired to properly delegate and prioritize my time, as well. Getting good sleep, staying hydrated, eating healthily, and being active with yardwork has helped me deal with everything so far, and my hope is that any lulls in the demands required of me will be that much more productive when I get the chance.

## Tasklist

- [x] Research how to stage WordPress sites
- [x] Research ways to develop on WordPress sites locally
- [x] Upgrade my computer
- [x] Install Docker and familiarize myself
- [ ] Get WordPress running locally
- [ ] Pull down a copy of Silver is Gold and host it locally
- [ ] Push up a local copy of Silver is Gold to Staging