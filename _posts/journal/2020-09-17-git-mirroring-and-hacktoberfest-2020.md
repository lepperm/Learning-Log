---
layout: journal
title: "Git Mirroring and Hacktoberfest 2020"
excerpt: Gearing up for Hacktoberfest 2020, and making my GitLab and GitHub repositories share data.
author: Max Lepper
categories: [journal]
tags: [open source, hacktoberfest2020]
date: 2020-09-17 23:45:04 -0400
modified_date: 2020-09-18 13:27:04 -0400
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [general]
references: ["https://gitlab.com/neal.strobl/wsu-adventurers-guild","https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Architecture","https://www.irregular.cafe/","https://twitter.com/davidebest","https://hacktoberfest.digitalocean.com/","https://www.linkedin.com/in/nealstrobl/","https://dev.to/devteam/preptember-start-getting-ready-for-hacktoberfest-this-month-58cn","https://www.youtube.com/watch?v=vSdSFxIKy5w&feature=youtu.be","http://do.co/hf_firstpr","https://getavataaars.com/"]
timespent: 270
sleep: 380
recreation: 60
workout:
---

## Journal

Getting into web development when I did, there was some initial debate on whether I should go with GitLab or GitHub. I read many articles (many of which were over my head at the time), spoke with most of my friends, and dug around on each site. In addition to the [AGWSU]({{page.references[0]}}) project being hosted on GitLab, it seemed to make sense to go with GitLab. As time has gone on, I've gotten a much better sense for what exactly that decision entails - GitLab has great DevOps tools, but GitHub has a much deeper sense of customization and community. That missing customization and community element keeps coming up, either when wanting to grab some kind of data, or add more content to my profile, or coming across a developer site that lets me sign up with a GitHub account, but not GitLab. I realize that GitHub has been around for longer than GitLab, so a lot of that makes sense, but GitLab also seems much more laser-focused on the customer side of things. It was a bummer having to "choose" one.

But, did I actually need to "choose" at all? The inspiration eludes me now, but a few days ago, I asked my friends if there was some way to have my GitLab repositories duplicated on GitHub. This way, if someone was to only look at one account, they would still see that I'm actively pushing commits without having an empty shell plastered with "go to my GitLab." Using a script and chaining multiple Git commands were suggested - easy enough! Looking into it though, I discovered that GitLab actually natively supports "mirroring" repositories, both incoming and outgoing.

On GitHub, I first cloned the repository I wanted to mirror to generate a URL. Back in GitLab, under `Settings > Repository` in the repository and then to the section labelled `Mirroring repositories`, there is a form to create the link from the url, a key, and a direction. Success! Forcing a sync completed successfully. It was then just a matter of time to do the same for all the other repositories I wanted to mirror. The only downside to this is that I'll need to remember which account the "primary" copy is associated with, but that could just be a note in the readme. To my surprise, GitHub updated all of my stats to reflect my activity in GitLab. Activity from AGWSU won't show up in there, but I thankfully have enough going on that it doesn't stand out too much.

I do wonder if it is considered bad practice to duplicate content like this. Currently, I don't know what exactly I would do if someone made a pull request on the GitHub side, although I suppose the manual approach from the opposite direction would be the way to go. The risk of outdated, fragmented, or de-synchronized data is probably the main risk with duplication.

During [Irregular Café]({{page.references[2]}}) this morning, [David]({{page.references[3]}}) mentioned wanting to ship a software project for [Hacktoberfest 2020]({{page.references[4]}}), a month-long celebration of open source code starting on October 1st. Up until now, I have made two tiny contributions to open source projects, worked with [Neal]({{page.references[5]}}) on the [AGSWU]({{page.references[0]}}) project, and spun up a few educational solo projects. Where I currently am in my learning process, contributing more actively to open source is both extremely exciting and very intimidating, and participating in this event is too good of an educational experience to miss out!

The objective for the Hackathon is to:
> Make four or more pull requests to open source repositories tagged #hacktoberfest on GitHub

How serendipitous that I just mirrored all of my repos and got the account profile cleaned up! I do not have any projects that I could open up for contributors in my repositories right now, so I will be either do some searching for issues, or trying to join in with a team. I'm going to assume that they mean _accepted_ pull requests, as well, which may have a bit of s steep initial learning curve interacting with new teams - but that's perfect!

