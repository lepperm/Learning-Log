---
layout: journal
title: "Prepping For Launch"
excerpt: Wrapping up tasks and tackling site issues as we count down to the private launch of Silver is Gold.
author: Max Lepper
categories: [journal]
tags: [wordpress,css,"Silver is Gold"]
date: 2021-06-29 23:29:23 -0400
modified_date: 2022-01-08 20:44:48 -0400
published: true
status: finished
confidence: log
context: true
comments: true
skills: [wordpress,css]
references: ["https://www.silverisgold.org/","https://complianz.io/","https://courses.joshwcomeau.com/css-for-js","https://material-ui.com/customization/breakpoints/","https://rankmath.com/kb/score-100-in-tests/"]
timespent: 1650

---

## Journal

{% include focus-box.html focus="WordPress" theme="Client Projects" %}

Picking things up from the week prior, I had a sync meeting with the client to review where I was with [Silver is Gold]({{page.references[0]}}), and where I am planning to focus next. We had a great conversation, and generated a huge task list of specific action items, mostly related to monetization and account permissions, modifying wording, or adjusting how things look.

The client discussed their thinking behind how people would use the site, which helped to reframe who the customer is and what they want from our site. From that, we made some large changes to the monetization strategy from what I cooked up as a plausible placeholder. I also made some promo codes to use for the launch, which will be good through the end of the year, providing users with free talent subscriptions and free opportunity postings.

Another thing that I wanted to add was some general terms documents to supplement our privacy policy (which I need up adjust and update). In a WordPress channel in a web dev Discord server I had joined, [Complianz]({{page.references[1]}}) was highly recommended for managing and generating documents for cookie policies and usage terms, so I grabbed their GDPR/CCPA Cookie Consent and Terms and Conditions plugins. They were very straight-forward to use and did a good job walking me through the questions. It looks like it won't be too difficult to come back in the future and make adjustments, either.

Related, I have been unsure what all to keep in the site footer. I've seen it recommended that you replicate your header navigation in the footer for accessibility, and I'd also like to include links for tech support tickets and legal documents. A newsletter sign-up might also be nice to inform people of things like downtime and promotional offers, but it looks like using WPForms to collect sign-ups requires either a paid license or an active ConstantContact subscription (neither of which I have), so we might be reworking this completely in favor of a checkbox on your profile to opt-in to the newsletter, or a different form provider.

From personal testing and from asking friends, the site generally looks alright on Chrome, FireFox, Edge, and Opera, however it looks like CSS variables completely break down on Internet Explorer. If I was using a custom theme and my own CSS, I could put in fallback color values. For the time being, I may need to look into some way to serve IE users a notification that they may experience a workable but sub-optimal experience until something can be built.

Over on the "About Us" page, bullet lists haven't been working correctly, and it has had me baffled! In the editor, everything looks perfect:

{% include blog-img.html source="/assets/images/posts/2021/06/29/draft-bullets.png" alt="The 'Areas of Expertise' section from the 'About Us' page, showing properly styled list elements." %}

Yet, when I publish the page and look at the live version, the formatting around list elements is non-existent!

{% include blog-img.html source="/assets/images/posts/2021/06/29/live-bullets.png" alt="The 'Areas of Expertise' section from the 'About Us' page on the live site, but with no spacing or bullets on list elements." %}

Inspecting the HTML on the live site, everything is structured properly, so my hunch is that the CSS is breaking down somewhere. To test this, I went into Customize to try and add styles for the bullets. At first, I tried styling just a top-level `<li>` element without any `!important` flags, and it worked immediately, leading me to think that maybe no rules are being passed through to specifically lists for some odd reason. I played around with the look and feel to come up with a modified version of the preview:

```css
/* Lists */
.wp-block-themeisle-blocks-advanced-column ul {
  padding: 1px;
}

.wp-block-themeisle-blocks-advanced-column ul li {
  list-style-type: circle;
  margin-bottom: 0.8em;
}

.wp-block-themeisle-blocks-advanced-column ul li:last-child {
  margin-bottom: 0px;
}
```

Spacing between sections in the "About Us" has also been all over the place, and is in dire need of a clean-up. I spent some time inspecting each layer of each section, tweaking the padding and margins to be as consistent as I could get it. Some spots are off, and it won't let me adjust things like I would expect, so I got it as close as possible. This is another area where I'm chomping at the bit to dig into Josh Comeau's [CSS for Javascript Developers]({{page.references[2]}}) course. Between that and a Scrimba course I picked up, I have some solid classes queued up to help me tackle these challenges more skillfully.

