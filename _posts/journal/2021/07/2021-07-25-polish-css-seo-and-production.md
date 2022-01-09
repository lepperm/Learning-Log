---
layout: journal
title: "Polish, CSS, SEO, and Production"
excerpt: Wrapping up tasks and tackling site issues and design changes as we begin the soft launch of Silver is Gold!
author: Max Lepper
categories: [journal]
tags: [wordpress,css,seo,"Silver is Gold"]
date: 2021-07-25 17:51:50 -0400
modified_date: 2022-01-08 20:39:48 -0400
published: true
status: finished
confidence: log
context: true
comments: true
skills: [wordpress,css,seo]
references: ["https://www.silverisgold.org/","https://www.udemy.com/course/whiteboard-seo/","https://rankmath.com/kb/score-100-in-tests/","https://sproutsocial.com/insights/social-media-image-sizes-guide/","https://www.w3schools.com/cssref/trysel.asp","https://neumorphism.io/","https://webaim.org/resources/evalquickref/","https://wave.webaim.org/","https://material-ui.com/customization/breakpoints/","https://gist.github.com/MichaelCurrin/f8d908596276bdbb2044f04c352cb7c7","https://undsgn.com/jpg-vs-png/"]
timespent: 4260
---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

Hey everyone! It's been a bit longer than usual since the last post, and that's because the client site is live! 🎉🥳🎊 I definitely haven't written about everything here, but most of the work that didn't make it in has been related to adjusting content, addressing CSS issues, tweaking and studying SEO, and reconfiguring plugins.

In addition, this post marks this blog breaking the 100k words milestone!! 🤯 And right before the one year anniversary, no less. I feel like calling it an exciting year is an understatement - definitely not what I expected by any means, but I'm incredibly grateful for the journey and friends I've made along the way so far!

Related, as we go on one year since the first post was made on this blog, I've been thinking a lot about where I am and where I want to go. If you [follow me on Twitter](https://twitter.com/intent/user?screen_name=MaxLepper), you may have seen a thread on the topic.

My current steps are to continue with the site launch and hopefully get things to a stable point where I can maybe take a week or two to turn my brain off, aside from maybe a little maintenance here and there. After that, I have big plans for both this blog and a completely redesigned portfolio.

And many many thanks to you, dear reader, for popping in to see what I'm up to - I appreciate you! Anytime you want to chat with me directly, please don't hesitate to tap that chat widget down in the lower-right corner. I'd be happy to say hello!

Now, on to the entry:

---

We're inching closer to having all of the team information in our About page over on [Silver is Gold]({{page.references[0]}}). For the team profile pictures, we're going with black and white photos, and it's been a fun creative exercise trying to match the "feel" of the images as I adjust them into greyscale and mess with the levels.

With most of site content at a good place, I reached out to a friend for help with the general site UX and specifically the palette I've been using, as I've been going back-and-forth on if I need to shift around the greys I'm using. Fortunately, they gave the whole site an audit!

Many of the changes were to make UI elements more consistent and predictable, and to add better empty space. Very quickly, the site is looking far more polished! ✨ Not only that, but it feels like I have a slightly better "sense" for some of the things they called attention to, now that I know a bit better what to look for and why to make the changes.

With some direction behind me, I set out to spend a good bit of time adjusting padding, margins, offsets, and colors. I also went digging around deeper inside the customization controls for the theme. It's not always intuitive how you select things in WordPress, I'm finding. Getting the hang of things, though, I modified the navigation bar behavior and appearance, added padding to the footer, adjusted the footer elements, configured a few subtle CSS animations, and made some other minor tweaks.

While trying to fix CSS errors, I ran into a situation where I needed to use higher specificity to hit the right elements. W3schools has [an interactive tool]({{page.references[4]}}) that was helpful to understand how targeted selectors should work, which helped my new CSS rules win. I also read about how competing `!important` tags will win out depending on specificity, so using everything I had learned, I was also finally able to target and hide the now-triplicate big red bar "flash errors" that were appearing on certain pages, and fix some dropdown field issues we were seeing between Firefox and Chrome.

Next up were some form validation highlight errors, and testing revealed a breadcrumb trail of many other small CSS issues all around the site, so I started going page-by-page. The buttons on the landing page call-to-action were now finally bottom-aligned by using `grid` in the parent element and `align-self: flex-end;` on the buttons. That detail alone make a big difference to how the homepage feels.

