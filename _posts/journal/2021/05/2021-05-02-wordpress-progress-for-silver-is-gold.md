---
layout: journal
title: "WordPress Progress for Silver is Gold"
excerpt: Slowly getting the hang of navigating and using WordPress, and gaining experience developing a product with a great client!
author: Max Lepper
categories: [journal]
tags: [WordPress]
date: 2021-05-02 23:02:41 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [wordpress]
references: ["https://openweathermap.org/api/one-call-api"]
timespent: 1455
sleep: 0
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

After sleeping on it the night after my last post, I decided to try something drastic. Using a plugin called WP Reset, I completely reset the site to a (mostly) blank canvas. Now that I have a slightly better idea of what's going on, I'll take things one step at a time and focus on functionality.

First up was restoring the "coming soon" page. I had exported my settings prior to resetting, but wanted to see if I could find a plugin that would give me a bit more control over the landing page design. Two plugins with pretty aggressively restricted premium features later... I gave up and returned to my original plugin and re-imported my settings. Worth a shot!

Next up was determining which site builder engine to go with. I had played around with Elementor a little before resetting, and while it seemed powerful, much of it was again locked behind a paywall. Gutenberg, on the other hand, looks to be the "native" option. While reading up on comparisons, multiple articles claimed it was quicker, lighter, and full-featured, and that there were many free options for extending the functionality.

Honestly, if I had one core takeaway from using WordPress so far, it's "bring a budget." It seems that you can't type anything in the plugin search bar without tripping over $40 yearly subscription plugins!

This makes sense - WordPress seems like a great platform to develop fully-featured sites that can be run by people who won't have to write a line of code, and that's opening up the consumer market drastically. Once you're familiar with plugins in the ecosystem, I could see being able to launch a site that could generate revenue comfortably in a single day. That'd make plugins a prime area for developers to try and get a cut of that business, and with so many paid plugins already on the market, ther be little need to justify charging for them. But I digress!

This time around, I grabbed the Neve theme, as it looks like it has a decent selection of themes that are available for multiple site builder plugins. Ideally, this would mean that maybe it'd be easier to switch things up in the future, if needed. WP Job Manager will be the underlying engine for the job board again, as the free offering seems to be enough to get something that can show the general functionality, and expandability and support seems to be solid (although the plugins add up extremely quickly - at least $100 to start generating revenue).

Immediately after writing this, though, I decided to perform more exhaustive research. I've summarized my notes below:

### Job Board Plugins

<https://wordpress.org/plugins/js-jobs/>
- I personally like the report dashboards and graphs, because that's just the kind of person I am.
- Sounds like there are some mixed reviews, warnings of serious bugs that require deep understanding of WP to resolve. May be too much to try and tackle with my current skill level.

<https://wpjobboard.net/>
- Seems to be a little bit of everything in a single package.
- Nice looking backend admin panel.
- Independent employer and candidate sign-ups! This was something I was trying to figure out with WP Job Manager and looked like it'd require a separate (paid) plugin.
- Great job posting flow!
- Was unable to go through the entire flow for a paid posting, unsure if true error or disabled on demo site.
- Easy contact forms in both directions, doesn't hide info away. Being the matchmaker and not controlling the communication is our goal with this site.
- Employer panel, easy to review applications with printable summary pages.
- Candidate panel, profile completion, alerts, memberships, bookmarks - this looks awesome!
- Company directory with all posted opportunities.
- Multiple options for closing out opportunities.
- Looks great on default themes, supposedly inherits theme colors gracefully (which has been an issue).

<https://wordpress.org/plugins/simple-job-board/>
- Looks okay, although the demo site looks like maybe it was repurposed from a dating site theme?? Pretty sure marital status isn't a trait typically associated with a company.
- Has many positive reviews.
- Struggling to see much benefit feature-wise over WP Job Board or WP Job Manager.

Honestly, I like WP Job Board a whole heck of a lot. It seems incredibly full-featured for a better overall price ($99) than WP Job Manager (free, but minimum $99 to generate revenue).

The biggest challenge with **any** plugin is probably going to be the word "job," which was one of the bigger pieces of feedback from my sync meeting with the client on 4/26. WP Job Board does specifically mention that it provides access to the source code and documentation, so maybe it would also be a bit easier to modify. It also looks like we'd get assistance with the paid license, which could help point me in the right direction and not break things (too much).

### Accessibility Plugins

