---
layout: journal
title: "Pipeline Refinement and Local WordPress"
excerpt: The gears are slowly starting to click into place as I work out a production pipeline and experiment with running WordPress locally.
author: Max Lepper
categories: [journal]
tags: [wordpress,docker,"Silver is Gold"]
date: 2021-05-31 23:52:33 -0400
modified_date: 2022-01-08 20:52:37 -0400
published: true
status: finished
confidence: log
context: true
comments: true
skills: [wordpress,docker]
references: ["https://www.silverisgold.org/","https://wpjobboard.net/","https://localwp.com/","https://snapcreek.com/duplicator/duplicator-free/","https://roots.io/bedrock/","https://github.com/urre/wordpress-nginx-docker-compose","https://community.chocolatey.org/courses"]
timespent: 975
---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

The pressure is on for [Silver is Gold]({{page.references[0]}})! I haven't had much in the way of visible progress for the client the past few weeks, and I have also been feeling somewhat stuck. With my wife and I taking a few days away to try and decompress from everything that's happened these past 6 (well, and 14) months, and a stakeholder demo on June 3rd, things need to really get moving for this project to be able to launch on time.

My immediate goals for this week are to:
- [ ] Successfully pull the live site down to my local computer and get it running with a copy of our database
- [ ] Make a change to the site locally and push the changes live to our staging site and test
- [ ] Push the changes to our live site and test

