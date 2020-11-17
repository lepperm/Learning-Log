---
layout: journal
title: "User Experience for Notifications and Comments"
excerpt: Conducting a poll to improve the user experience for post notifications, and exploring selectively adding Disqus to posts.
author: Max Lepper
categories: [journal]
tags: [javascript,service workers,disqus]
date: 2020-09-14 23:18:51 -0400
modified_date:
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [javascript,html]
references: ["https://shopify.github.io/liquid/basics/truthy-and-falsy/","https://onesignal.com/webpush"]
timespent: 335
sleep: 380
recreation: 60
workout:
---

## Journal

I said I was trudging too far into the weeds, but here we go fiddling with things further! While doing some before-sleep searches and testing on the PWA end, I both noticed that I could only initiate the notification request when the service worker indicated that there was an update, and never again, even if I simply ignored the notification request (not deny) the first time. For testing, I added a link to manually trigger the notification request in the footer, and that works like a charm.

I know that I have said this blog is primarily for my future self, but my Google Analytics account is showing more traffic than I anticipated (and it's not just from me), so it's a ripe testing ground for driving user engagement and experience.

Truth be told, on-demand permissions may be better user experience than automatic notification requests, since it's inherently opt-in instead of forced on new users before they get a chance to read the blog. While searching last night, I encountered a _lot_ of blogs about how "web notifications are the worst thing in the world"...so it would make sense that I'd stumble across all these _after_ I had already implemented it - my apologies to any active readers. In response, I've polled some friends in a Discord server to get some feedback and help decide what to do, as I am conflicted. On one hand, no initial prompt on loading the page may mean that most people will never know that getting notifications is possible, even if they would want them. Alternatively, seeing the prompt may make people who would normally want to engage with the content irritated or click away, or outright refuse notifications before reading any content.

Here are the final results from the poll and in-person surveys:

| Poll Value  | I enjoy them | I am okay with being notified and occasionally opt in | I would prefer to opt-in intentionally instead of when first visiting a site | No preference / what's this? | The are the bane of the web |
| :---------: | :----------: | :---------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------: | :-------------------------: |
| Total Votes | -            | -                                                     | 5                                                                            | -                            | 2                           |

Two people mentioned that they would expect links related to subscribing / notifying to appear in the footer (same as my hunch!), and one person mentioned tucking notifications in a user account, and pretty much everyone said that they generally don't like them. I do not currently have user accounts and I don't know if the traffic on here would ever get to that kind of level (or overhead), but it does bring up an interesting point - content delivery preferences could be all over the place for different people. I'm sure that there's some marketing platform that has a solution for this already, but having a way for users to fine-tune whether they receive web notifications, emails, less frequent digest emails, maybe even SMS, or who knows what else, would probably be the "best" way to handle this.

My personal vote would also be for the "opt-in" approach. While I will keep the poll open through the day, I may go ahead and modify the current behavior to reflect this. It's simple enough to add back in, should I get enough feedback to support automatic prompting.

For now, I think I will leave it at local notifications. In the future, I cam curious to check out [OneSignal]({{page.references[1]}}). The free account seems like it would be more than sufficient for nearly any of my projects, and it does have a custom code option. It's not as flashy as building one myself, but after digging through the various APIs and calls, I have a bit further to go first. This was already far too deep in the weeds, and now is a great time to waddle back out.

Regarding user-based content delivery management, this is probably the part of the blog where I'd ask the readers to leave any suggestions or resources that they're aware of in the comment section, but at the time of writing, there _is_ no comment section. It's built into the Minima Jekyll theme, however I chose to not enable it initially since this was so personally-focused. That being said, I don't think that there is anything preventing me from selectively enabling or disabling a comment section on a post-by-post basis, and I may go ahead and try enabling comments just for this post.

Enabling Disqus was indeed very simple, and you should see it at the bottom of this post now, if you're on my site and I haven't changed it by the time you've read this log. One thing that I was disappointed about was that free accounts have mandatory ads, and I would far prefer this site to be as ad-free as is possible. I added an extra disclaimer above the comment section. There doesn't seem to be any vetting control over ads, and with it being an election season in the USA...lets just say I just don't generally have high confidence that any ads served by any platform will be of high quality. Rooting through the configuration options, I tried to remove as much additional unsavory configuration as possible - no extra advertising targeting, no automatic affiliate links, and the minimum number of ads. Yikes, I'm glad that I dug around!

The default Jekyll behavior is that the Disqus comments appear on every post under two conditions:

1. You have specified a value for site.disqus.shortname in your `_config.yml` file
2. You have NOT specified `comments: false` in your post Front Matter

This means that, if a value for `comments:` isn't specified at all, the comments are injected into the post. This is because the [true/false determination for Liquid]({{page.references[0]}}) (one of the templating languages powering Jekyll) is that:

>All values in Liquid are truthy except `nil` and `false`.

This isn't the behavior that I want, though - all posts should be comment-free unless specified otherwise. To fix this, I changed the conditional wrapping the comment block inside `disqus_comments.html` from {% raw %}`{% if page.comments != false %}` to `{% if page.comments == true %}`{% endraw %}, meaning that the `comments` value has to BOTH be declared in the Front Matter _and_ set to a value of true for the comments to be injected.

Reading through the FAQ, I did see the following:

>Are all sites required to run ads?
>
>For personal blogs, .edu sites, nonprofits, and **small sites that do not run other advertising**, Disqus advertising is optional. If you are a small, non-commercial site, you can self identify for a free subscription to our Plus plan.

Fantastic! I sent in a message to appeal for a free upgrade. The presence or lack of ads below will let you know how that appeal went.

Edit: Six hours passed before they all went home for the day, so...maybe just use an ad blocker. Fingers crossed that they get back to me eventually. Please let me know in the [comments](#disqus_thread) below if you'd prefer me to disable the comments section, haha!

I quickly implemented an "all references" list, which was tucked away into Search. In the current form...I am not sure how helpful it is, but it will be faster for me to search the page to find old references. If I eventually implement some kind of advanced search refinement, it would be nice to selectively limit references to only posts that contain the specified criteria. I do not currently feel that there is enough content on this site now for a feature like that - maybe if I get a year's worth of posts under my belt. This feature has been banished to the brainstorming section of [the to-do list]({{site.baseurl}}/todo/#improvements).

The rest of the evening got away from me, between chores and dinner. Tomorrow, I want to finish my FCC tribute project and look into AGWSU.

## Tasklist

- [x] <span title="Task carried over from previous day">=X</span> Add some way to see a list of all references used across the entire site
- [x] Footer notification opt-in link
- [ ] <span title="Task to be added to next entry">=></span> Finish FCC tribute project and submit
- [ ] <span title="Task to be added to next entry">=></span> Follow up on AGWSU status