I know that there is little substitution for manually-configured and focused accessibility efforts. That being said, I haven't yet dug into accessibility and ADA compliance with the attention and understanding that it requires. While I was researching job board plugins, I encountered a few for accessibility, and decided to compile some notes for future reference as well. If I eventually add some accessibility plugins, my goal would be to supplement intentional efforts and to better learn what things to look out for.

<https://wordpress.org/plugins/pojo-accessibility/>
- Toolbar to modify user experience on the site.
- One user comments that using the toolbar itself poses an accessibility issue, as it doesn't inform users about the expanded state.

<https://wordpress.org/plugins/wp-accessibility/>
- Sounds like a good tool to help fix some basic accessibility issues.

<https://wordpress.org/plugins/wp-accessibility-helper/>
- Looks pretty nice and appears to work well on demo site.
- Unsure exactly what's free and what's paid.

<https://wordpress.org/plugins/accessible-poetry/>
- Reviews suggest this is one of the better toolbar options.
- Has not been updated in a while, out of support.
- No demo.

<https://wordpress.org/plugins/wp-ada-compliance-check-basic/>
- Free version does a content check for general compliance issues, does not check theme.
- May be a good learning tool for me.

After looking, I'm unsure how I feel about toolbar-based accessibility plugins, and I might need to do more external research. Definitely the compliance check would be great to help make me more aware of where issues may be located. Sooner or later, it'd be great to specifically dig into proper accessibility and learn how to use the tools.

### Custom CSS in WordPress Themes

The branding board for our site is a dark theme with white text, so I made adjustments through the theme customization as best as I could. It looks like the components provided by WP Job Manager appeared to have hard-coded color values when inspected, but I'm unsure if these colors were maybe coming through the Neve theme I had selected. Regardless, the colors appearing in the forms were inaccessible, and I could not seem to get them to cooperate normally.

There is a Custom CSS option for the page, and it looked like WP Forms had already injected a bit of CSS. Playing around with this a little, it seems to inject CSS rules globally from the one field. If that's the case, being precise will be important when it comes to making sure I don't mess something up somewhere else on the site. With that in mind, I created some rules using class names and some specificity, and tweaked the form colors so that things were somewhat more visible. I had some issues with some fields, most notably multi-select fields, where I couldn't figure out what to modify whatsoever.

The biggest issue with WP Job Manager so far is that the client wants to avoid the term "job," as these could be varied types of opportunities, such as short-term help, consulting, reviewing business objectives, research roles, and so forth. With a little CSS, I was able to "replace" the text in labels for new postings:

```css
.job-manager-form .fieldset-job_title label {
  position: absolute;
  visibility: hidden;
}
.job-manager-form .fieldset-job_title label:before {
  content: "Role title";
  visibility: visible;
}
```

This does make for a half dozen pairs of label replacements, which isn't great, but is a quick patch until I figure out how to dig deeper. With the way buttons are set up, it doesn't seem that I can hack in a text replacement. I hope that this doesn't create wild complications for screen readers, as I need to learn how to test for that.

We had some additional fields to add to the opportunity postings, and I did find a free plugin that allows for additional custom fields (aptly named "Custom Field For WP Job Manager"). I added the required fields plus a few open-ended fields that I felt might spark productive discussion during my client's stakeholder meeting. I also added utilities for cache and optimization and ran some Lighthouse tests to see how response times were looking:

{% include blog-img.html source="/assets/images/posts/2021/05/02/silverisgold_lighthouse.png" alt="Lighthouse test results showing scores of 85 for performance, 80 for accessibility, 100 for best practices, and 85 for SEO." %}

I woke up the next morning sick with a terrible fever and hardly coherent. Somehow, I managed to call off work and immediately conked back out _hard_. Unfortunately, I slept through all of the emails and a text from the client that came in an hour later! 😱 I managed to bolt awake at 10:33 AM and literally dragged myself over to the computer to follow up with the client, sending out password resets, disabling "coming soon" mode, and sending all the information that seemed relevant. The stakeholder meeting had already started, though, and I was too late. Darn! I know that I can't help being sick necessarily, but this was still very disappointing, as I was eager both to get more specific feedback about the project and to make a good impression with the first real demo of my work.

Thankfully, my one-on-one demo with the client this weekend went well, and they were engaging positively with my changes and offering great feedback and clarification on wording. We discussed the business objectives and the motivations for both businesses and talent, as well as how to achieve the monetization objectives. I have some great notes, and probably I should start creating some kind of documentation distilling these meeting notes into one knowledge base.