IE is broken in a bad way. If I recall, I believe it doesn't support CSS variables, which explains how the coloring breaks down, however all of the general components seem to be in about the right place. It looks like it doesn't like the SVG tags, and it's imploded based on something that Autoptimize has done while minimizing the HTML. Otherwise, things seem okay, it's just a little difficult to use.

I was able to get the HTML to stop breaking after a few adjustments to my Autoptimize settings, and implemented a plugin to alert users that their experience on IE may be diminished, and to switch browsers if possible. I suspect that, with older individuals being the target demographic for this site, there may be more people looking to access the site through Internet Explorer than the larger population sampling in general, so this does have me a bit concerned. I definitely would prefer the site to at least be legible and usable on all browsers, even if performance is slightly diminished in IE. This may be a challenge for after launch, or after I get through that CSS course, although, we're rapidly approaching the official end of life for IE, so this may be a moot issue before much longer. (Edit: I mentioned all of this to the client and they agreed to leave it be and focus on higher value tasks.)

The "Additional CSS" section has gotten quite long, so it was a good opportunity to document, sort, and group my rules into more logical sections. There were some rules I could safely remove, and all component-level CSS was stripped out of the page builder elements in favor of handling everything inside the singular CSS document, as flipping back and forth was causing more trouble than it was worth.