When I was starting to go dizzy from fiddling with paddings and margins and trying to get the block editor to behave in a way that made sense, I switched over to a different request to shake up my focus. At the bottom of our Partners page, we have a Call-to-Action encouraging people to contact us if they'd like to bring Silver is Gold to their city. When discussing this with the client, we both had the idea of using the owl logo with a map pin and showing multiple cities on a map as the graphic.

I typically work in the pixel-based realm of graphics but know enough about Inkscape to be dangerous. A few deleted nodes, color changes, and a merge and crop later, I had assembled the owl marker. Adding in a snapshot of a map from OpenStreetMap, a first pass at the map was complete!

Since I am using part of the map in my image, I need to attribute it back, and OpenStreetMap has well-defined attribution resources. At first, I was going to try and include the attribution on the image itself, but for the life of me I couldn't thwart Gutenburg blocks and actually get the text to the lower-right corner.

I may want to verify this with someone, but a few threads online said that it was okay to link to your attribution on a separate page, especially when you have assets that are difficult to attribute immediately such as background images. There are other assets that I'd like to be able to include, and we're on the cusp of adding all new art, so a new Attribution page now holds all relevant information for assets used, and it's included in the footer with all other legal links. Honestly, I spent way more time digging into the attribution than creating the map itself!

While performing some link visibility testing with a new test account, I discovered that the Opportunity postings broke again! After digging around, it seems to be associated with the visibility restrictions on anonymous accounts looking at opportunities, which is a component of how the whole site should work. I reached out to the WPBJ plugin developer team again. This was unfortunate timing, as my sync meeting and demo took place not even 5 minutes after discovering the bug. I suppose better to find a bug immediately before the meeting than while demonstrating it with the client, right??

That being said, the sync meeting went well. In a few days, the stakeholder team will begin creating accounts and opportunities to use as sample data, and we're in the process of acquiring some custom art to use as replacement images around the site. We also knocked out the Stripe business account configuration quickly, so I was able to re-enable Stripe payments on the site. Most of my test opportunities and accounts were also cleaned up to reduce the clutter.

The "About Us" page has slowly been filling out with info, and I feel like it's looking pretty good! The biggest thing that's still a bit weird is the "Why Utilize Silver is Gold" section, where we list what sets the team apart from other services. It ends up being awkwardly left-justified, and I had already messed with it a bit to try and get things to look more comfortable, with little success.

Taking a different approach, I went with a column content block with a 3-column layout, with the left and right columns being smaller than the middle (20 - 60 - 20). I moved the existing list inside the center block, and this immediately made a large general improvement. When moving to mobile, however, the text squashes and stretches unacceptably long, so I need to hide the left and right spacer divs on mobile. To do this, I made a simple CSS selector in the global customizations to hide elements, and then added this new class to the two columns. Works like a charm! There are a few other elements I already have marked to hide on mobile, so reusing this class allows me to simplify those other rules, as well.

```css
/* For hiding on mobile */
@media (max-width: 960px) {
  .hidden-mobile {
    display: none;
  }
}
```

Admittedly, the thing I'm struggling with the most on media queries is what width values to use. It seems that people tend to take a preference to a specific device width like an iPhone, presumably since they hold a large market share compared to the flood of Android variants. Hours later when speaking with a friend, they recommend using the pixel values specified in [Material Design breakpoints]({{page.references[3]}}) as my primary reference, which is a great idea!

When sharing the link with friends to help check other browsers, I had noticed that the URL unfurled in our chat with essentially no data when sharing the link, yet the production site appears to unfurl just fine. Thinking through this, I realized way too much later that it was the coming soon mode plugin that was serving the metadata! With "coming soon" disabled, there was no SEO data associated with the homepage!

With a little research, I decided to go with RankMath SEO for now, and proceeded to get things configured. Some of this is going over my head at the moment, but I was able to very quickly get my score up from 20 to [nearly 90]({{page.references[4]}}) on the homepage, so not a bad start by any means. Sharing the link now unfurls much nicer and browser tabs are even formatted better. It looks like I'll need to touch all of the core pages to help tune things, but for the time being, the homepage is certainly the most critical.

In a response from the job board plugin developers, I had officially identified a new bug! They sent along a patch to see if it would resolve the issue. The patch worked for the specific issue I was seeing, but didn't fix all instances. I will need to do some more exhaustive testing and pull more error logs tonight to generate an actionable list for my response.

