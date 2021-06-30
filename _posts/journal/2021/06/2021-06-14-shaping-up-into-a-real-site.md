---
layout: journal
title: "Shaping Up Into a Real Site"
excerpt: Implementing a new job board plugin and populating page content to finally have the site looking and acting more like a real service.
author: Max Lepper
categories: [journal]
tags: [wordpress,css,"Silver is Gold"]
date: 2021-06-14 23:49:15 -0400
modified_date: 2021-06-15 21:51:11 -0400
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [wordpress,css]
references: ["https://www.silverisgold.org/","https://wpjobboard.net/","https://css-tricks.com/keep-math-in-the-css/","https://kinsta.com/blog/is-wordpress-secure/","https://www.wpsecurity.press/how-secure-is-the-wordpress-passwords-algorithm/","https://stackoverflow.com/questions/40315561/how-to-ignore-parents-width-limit-in-css","https://wordpress.org/plugins/custom-fonts/"]
timespent: 2340
sleep: 0
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

After wrestling with it for a while, I just couldn't seem to get the WordPress console wp-cli working in Docker, which is where I left things in the previous blog post. Reaching out to a few networks, no one had any advice for me, and no one I've talked with in my circle has worked with it before. It sounds like I can't (or shouldn't) add Duplicator until I can do things safely, meaning my goal of a local development build is dead in the water for now. My new plan is to go ahead and make the changes just on the staging site to get something functional up and running for now.

Taking some screenshots for reference, I reconfigured the old job board plugin to clean up some of it's pages, roles, and artifacts on uninstall, and then removed it completely from the staging site. Next, I purchased the [new plugin]({{page.references[1]}}) license and moved forward with getting it installed.

The first thing to tackle was rebuilding the general page structure that was removed by the old plugin, now using the newly generated pages, as well as some new pages that compliment the new plugin, like pricing plans. With the pages restored, the menus could also be rebuilt to match, and I cleaned up dead links and broken references.

Next up was to start configuring the plugin, category by category. Compared to out-of-the-box WP Job Manager, I am really impressed with all of the options in the settings! There are native options to limit visibility for different groups of users and paid users, a full-featured custom form section, tons of email templates, and overall things seem pretty straight-forward. I'll need to make some dummy accounts later to fine-tune the page visibility to the client's specifications.

Configuring out the settings was pretty fun, honestly! I spent a good bit of time tweaking the opportunity form and adjusting settings to see what they would do. A few hours into it, and I feel much better about where things are and the current functionality. This plugin is very rich, and I don't think I've run into anything feature-wise yet that it looks like it can't handle.

The next day, I had a status meeting with the client to show how things were going with the new plugin. Not too long into the demo, however, we ran into an issue where a non-admin employer account couldn't access the employer dashboard. Everything else seemed to be working, and we were able to post and modify opportunities as an admin. After our meeting, I sent a trouble ticket to the plugin developer describing the behavior.

I ended up working through the night tweaking CSS and troubleshooting issues from demo. Creating multiple accounts, memberships to employer and talent groups seem to apply correctly, but some things are not acting quite how I would expect. The visibility features are also acting strangely, and I'm strongly suspecting that all these issues are related.

Although, I'm _also_ borderline delirious from getting less than 5 hours of sleep total over the past three nights, between trying to manage the house issues that popped up while we were out of town and also deliver a successful demo on time. I have family obligations and home concerns to attend to tomorrow, so depending on what engagement is like from the plugin developer, I may change gears for the next few days to catch up on sleep and hopefully make some headway in other life areas.

A few days later, I did hear back! The plugin developer wrote me a great email full of troubleshooting steps. Following along, I evaluated performance each step of the way across multiple accounts and browsers, but unfortunately there was no improvement. I tried making new accounts, using a different computer, tried a phone - all were the same. I compiled and responded to the developer with screenshots to explain what I'm seeing.

While waiting for next steps from the plugin devs, I switched my attention to another concern, the forms. I had built some forms based on my personal research and general ideas, but now I had official documentation from the stakeholders in hand.

I replicated the specified form criteria to the best of my ability while maintaining some of the structure that helps to make the posts searchable. There were a few issues with form elements that I noticed, so while I eventually got everything sorted out, I made note of the behavior to add to my troubleshooting chain with the plugin devs.

With the forms ready, the homepage tagline is one of the main visual focal points when you open the site for the first time, and it hasn't ever looked quite like the brand board spec. I wanted to finally change this and switch my "(not)" to a script "not" with a superscript "^" injecting it mid-sentence.

{% include blog-img.html source="/assets/images/posts/2021/06/14/tagline-before.png" alt="The text 'A lifetime of experience is (not) hard to find' on the site homepage." %}