There will be another demo in two weeks, and I got clearance to switch to WP Job Board as our primary job board plugin. To move forward, I think the next step is to switch from making changes directly to the live site to making changes on my local machine and _then_ pushing those changes live. I'll need to research this, as off the top of my head, I don't know how exporting and importing backups would impact data that could be generated by users or moderators once the site is live, or what the typical workflow would be. In the meantime, the site that we have up now has some good bones to help illustrate what we're going for, and I'll adjust the wording per client feedback.

### Renovation Updates

The house repairs front has been _relentless_! Everyone I've spoken with has told me to "get used to it" so it sounds like this is a common experience for new homeowners, haha. My big push this past week has been focused on our main bathroom.

The shower cold water wasn't working and the fan blower was burnt out and disconnected, so it's unravelled into this sprawling multi-step process of adding roof vents, adding ducting, creating access points in the attic, getting a custom-made blower motor since we'd have to modify the roof structure to accommodate a modern ceiling unit, fixing the electrical, and on and on and on. I'm learning a ton and getting more comfortable with digging into the house, but it'd be nice to actually check something off the list instead of adding two or three more steps every time I mark one step off! Thankfully, we were able to get the balancing check valve loose and replaced in the shower _without_ having to drill and extract it, which is what I was anticipating needing to do with how things have gone so far!

I know we'll get there, and in terms of percent complete-ness, the house it honestly most of the way there! The remaining tasks are either high-complexity items with a good deal of unknowns we are slowly solving, logistics problems (like how to rebuild our closets to get items out of boxes and into functional storage), or large projects that will just take time and materials (like acquiring, painting, and installing trim throughout the entire house).

We did manage to knock out all the tasks in the main bathroom this week, thank goodness! Now I can work on fixing issues in the other bathroom with less fear of having zero functional showers, haha. I was able to add ducts in the attic and get everything hooked and sealed up, so that was a neat experience, and I believe that should resolve our attic issues for now. We also acquired most of the tools and equipment needed to tackle other outstanding issues, and just need to coordinate a few more resources that are far too big for our tiny cars.

Our yard is overrun with weeds, so there's been lots of gardening education on the agenda. We're slowly making headway in that battle, but mostly it has been fascinating to see how the whole yard changes and responds to what we do and the weather. I've never had much of a "green thumb" so the fact that we've been able to keep pansies alive for a few weeks has me feeling excited and hopeful! When there's some more bandwidth, we'd love to try growing some herbs and vegetables. The data-centric part of me grabbed a free key for the [OpenWeatherMap API]({{page.references[0]}}) to mess around with and call through HomeAssistant to track rainfall for significant rain events, and someday I'd love to get it to automatically determine our watering schedule for us!

### Time Breakdown

That ended up being a decent chunk of time that I was able to devote to the site this week! It feels good being able to push live something that looks at least on-track with what the client has asked. For anyone curious about how the hours were broken out, here you go:

- 4/25
   - 5.5h
- 4/26
   - 6.5h
- 4/27
   - 3h
- 4/28
   - 5.5h
- 4/29
   - 1.75h
- 5/1
   - 2h

## Gratitude

### What is going well?

Making some wins on the house is a HUGE relief! I'm feeling increasingly comfortable diving into repairs around the house, and a few of the contractors who have come by have been very friendly and offered valuable tips. Working on the yard with my spouse has become a great way for us to get some sunshine and exercise while making progress on the exterior, and it's something we enjoy tackling together specifically.

I'm glad that I was able to rebuild the site and have a good discussion with the client. They are very enthusiastic and patient, and their positivity is a welcome and appreciated energy in my professional life. I notice that I am mentally conditioned to receive a certain type of negative feedback, and it's... almost jarring to not have experienced that during this project so far. Hopefully that continues to be the case! The productive and positive communication has become a motivator, and I'm sure it seems obvious but I'm still processing it, as it's a very different experience from what I'm used to.

### What could be better?

I had some late nights this past week, and that probably contributed to my feeling sick on Thursday. I'm feeling a lot of self-imposed pressure to show results quickly, but making myself sick and messing up the stakeholder demo is a direct example of why I should pace myself and prioritize consistent self-care.

## Tasklist

- [x] Reset and rebuild the site to be more functional and visually similar to the client's branding