Trying different combinations of logins and URLs, pulling error logs, and inspecting stack traces, I compiled as much information as I could. It seems like an edge case error that may have missed a refactoring at some point. I'm happy to help provide info to fix the bug, but part of me is definitely missing the thrill of directly contributing bug-fixing code to an open-source repository! They confirmed that these updates will be resolved for future releases.

The first accounts for the client site were created by one of the stakeholders, who provided good feedback about the process. They mentioned the CSS issue related to highlighting input field errors when they tried to reuse emails between talent and employer accounts, which is a known issue, but one that I really need to prioritize. A friend who has been following site development graciously gave a detailed report on current styling abnormalities on Safari. I'd like to revisit my task lists and make a prioritized list of CSS issues to tackle, most likely starting with illegible text and drop-downs.

Before I could do that, though, I lost an entire night to some kind of allergy issue, and was completely floored. I don't really remember what happened beyond my spouse taking care of me. As I'm writing this, I still feel a little bit off, but it has gotten much better!

Clicking around, the overall site performance definitely seems sluggish, and I haven't done much of anything to optimize yet. Since more people are going to be making accounts, and some of them may be doing so on their phones, I want to make sure it seems nice and snappy. To gain a reference point, I ran a Lighthouse test, and unsurprisingly scored an abysmal 33 on mobile - gross! The key issues seem to be file size, no cache, and blocking requests.

To improve things, I'm going to utilize four plugins:
- Autoptimize
- WP-Optimize
- WebP Express
- a3 Lazy Load

Autoptimize and WP-Optimize both handle caching and cache management, and mostly share roles while also having some unique features. a3 Lazy Load does a great job of helping to specify lazy-loading issues and configure things, including how images will look before they are downloaded. WebP Express generates WebP images from the rest of the images in the media library.

For the cache policy, I specified to exclude opportunities, talent and employer lists, and talent and employer profiles. That should help make sure that users are always seeing the latest version of a page and prevent someone applying to a role when the description has changed. Inspecting the images delivered to a different browser in incognito, it doesn't look like the WebP versions of images are being served after all. I double-checked the plugin settings and can't really figure out why, even with cache dumps and different configurations. I'll have to see what Lighthouse says.

With image compression, cache policies, and a little bit of luck, Lighthouse reports that our score is now up to 87 on mobile and 99 on desktop. Not a bad increase for a little bit of configuration and testing!

{% include blog-img.html source="/assets/images/posts/2021/06/29/mobile-lighthouse.png" alt="A Google Lighthouse report showing an overall score of 87 points." %}

Lighthouse has cleared the site for efficiently encoding images in modern formats, so I might need to ask someone else to confirm what they're seeing. Next up in my tasks is a client meeting, and creating a list of CSS tasks to knock out.

#### Unrelated

During a discussion with a friend, we voiced our frustration about the dictionary-imposed ambiguity over the term "biweekly," which by definition means "every two weeks or twice a week." How frustrating is that?? In response, we've (semi-jokingly) established alternative options that we'll be striving to use in our daily lives:

- Semiweekly - occurring twice a week
- Fortnightly - happening or produced every two weeks

See, isn't that much nicer? 😂

### Time Breakdown

Here's how the time was spread out over the past few weeks:

- 6/16
   - 2h
- 6/19
   - 2.5h
- 6/20
   - 3.5h
- 6/21
   - 2.5h
- 6/22
   - 2.5h
- 6/23
   - 3.5h
- 6/24
   - 1.5h
- 6/25
   - 1h
- 6/27
   - 3h
- 6/28
   - 1h
- 6/29
   - 4.5h

## Min-Maxing Evening Time

One thing I attempted to tackle has been determining the productivity tipping point in my evenings, which would be the point of time into the evening when the value of the activity of continuing to work is outweighed by the value of getting to sleep. Not knowing where to expect this tipping point, I've determined that I've been staying up a little too late fairly consistently, which has not been particularly healthy or productive.

Analyzing a few different metrics along a gut-driven 1-5 scale across multiple evenings revealed distinct trends in my behavior and perceived output. This has lead to establishing a few patterns that I can try to identify, and make more informed decisions on if I should continue working or call it quits for the evening. I might do a write-up on my findings and ideas at some point, but for now, I've seen a major improvement in just being mindful!

## Tasklist

- [x] Resolve plugin critical issues
- [x] Prep site for stakeholder use
- [ ] Compile a list of all known CSS issues