Once those key tasks are completed (and ideally documented so that I don't forget how to do it if it ends up being pretty manual at first), I'll move forward with the plugin replacement to [WP Job Board]({{page.references[1]}}). I'll focus on _just_ the job board functionality and pages, then work towards implementing the branding.

I have probably said this a bunch, but I feel bad restarting like this on the client. Everything I've done with this project has been unfamiliar territory, so there's been a lot of "screwing around" and "finding out", sometimes with site-breaking consequences. Having some proper software versioning to catch me instead of relying on backups will give me a little more confidence to charge forward and make bigger changes.

But enough about all that, let's get into it!

---

**Note:** Editor Max here! This week has had me updating my thinking as I encountered more information a few times, so I've left the content in chronological order. This does mean that the focus of the narrative jumps around a little bit, but should be related to where my mind was at the time of writing. Thanks for reading, I appreciate you!

---

In Dreamhost, I went ahead and did the one-click install of WordPress on the staging site. I'll let this cook in the background for a bit while I work on other things.

Next up was grabbing a snapshot of the current site and database. Using the WP plugin [Duplicator]({{page.references[3]}}), it generated an archive and installer.php file to extract to where the new site will be cloned.

I did end up installing [Local by Flywheel]({{page.references[2]}}) yesterday night and I understand what's going on with the paid hosting options now. There are currently only two hosts that they allow you to push and pull your local site data to/from, and thats Flywheel or WPengine. We're not using either of those, but that doesn't seem to be too much of an issue, at least in the context of running WP locally. I was quickly able to get a blank WordPress site up and running in a few minutes - super simple! Ideally, I _want_ to use Docker, but I just need something that works right now.

Duplicator does a pretty good job of directing you what to do next, but I was a little wary of the next step! Maybe I'm misunderstanding, but it wants me to put the `installer.php` file and archive into an _empty_ folder accessible from my browser, so `silverisgold\app\public`.

I tried creating a `wp-deployment` folder inside `public` at first, but then it acted like the url for the homepage of the site was `silverisgold.local/wp-deployment`. Logging into the site like I normally would had it acting like a blank install, so I cleared things out and started over. Nuking away the `public` folder seems like an... extreme approach to deployment, and radically jeopardizes the production site. There is a paid feature to update an existing site, however if I'm understanding correctly, it sounds like it's the same process just more automated.

Hopefully I'm a dummy and my current understanding of how this works is incorrect! Regardless, after filling out the prompts and waiting a little bit - boom - a near-exact replica of the current production site was running on my local machine! Not only that, but it also has the job entries I had previously created, and all the existing user accounts.

- [x] Successfully pull the live site down to my local computer and get it running with a copy of our database

Goal one down, two to go.

My staging change is simple, I just want to change something highly visible and push things out, like the tag line on the home page to say STAGING, so I went ahead and did that. I'll be writing the database clone to Dreamhost's servers for the first time, so there may be a little extra complexity trying to get those to sync up. In the future, I'll probably try to occasionally clone the production data down to development, or have a good sample selection to hit a few different tests, but what we have is fine for now.

Again, Duplicate cooked up a fresh archive and installer, this time from my locally hosted site. I need to log into the staging site's FTP and upload these new files. Out of curiosity, this might be a good chance to see what happens if I don't delete the rest of the content in `public`.

Awesomely enough, the installer notifies me that there are other files, and everything will be overwritten if I proceed. It even says "It is recommended you only overwrite WordPress sites that have no value, such as a temporary staging site" so, perfect! It does look like anything that was already installed that is not included in the archive will remain, so to keep things cleaner, I will go ahead and empty out the folder after all.

The remote database worked on the first try, and the install went off without a hitch. After logging in and cleaning up the installer files, the staging site looks identical to my local site, tag line change and all. What a relief!

{% include blog-img.html source="/assets/images/posts/2021/05/31/stagingsite.png" alt="The text '--STAGING--' has been added to the main site tagline in the homepage." %}

- [x] Make a change to the site locally and push the changes live to our staging site and test

That's two out of three, and it's still Monday! Although it's getting late, so I should wrap things up for now. As my spouse has wisely framed it,

>“'Your best' is how much you can do while sustaining your mental health. Anything more is overworking yourself.”

I feel confident that I should be able to knock out number three easily tomorrow, but I want to add a caveat - modifying postings in the database in local but NOT pushing those changes to the production site. This will be critical when we're dealing with real users.

Well, I said that, but digging into things the next day, I don't really know how intertwined the database is with the frontend. Looking through Duplicator's options, I don't see a way to _not_ import a database, only choose which which tables to pull over. I also don't see anything in the official docs or support threads about how one would go about this, or if this even makes sense.

Thinking through things, I don't know if WordPress treats standard pages all that differently from the job postings. Editing job postings opens the editor, same as any post, and it would make sense that data pushed from the admin panel isn't really doing anything like... modifying the HTML, it's almost certainly being referenced and then templated into the pages. Most of what I've read about so far has mentioned either theme or plugin development, but nothing about configuring the actual site content itself, so perhaps I've been looking at this from a wrong (or certainly at least ignorant) direction.

For the time being, I can upload and deploy changes to different stages, so that's pretty good. I'll call it quits with the pipeline stuff for now to focus on integrating this new plugin.

I had a quick sync meeting with the client to establish some deliverables. We're aiming to have a functional demo of the new plugin live by the end of next week, and then a largely functional and styled site live by the first of July.

To start on the plugin, I set out to start up a totally fresh WordPress site to install only the job board plugin and nothing else. For whatever reason, however, Local by Flywheel hangs when "starting up site services" and never completes! I've tried a few variations with no luck, and I'm starting to wonder if I'll have to go the Docker route immediately after all. Hopefully letting it run overnight will yield some results.

Again, no luck! I'm really striking out now. I've been feeling conflicted about how a lot of this has gone, so I reached out to talk to a few different communities to get ideas for how to tackle what I'm doing and if I'm spinning my wheels.

Thankfully, I managed to have a few very helpful discussions with people, and feel a bit better! One person confirmed my suspicion that modifying page content is stored in the database, so replacing the database would also impact normal pages. They said that the safest way to handle content changes to a production site was to copy and paste from my staging site and leave the database alone as much as possible to preserve the live user data. This workflow would look like the following:

1) Backup Production site  
2) Duplicate Production to Staging  
3) Perform a simple change to site content and test  
4) Manually recreate change to Production after confirmed  
5) Repeat steps 3 and 4 as many times as needed to complete the work  

If I do need to import the database from staging for whatever reason, it should be in the following sequence:

1) Take Production down for maintenance to prevent new user data from being generated  
2) Backup Production site  
3) Duplicate Production to Local, modify files locally  
4) Duplicate to Staging, verify changes  
5) Duplicate to Production, verify changes  

It's a little gross, but supposedly this is an issue with other CMS as well! If I had to guess, I would think that this could be one of the big benefits of using WordPress as a headless CMS, so you can isolate your core site (and development) from whatever content you are hosting, and more freely make and track changes.

Overall, I feel more confident in this approach. It will take some discipline to keep staging changes small and copy things over to Production, but ideally most of the broad strokes of changes will be made within the next month!

---

Getting away for a few days from Thursday to Sunday was amazing, and much needed. It's been so long since my spouse and I had time where we didn't have anything in our environment that needed to be addressed or was stressing us out. We spent nearly 3 days just chatting, resting, playing, and exploring - it was the best!

The mental buzzing from the stress of trying to keep everything together lessened and the tension drained from my neck and shoulders. You can tell that we are both worn out, as we ended up sleeping over 10 hours a day, and I still feel like I could sleep more.