CSS isn't my strongest suit yet, but I'm starting to get a general feel for what I _should_ be able to do. Off the top of my head, I was thinking that I could pop the text out of the flow relatively and do some repositioning/stacking/rotating to get things into the right place while shrinking the width of the parent element.

Josh Comeau's CSS course is a high personal priority for building my CSS experience once I have some bandwidth to take a course again, and as luck would have it, I've seen exactly what I'm wanting to do on [Josh's personal site](https://www.joshwcomeau.com/)! Inspecting the page with devtools, I noticed that Josh uses SVGs for both the letter and caret instead of typography letters, and also includes an invisible `div` with the actual text for screen readers, which is awesome!

It took some fiddling and [research]({{page.references[5]}}), but I was able to get things working! Here's my CSS:

```css
selector .highlight {
  display: inline-block;
  position: absolute;
  background-color:transparent !important;
}

selector .addendum-inject {
  font-size:90%;
  position: absolute;
  left: -0.5em;
  top: 0.8em;
}

selector .addendum-text {
  font-size:90%;
  position: relative;
  left: -1.1em;
  top: 1.5em;
  transform: rotate(-10deg);
}
```

The client had suggested in the past that I drop the tagline into the homepage as an image, and while that would have worked, I think I'm ultimately much happier with what should be a more accessible solution like this, and that doesn't need a large image download above the fold, and should scale at different screen resolutions.

We're not all the way there, though, because I need to add the fonts. They're uploaded as media and have shown up in other places, but I can't seem to get them to show up in my advanced heading block, and it only shows me Google fonts. Poking around online seems to be steering me towards either finding an alternative font through Google or bespoke theme development.

Some threads mentioned that you can enqueue fonts to be loaded into the theme by modifying some files, but for the time being, I found a plugin called [Custom Fonts]({{page.references[6]}}). This made it easy to assign the fonts I've already uploaded to a `@font-face`, which I could then apply with custom styling. With my fonts loaded in and assigned, here's my updated CSS:

```css
selector {
  font-family: 'Adrianna Extended', Helvetica, sans-serif !important;
}

selector .highlight {
  display: inline-block;
  position: absolute;
  background-color:transparent !important;
  font-family: 'Caslon', Serif !important;
}

selector .addendum-inject {
  font-size:90%;
  position: absolute;
  left: -0.6em;
  top: 0.8em;
}

selector .addendum-text {
  font-size:90%;
  position: relative;
  left: -1.1em;
  top: 1.2em;
  transform: rotate(-10deg);
}
```

Those `!important`s are glaringly ugly, but I think it'll take creating a custom theme to take care of many of those issues. The text position had to shift slightly as well, but I'm hoping that using `em` will keep things in position well across devices.

Next up, the "not" on the hero message needs to be in the correct font. For this, I need to buy a webfont license for the "V-Hand" font, as we don't currently have one, and trying to find similar Google fonts came close, but didn't hit the same visual "feel." After acquiring the proper files and getting them imported, I set the font-face for my "highlight" class in Custom CSS and things were finally looking pretty gosh darn close. A few small tweaks and...

{% include blog-img.html source="/assets/images/posts/2021/06/14/tagline-after-desktop.png" alt="An image of the site homepage with the tagline text modified to look like 'not' was written in." %}

On mobile, the text wraps too much and the "not" ends up tangled with other words, so I think I want to remove the carat and put "not" back inline under a certain screen resolution with the help of media queries. One more CSS update:

```css
selector {
  font-family: 'Adrianna Extended', Helvetica, sans-serif !important;
}

selector .highlight {
  display: inline-block;
  position: absolute;
  background-color: transparent !important;
  font-family: 'V-Hand Medium', Serif !important;
  font-size: 2em;
}

@media screen and (max-width: 450px) {
  selector .highlight {
    display: inline-block;
    position: relative;
  }

  selector .addendum-inject {
    display: none !important;
  }
}

@media screen and (min-width: 450px) {
  selector .addendum-inject {
    font-size:120%;
    font-weight:100;
    position: absolute;
    left: -0.2em;
    top: 0.7em;
    transform:scale(1,1.5);
  }

  selector .addendum-text {
    font-size:90%;
    position: absolute;
    left: -0.4em;
    top: 0.8em;
    transform: rotate(-10deg);
  }
}
```

{% include blog-img.html source="/assets/images/posts/2021/06/14/tagline-after-mobile.png" alt="An image of the site tagline all inline, with emphasis on 'not'." %}

Another response from plugin developer came in, and they asked me to create an account for them to look into things further. I went ahead and mentioned the issues with checkboxes and radio items to see if they had any suggestions for me.

They got back to me with some more information a short while later. They had determined that I had a plugin from the old job board plugin that they suspect may have messed up the default roles and permissions that get generated by the new plugin. I disabled and removed the suspected plugin, disabled and re-enabled the job board plugin, updated the permalinks, and everything started working! I'll need to try making new accounts to make sure everything works right on new account creation, as well.

To test out having access to the employer dashboard, I tried creating a few roles and applying to them, and luckily everything seems to work as intended and fairly smoothly. There were some more CSS issues to resolve (these theme issues are driving me mad!), but otherwise things went off without a hitch. Email delivery is also working correctly, however the default emails still need to be modified, and there's a lot of them. For now, I may stick with plain text emails, as they'll be straight-forward, easy to change, and work with any device. I'll talk with the client about rolling out HTML emails and establish some styling and tone.

I met with the client again and reviewed the updated forms. Thankfully, they seem pretty happy with where things currently are, and just had some minor suggestions. We covered rolling out content for the site's pages, which may help me to clean up our theme a little. I gave a demo walkthrough of posting an opportunity and making a Paypal transaction coupled with a promotion code, and things went off without any issues beyond some CSS business. I need to adjust the email templates that are sent and test for different types of emails between accounts, too!

In the job board email templates, there was a variable flag to email users copies of their new account password - which seems like a HUGE red flag! This made me wonder if the passwords on a fresh WordPress install are saved in plain text, and led to reading up on [how secure WordPress is natively]({{page.references[3]}}) and [how WordPress secures user passwords]({{page.references[4]}}). Fortunately, it looks like passwords are salted and hashed by default, so as long as I keep things up to date, we should be good!

While making team profiles, I tried my hand at creating reusable blocks in Gutenberg. Shortly thereafter, I discovered that they're intended for _identical_ reusable blocks, rather than templating. Luckily, they made it easy to break these blocks back apart into their base components to modify.

Populating the content to all of the site pages was very satisfying. Seeing the pages look like they finally compliment the functionality I've been configuring made the whole experience seem so much more cohesive, and it was admittedly a little addictive once I got started. I rolled out all of our current content in a single sitting!

Next steps are more user account testing, tracking down more CSS bugs, and fine-tuning the email templates.

### Time Breakdown

Here's how the time played out for these weeks:

- 6/1
   - 8h
- 6/2
   - 7h
- 6/3
   - 1h
- 6/8
   - 5h
- 6/9
   - 3h
- 6/11
   - 3h
- 6/12
   - 1h
- 6/13
   - 7.5h
- 6/14
   - 3.5h

## Gratitude

### What is going well?

Now that my spouse and I are vaccinated against COVID-19, we have started to see family more and physically go places, and that's been a rejuvenating shake-up to our routines. Just being able to hug parents again has been healing, haha. It's more time out of our schedules, but we used to spend a large portion of our personal time socializing in some way, so it's also like recovering something that was lost.

### What could be better?

I feel like we're struggling to move things with the house forward, and that it's more like treading water. Many of the remaining issues are larger challenges, and any free time and energy I have in the evenings for mental work goes to the site, which is a top priority.

It's hard to say what to expect from the coming months, between the site launch and large projects with field startups at work, so I'd like to give myself the permission to rest a little bit more frequently, and not just sprinting in different directions. As the bugs get massaged out of the site, I'm thinking that there will maybe be a bit more time in my schedule to catch up on rest, too.

## Tangential Thoughts

If I can be a bit more openly honest for a moment, I feel a little discouraged at times that I haven't made more progress in this career transition. Not having enough bandwidth to push everything forward in my life consistently while burnt out feels like an intense personal failing. It feels like no matter how hard or much I actually work, I should be able to give more, to accomplish more, to move forward more, and not doing so makes me feel stuck. The little wins feel hollow, like it's too little too late. I'm trying to internalize that this is very much not a fair or constructive judgment to submit on myself. I know where these trappings come from, but that doesn't make them totally powerless, either.

In a similar vein, the tech Twitter community is super supportive, but also makes me anxious, as I read about more and more horror stories over time - stories of employer and coworker abuse, of grossly unfair treatment, and of destructive expectations. I'm sure that there's a degree of amplification, being social media and all, but I've heard echoes of similar stories from real life friends, and _that's_ what concerns me. In my current role, I'm in a senior position and regarded favorably within my field. The thought of sacrificing everything I've achieved so far to potentially end up in a cycle of harmful and unstable (and unsustainable) situations is... concerning, to say the least.

I love this journey that I've been on this past year, with its ups and downs. I've been bitten enough by the development bug that I don't think I'll ever give it up now, regardless where it leads me in life and my career. The people I've met and gotten to know along the way have opened up my whole world, and constantly challenge me to do better. I realize that I'm rambling quite a bit and getting into some heavy topics, but I feel like these reflections are helpful to record in context.

## Tasklist

- [x] Get the new job board plugin installed and configured
- [x] Create a set of test talent and employers, promo codes for testing
- [x] Populate stakeholder content to the site pages