To get an overview of participating, the ["how to contribute"]({{page.references[7]}}) video offered up some great guidelines:

- Check the `CONTRIBUTING.md` for detailed information about the specifics of contributing
- Join the conversation
  - Look for Discord and Discourse links in repositories
  - Check for a "Discussions" tab
- Use inline commit suggestions inside pull requests for small adjustments
- Leverage GitHub stars as bookmarks
  - https://github.com/stars
- Check out the notifications tab for activities
  - The GitHub mobile app has access to these notifications, as well
- Use "saved replies" to template frequently used snippets of text for comments
- Triage roles
  - Used to assign the status and priority of issue
- Search
  - https://github.com/search, use prefixes to narrow down searches
  - #hacktoberfest, unassigned
- Fetch from upstream
  - `git remote -v`, `git pull upstream`, `git push origin master`
  - Look into `fork-sync` GitHub action

**Tags to search for:**
- Required for event: #hacktoberfest
- Find priority issues: #contributorswanted
- Check for showcased repos: #showdev

**Things to watch when contributing:**
- Check for a contributor's guide (usually `CONTRIBUTING.md`)
- Check for a Code of Conduct and review expectations
- Choose issues that are well-defined and self-contained

**Events and Social Media**
- [x] https://hacktoberfest.digitalocean.com/events/
- [x] https://twitter.com/hacktoberfest
- [x] https://discord.gg/hacktoberfest

I created a Discord account and joined the Hacktoberfest server, and so far it has been very welcoming and approachable! Their ["your first pull request" video]({{page.references[8]}}) was short and sweet, and everyone has been very pleasant in chat. I'm excited!

My core objective today was to review and begin adding to the [AGWSU Architecture documentation]({{page.references[1]}}). With Hacktoberfest on my calendar now, I would also like to try and make a plan to "ship" a functional version of the project before October 1st, so I'll sync up with Neal to get his take on if this is a reasonable goal and how we can make it happen. We can always come back and develop more features and write more documentation later, especially as I learn more and focus on becoming a better contributor.

On the architecture document itself, I'm not totally sure where to start. A few searches yielded a list of reading materials, which should hopefully give me enough perspective that I can either have an idea of where to dive in, or refined terms to go searching for. I ran out of time today, but I'll continue with this tomorrow.

**Software Architecture Documentation Reading List**
- [x] <https://gitlab.com/neal.strobl/wsu-adventurers-guild/-/wikis/Home/Technical/Architecture>
- [ ] <http://www.michael-richardson.com/processes/rup_for_sqa/core.base_rup/guidances/guidelines/software_architecture_document_F4C93435.html>
- [ ] <https://sceweb.uhcl.edu/helm/RationalUnifiedProcess/process/artifact/ar_sadoc.htm>
- [ ] <https://medium.com/@nvashanin/documentation-in-software-architecture-4f2e4159c4fc>
- [ ] <https://blog.ndepend.com/software-architecture-document-dont-need/>
- [ ] <https://www.slideshare.net/PasinduTennage/sample-software-architecture-document>
- [ ] <http://home.mastersoftwareinc.net/webtmpl/templates/a_and_d/rup_sad.htm>

Now that I have multiple social media accounts and pages, I'm feeling the pressure to come up with some kind of avatar. [Avataaars]({{page.references[9]}}) ended up being the for-now winner, with simple and cheerful options. The image got touched up slightly in Paint.net with a few variants, and then I pushed it live on everything. Coming up with a proper long-term avatar is another task for the backlog.

Today and yesterday were jam-packed with activity, but nothing to record time towards. I may formalize my to-sort skill into more of a generic learning/working category and add some time back into these entries, as they've definitely kept my whole day busy!

## Tasklist

- [ ] <span title="Task to be added to next entry">=></span> Review and begin updates of AGWSU architecture documents
- [x] Discuss a target launch for AGWSU
- [x] Mirror all active GitLab repositories to GitHub
- [x] Make a Twitter account (@MaxLepper)
  - [x] Make a matching Discord account