Returning home, while we were greeted by all our home comforts, we were also greeted with multiple new issues and new pests that had invaded the space while we were gone, so that sobered us up from the delights of vacation pretty quickly. It's Labor Day as I write this, and we've spent the time since we returned yesterday cleaning, researching house issues, calling contractors, doing yard work, and making plans with family for help.

Coming back to so many issues is discouraging, and certainly has my head less clear to focus on the site than hoped, but I'm going to charge forward to try and get things back on schedule.

---

With Local by Flywheel still locking up when generating fresh sites, I turned to Docker again. While it may require learning a lot more now, hopefully it'll also be more dependable and similarly be more helpful in the long run.

Referencing back to a video from the last blog, ["Fast & Easy Docker Container For Local WordPress Development"](https://www.youtube.com/watch?v=tQBMM1TFcfA), I pulled up the Docker image repository, [wordpress-nginx-docker-compose]({{page.references[5]}}), to dig a little deeper. It looks like things are pretty different from how they were in the YouTube video, but the documentation for this repository is great and they've provided templates to get up and running.

And the rabbit hole begins! One of the prerequisites is [mkcert](https://github.com/FiloSottile/mkcert) to generate the SSL, and it looks like mkcert needs to be installed with [Chocolatey]({{page.references[6]}}), which looks like a kind of package manager for Windows, of sorts. It looks like they have tons of training information, but I don't want to go too far off the tracks just getting a dependency installed, so I followed the instructions for installing with PowerShell and got Chocolately installed right from VS Code. Getting mkcert installed next was an easy:

```bash
choco install mkcert
```

With that loaded in and running, I set about configuring my Docker and WordPress `.env` files per the readme. It looks like there is some support for multiple development environments, so I'll look into that more later.

A moment on this, I think probably the right approach for now is to leave production alone, get the new plugin running locally, and fully duplicate to staging. Once things are to a good place with the new plugin, I can duplicate staging over to production, and start using the lifecycle pattern outlined above.

Running the script included from the GitHub repo failed when trying to generate the scripts, but following along with the commands manually worked like a charm, establishing a local certificate authority, generating the keys, and adding the entry to my `hosts` file.

Now - the moment of truth: `docker-compose run composer create-project`

So far so good, the container was created successfully. With `docker-compose up`, I'm able to go to `https://silverisgold.local/` in my browser and see the site as well as a nice SSL lock icon in Chrome! To test that data is persisting between runs, I created a test post, `docker-compose`'d down, dumped the cache and refreshed the page, and booted the container back up again.

Still there! Okay, I know I've read things about updating themes and plugins being weird with local development, and that should be where wp-cli comes in. Using `docker exec -it silverisgold-wordpress bash` I could access the terminal.

This post is long enough already, but now I'm struggling to figure out how to use wp-cli. When I try to update plugins, I get an error that I'm performing the update as [root](https://make.wordpress.org/cli/handbook/guides/common-issues/#error-yikes-it-looks-like-youre-running-this-as-root), but when I try to update as a user, it says the user doesn't exist. This has lead to yet another spiral of new information and some open-ended questions in chat, and me needing to rethink how I approach this.

I'm going to end this blog here and pick it back up later. There are only 2 more days to have the new plugin functional, and with how things have gone, I might just stitch it into the staging site and hope for the best while I chase these new problems. Wish me luck!

---

### Time Breakdown

Same as last post, here's a breakdown of my time:

- 5/24
   - 4.75h
- 5/25
   - 3h
- 5/26
   - 2h
- 5/31
   - 6.5h

## Gratitude

### What is going well?

Taking time away with my spouse was great for our spirits. Being physically distant from our responsibilities helped me to be more present.

### What could be better?

I feel like I'm spinning my wheels more than I would prefer with this site, and that I'm out of my depth considering that there's a time crunch. There is a definite sense that I'm chewing through time as I dig into things such as Docker and wp-cli and all of this. Until I expand my network to include people with WordPress experience, without a clear sense of what the bigger picture looks like or how a proper WordPress site comes together, I'm not sure how else to get there but to stumble forward through things and change my mind as I go.

I realize that in a few weeks, all of this will make much more sense, and I need to just keep pushing through and learning more. Writing a blog post about "what I've learned" while feeling like I've mostly just stumbled into deeper questions is sort of awkward, but a regular occurrence when learning anything new!

## Tasklist

- [x] Get WordPress running locally
- [x] Pull down a copy of Silver is Gold and host it locally
- [x] Push up a local copy of Silver is Gold to Staging
- [x] Prep a new WP instance for the new job board plugin
- [ ] Get the new job board plugin installed and configured locally
- [ ] Push to staging