I also wanted to standardize my media query breaks, and set out to do so using [Material UI's breakpoints values]({{page.references[8]}}) as a reference:

```raw
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
```

This not only gave me the option for cleaner and more understandable classes, but also helped to simplify some of my rules even further.

After all of that testing and tweaking, I decided to treat myself by creating a [membership purchase card replacement](https://www.silverisgold.org/employer-membership-pricing/) for fun, using a tool I had recently discovered called [Neumorphism.io]({{page.references[5]}}). The effect is subtle, but I think they turned out nice!

We've needed to expand on phrase replacement, as there are still references to words like "job" and "resume" in the dashboard, which is undesirable for launch. It looks like I can only do full string replacement with the free "Say What?" plugin, so anything that references a name, or number, or changes as the user interacts ends up being untouchable to me. All things considered, the year license for the pro version is very reasonable, so I'll consider proposing that pathway to the client. Ultimately, it's a fairly minor detail, UNLESS the inconsistent wording would cheapen the brand, and that's the position I suspect they'll take.

And I was exactly correct! Moving forward with the pro account, string discovery was able to accurately target the phrases I needed, and I was able to make quick work of getting all instances replaced appropriately.

When it comes to the SEO settings, I'm feeling pretty clueless about keywords. Someone recommended [Moz's SEO Training Course]({{page.references[1]}}) as a good free option over on Udemy. I have an on-site product launch for a customer in my day job coming up soon, so a few hours in the car sounds like a great time to work through this. It looks like it's a collection of YouTube videos, though, so I'd be curious to see just how helpful it is.

**EDIT**: Hello from the future! I think that, if you already know how to _perform_ SEO and understand some of the vocabulary, Moz's course seems to do a great job explaining the "why" and approach to some SEO patterns. Some of the videos are over five years old, though, so some of the information might be outdated ancient history now. For me personally, it helped me get into a better headspace about how I view and try to utilize SEO for sites in general, and absolutely has me plotting on how to rework my portfolio and Learning Log (such as, Learning Log should live at a subpage rather than a subdomain on my portfolio, so that both sites benefit from backlinks).

I mentioned in the last blog, but I had picked up RankMath SEO as our SEO plugin, as they make the process seem more approachable while supplying a ton of learning materials. One of the earlier pages I referenced was about [how to score 100 in the plugin]({{page.references[2]}}), and shortly after learned about pillar pages, structuring content, and how to expose links for crawlers. The plugin generates sitemaps, which I'll tuck into the footer and submit to search engines for verification and crawling when we go live.

RankMath also helps configure how social media posts will look, so referencing a list of [social media image sizes]({{page.references[3]}}), I created some assets for the media library to use. We're anticipating having a new team member join us with experience in marketing, social media, and SEO, so it will be exciting to hopefully learn a lot from them.

Out of curiosity, I conducted an [accessibility audit]({{page.references[6]}}) using [Wave's online tool]({{page.references[7]}}). Things aren't great right now, and definitely need to improve. Some things that I thought should be alright are reporting as problems, so I'll need to do some digging. Part of the issue appears to be coming from my theme, as manually checking color contrast between the background and text passes fine, yet the tool reports an error. I have seen accessibility gurus cautioning against relying on tools for, I'd suspect, this very reason, and emphasizing learning the guidelines properly.

Nearly ready to go to production, I had a sync meeting with the client. As we were talking through things, it sounds like there were discussions among the team, and not only did some of the branding need to be overhauled, but there were also new impactful changes to key areas of the site, like how the search pages are structured and what people search for.

Truthfully, I was a bit winded after that meeting. After pushing myself hard for the past few days and burning the candle at both ends, I suddenly found myself with all kinds of new fires to put out - and fast.

The most visible immediate change was the homepage, which was getting a complete facelift above the fold. The fancy responsive tagline, owl animation, and logo block were gone. In that space was instead going to be a large hero graphic with the tagline underneath.

Our illustrator had some rough sketches, so cropping and cleaning up those images, I was able to use them as placeholders. I wrestled with the WordPress Image and Cover blocks for longer than I care to admit, along with setting backgrounds, but nothing would perform quite like how I wanted.

Talking with a friend, they recommended that I reference my time assisting with [AGWSU](https://agwsu.org/). On AGWSU, the hero image is responsive and resizes into pre-defined breaks using media queries, similar to what I had configured while working on my "Additional CSS" section. Using these configured ranges (like xs-sm, sm-md, etc), we can force the hero image to a specific height at that screen size. Fast forward, and here's how that works out:

Please forgive the `!important`s - the theme I'm using as the base doesn't take too kindly to my meddling. 🤠

```css
/* ---- Homepage Hero ---- */

/* Homepage hero image */
.homepage-hero-wrapper picture img {
  object-position: left center !important;
  object-fit: cover;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (max-width: 600px){
  /* Homepage hero image */
  .homepage-hero-wrapper picture img {
    height: 250px !important;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  /* Homepage hero image */
  .homepage-hero-wrapper picture img {
    height: 375px !important;
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  /* Homepage hero image */
  .homepage-hero-wrapper picture img {
    height: 475px !important;
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  /* Homepage hero image */
  .homepage-hero-wrapper picture img {
    height: 675px !important;
  }
}

@media (min-width: 1921px) {
  /* Homepage hero image */
  .homepage-hero-wrapper picture img {
    height: 1349px !important;
  }
}

/* Homepage hero tagline */
.homepage-hero-wrapper h1 {
  position: relative;
  z-index: 1;
  background-color: var(--nv-primary-accent) !important;
  margin-right: 15px;
  margin-left: 15px;
  white-space: pre-line !important;
}

/* Cleanly break hero tagline between sentences */
.homepage-hero-wrapper span {
  white-space: nowrap;
}
```

Next up was also reworking the "Who We Are" section below the homepage call to action. I tried a few different approaches using `flex` and adjusting grow and shrink properties, then rebuilding the section from scratch and using a `grid` container and media queries to keep the image square and also a good size. Try as I might, I couldn't get the image to behave properly at both wide screen resolution and on small devices just before the 600px media query kicked in and restacked things into a mobile configuration. I suspect some of this may be the size of the image itself, which is fairly low resolution with the placeholders, and probably part of WordPress and the theme trying to do too many things.

Eventually, I switched to using a Gutenburg cover block instead of an image block, setting a focal point in the vertical center and about 85% from left. This does break juuuust before we pop down to mobile configuration, but performs the best overall across browsers and devices, thanks to multiple friends jumping in on testing. Not too many users will be sliding and resizing the window and picking apart the site too closely, either - although if you're reading this, maybe you are now! 😬😅

One of the things discussed with the client along with our user flow changes was how locations impacted search and were used to group opportunities. Out of the box, the plugin has a verbatim search on locations with no relations between them. To add this, I'd need to get access to some Google maps APIs and add further configuration to the plugin.

Looking through the maps integration documentation, the plugin developers had detailed which APIs I would need to have access to and specified how to add our keys. While some of the services were free, many of them had a cost associated with them, so I set out to compile the pricing data and give the client a full report of approximately what we could expected to have to pay.

Some API calls specified a dollar range depending on which kinds of calls were made, and that data was not detailed in the plugin documentation, so best I could ultimately figure was that we'd be paying somewhere between $7 and $12 per every 1,000 calls. This being said, I'm unsure how frequently the plugin would be making these calls, and if it was initiated by users creating accounts and opportunities, or called up every time someone would want to look at a map - this would drastically impact how many calls we'd be looking for! With this information, I wanted to ping the client to get their impressions and see if this feature was a high enough value to them to justify the expense.

And I'm glad I did! Explaining that there would be a cost associated with using map for location, and with us offering essentially everything for free through the end of the year, they determined that there wasn't enough benefit to justify paying for map services at this time, especially since that was more of a minor detail.

The client explained that their longer-term objective will be to have locally-focused sites, although there are technically no restrictions based on location in the site. Best case scenario, local teams would act as community representatives and manage a local clone of the site, where they would reach out to local businesses and talent. These sites would be accessible from a parent site and then go out to places like **silverisgold.org/dayton-oh**, or similar.

We discussed possibly using subdomains, but in some of the SEO research I've done so far, it sounds like real-life testing strongly supports using subpages over subdomains. From a technical standpoint, I'm not sure what all would be involved in combining multiple separate sites and WordPress databases under the same domain, but I'll figure it out sometime in the near future.

Up until now, I had been using WPForm for newsletter sign-ups, but this requires one or multiple paid plans with a short list of newsletter services. Looking into the competition, I switched to MailPoet! Right away, it seems very polished, and has lots of great features for free up to 1,000 subscribers. It comes with a bunch of form types and templates, including automated emails, forms, pop-up windows, and banners. I created a new sign-up form to replace our footer sign-up, which was simple to drop into place, and then began working on email templates.

I ended up making targeted employer and talent onboarding emails, welcoming people to the platform and explaining where they can find what services, along with some links. These emails won't get sent until after we finish the migration to Production, as the MailPoet team manually audits each site before enabling the "freemium" key to use their mailing service.

With those emails ready to go, I made some small adjustments to the default email templates from the job board plugin. These are very rough at the moment, but we have a Del Mar Encore Fellow joining our team with experience in SEO and marketing campaigns that will be taking on sculpting our voice as a team. I'm hopeful to learn as much as I can while working alongside them!

I had a full site review with the client after all of the changes were implemented, and they greenlit me to move forward with finalizing the move to Production. 🎉 Things are looking pretty dang good!! Other members of the team sent off emails expressing their excitement and approval of the site, and we already have a few users asking us when they'll be able to sign up.

The actual migration went of much smoother than anticipated. 95% of all the links, even ones manually set into plugins or as button URLs, updated themselves from the Staging site URL to the Production URL, which is what I was anticipating would be a large component of the migration work. After cleaning things up and testing across multiple browsers, I flipped our "coming soon" mode back on at the Staging site, exposing a login for admin and editors to test changes privately.

Final illustrations are scheduled to come in Friday as vector files. I'm hoping we'll have lots of flexibility both with the images themselves and making them work at different resolutions. If there's a point where things have settled down, I'd love to add some very subtle animation in the images, such as having one of the paper airplanes arch through the sky slightly, or have the owl hallway slightly shift perspective as you scroll.

While trying to improve site performance, it was recommended to me to use jpg images instead of png to take advantage of the smaller file size. Doing some research, I came across this great breakdown [comparing jpg with png images]({{page.references[10]}}). With that, I switched most graphics to jpg for now, and would wait to see what format the hero images would be, as the illustrator said they should be some kind of vector format, but not svg. Today is Friday now and we were supposed to have the final art, but nothing yet, so I'll use a jpg placeholder from the drafts for now and update later.

Later that weekend, the final images did come in, however it sounds like the raw files are vector and they get exported to jpg, so not what I was expecting at all. All of the graphics were presented in multiple aspect ratios with 150dpi, so I was able to work with that. Making some minor adjustments and dropping them into place, the CSS rules implemented earlier worked amazingly, and things just _worked_. I made a few small tweaks out of personal preference, and that looks great!

For the animations, the illustrator was looking at doing gifs, which should work but I'm concerned about file size, as the site is already slower than I'd like it to be with no users and an empty database. I can't seem to squeeze any more juice out of it with Autoptimize or WP-Optimize, unfortunately, so I expressed my interest in giving it a shot to the client and illustrator while voicing the metrics I would be watching to see if it would be practical in execution. I'm also unsure if the animation would be a further expense, and since the client is a non-profit, I want to be both practical and economically-conscious.

After talking with our new Del Mar Encore Fellow, I made some updates to the email campaigns, modified the wording and configuration of some messages, and tweaked the SEO. I've also been taking that SEO course on Udemy (mentioned above). It has been mildly helpful getting me into the mindset and learning the terms, although it has not specifically educated me on how execute on building a SEO strategy.

### Focus

When I talk with a few people, I have gotten feedback about me focusing on doing one thing. Things like, "you're not a designer, don't put effort into making it pretty," and "You're not a marketer, you don't need to write all this stuff up about your project." I see what they mean and what they're getting at, and I'm trying to maintain that with my core focus.

From my experience and background, though, I feel like I deliver the largest value when pulling awareness and experience in from a wide breadth of exposure. I am successful in my current career _because_ I pull in experience from mechanical design, development and scripting, electronics, user experience, project management, technical documentation, sales, and customer training. My job is to take projects all the way from a bare-bones sales inquiry to the perfect solution for the unique challenges of our customers, while ensuring that their operators and customers are comfortable using and are able to maintain the equipment efficiently, and stay safe while doing so. It's how my cement mixer platform is being used across the entire United States on more than 1,200 trucks and counting, generating multiple millions in sales annually.

As an example, I'm not going into marketing, but marketing mentality and language is key to a successful product, and something I've needed draw on with building this client site. Often times the client and team will suggest adjustments or provide paragraphs, but a substantial portion of the wording and tone on the site is my own. Same with design - I'm not at all a UX designer, but the site has to be usable and have some visual appeal to lend it credibility. I don't plan on specializing in marketing or UX, but I feel it's a missed opportunity to not utilize and show skills I may build in those areas when trying to convey my value.

That being said, I'm still not technically "in tech," so maybe I'm totally wrong about this. If you have any thoughts on this, I'd love to hear them in the comments below!

### Pseudo API

Thinking about how I want to redesign my portfolio, I was curious if I could expose a .json object to create something like an API that I could access, but from a static site, and it looks like other people have had this same idea. I implemented some basic stats outputs for skills that go live with this blog, and found a page with further ideas for the Learning Log ["API" output]({{page.references[9]}}).


### Time Breakdown

This was a big one - 71 hours, and over 4k words! Holy smokes 😲 To date, this brings us to somewhere around 210 hours invested into creating Silver is Gold. Considering that I knew effectively nothing about WordPress coming into things, and how part of my role in the process ended up being to help to take the idea and make it defined and tangible... maybe that seems alright? I feel confident that I could shave away a **lot** of that time on a new WordPress project, just knowing what plugins to grab and which ones to avoid, and where to look for problems. Figuring out a loose framework for version control is also massively helpful.

I had fully intended to push up a blog after two weeks as scheduled, but the large reworks threw me off balance, for sure. I know, consistency is key for a personal brand and whatnot, but I'm glad to have prioritized the client site and delivered something that the team seems excited about.

Here's a breakdown of my time over the past few weeks:

- 6/30
   - 3h
- 7/1
   - 4.5h
- 7/2
   - 0h
- 7/3
   - 0h
- 7/4
   - 0h
- 7/5
   - 2h
- 7/6
   - 6.5h
- 7/7
   - 2h
- 7/8
   - 5.5h
- 7/9
   - 0h
- 7/10
   - 4h
- 7/11
   - 6h
- 7/12
   - 5.5h
- 7/13
   - 3.5h
- 7/14
   - 4h
- 7/15
   - 0h
- 7/16
   - 1h
- 7/17
   - 5.5h
- 7/18
   - 0h
- 7/19
   - 4h
- 7/20
   - 2h
- 7/21
   - 5.5h
- 7/22
   - 3h
- 7/23
   - 0h
- 7/24
   - 1h
- 7/25
   - 2.5h


## Gratitude

The site feels like it's in a good place right now, and I am exceedingly hopeful that it will be successful and a good fit for the client and team. We've identified a few shortcomings along the way, but for the most part, it seems to check all the major boxes. The people I've had the pleasure of connecting with and working alongside have also been encouraging and inspiring individuals, and I'm hopeful that I can both learn from everyone, and that I present myself as someone that they can trust to bring their ideas to life successfully and provide valuable input.

## Tasklist

- [x] Compile a list of all known CSS issues
- [x] Launch the site!
- [x] Add an "API" endpoint to Learning Log for future testing