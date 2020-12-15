---
layout: journal
title: "The Unexpected Pull Request"
excerpt: Accidentally making a PR to the create-react-component-folder repository in the process of working on my portfolio.
author: Max Lepper
categories: [journal]
tags: [portfolio,design,open source]
date: 2020-12-14 23:50:06 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [javascript,react,css,design]
references: ["https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48","https://favicon.io/favicon-generator/","https://realfavicongenerator.net/","https://github.com/snaerth/create-react-component-folder#publishing-templates","https://storybook.js.org/docs/react/api/csf","https://prettier.io/docs/en/rationale.html#strings","https://github.com/snaerth/create-react-component-folder/pull/49","https://fontjoy.com/","https://www.joshwcomeau.com/react/boop/"]
timespent: 335
sleep: 300
recreation: 0
workout: 0
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

With the holidays approaching quickly, this past weekend was exceptionally busy, and we ended up not getting very much time to rest. I'm glad I took some time on Friday evening to relax, because I ended up needing it! Thankfully, just about everything is in a good place now, and my todo list is a little bit more under control.

Over the weekend, I debated if I should actually go for the single continuous portfolio page after all! I like the middle screen idea, but the long page might be faster to start refining the actual content, instead of fussing with the "invisible" mechanics of the page.

When my content is good and isolated (model), I can always build new pure components (view)!

Something that's always good to knock out early is the favicons, so I [generated a simple favicon with text and a font]({{page.references[1]}}) and then used [realfavicongenerator]({{page.references[2]}}) with my generated favicons to generate all my variants and manifest, along with file versioning to help replace the icon, should I decide to change it to better fit whatever branding I decide to use down the line.

I've been debating if I should use a service worker again. I think it makes more sense here on Learning Long, where there is content to consume, but on the portfolio it may negatively impact user experience, especially if it ends up that I'm updating it often with new projects. Trying to use the network-first SW configuration previously didn't seem to properly bust the cache without a refresh, and I'm sure that the issues were something that I was doing incorrectly. For now, this would be low-value to include, but something to look into later.

Next up, I finally got around to working on my [create-react-component-folder template customization]({{page.references[3]}}). The default `stories` output is written in the older `storiesOf` format, which breaks my Storybook interface (at least for me, although it claims to be reverse-compatible). I swapped this out for their newer [CSF]({{page.references[4]}}) format. As a bonus, I through some JSDocs starters into the templates, as well. Despite changing the `'` to `"` in the template, it still outputs as `'` for whatever reason, causing Prettier to throw a fit and Storybook to not update until I format the new components.

Digging into this, it looks like `singleQuote: true` in hardcoded in the Prettier formatting options that get run when new files are created. I took a bit to trace through the code and understand how configuration flags are handled, and started to draft up an issue. I found that if I removed the hardcoded setting, in keeping with [Prettier's opinionated defaults]({{page.references[5]}}), the quotes are forced to double quotes, regardless how I have them set in my templates.

While writing up the issue, however, I realized that I had already done 85% of the work! It would be almost rude of me to post the answer as an issue but not just do it myself, right? I have really wanted to start trying to make open source contributions in an effort to both give back and to get more comfortable working in a PR environment, so this presents a wonderful opportunity!

To be safe, I took a few minutes to refamiliarize myself with proper etiquette and process when submitting a PR on GitHub - stuff like forking and what to name my branches, and commit details. With that refreshed, I made the changes to the actual code and, as a bonus, to the documentation and the runtime arguments. I tested about 20 different variations on my local machine and, once satisfied, shortly thereafter submitted [a PR for a feature addition to `create-react-component-folder`]({{page.references[6]}})! 🎉

This feels so exciting! I'm honestly 50/50 on if the feature will be accepted, as it is kind of disruptive - the current default behavior is single quotes. Yet, this default is in itself disruptive to a "vanilla" Prettier configuration. I will just have to sit tight and see if it gets accepted. This was a highly unexpected detour, but what a rush!!

Unfortunately, that also means I've barely made any progress on my actual portfolio so far this evening. I'm sounding like a broken record!

Unwilling to settle for just a PR, I want to try and start thinking on some branding options and sleep on them overnight.

First up is fonts. Honestly, I struggle in this department, and have been leaning on [FontJoy]({{page.references[7]}}) to help me out. So far, I think I'm liking `Ubuntu` as my main/headline font, and `Poppins 300` as my body font. In particular, I really enjoy the roundness of Poppins! That being said, I saw lots of people on Behance using fonts like `Frank Ruhl Libre 900`, with the thick circular curls.

For a developer role, I feel like sans serif fonts communicate "modern" and "friendly," as well as being more legible at various screen resolutions. The "stability" and "confident" tones of a serif font, though, given that I have a richer career background than a typical Junior, may be an alternative to keep in mind.

Next, I want to figure out my brand palette. I can usually do okay with limited or restricted palettes, but a full-spread 5+ color brand palette is something I don't have much experience assembling. Fortunately, I have a [bunch of options]({{site.baseurl}}/resources/#color) for color generators on my new Resources page! I am particularly fond of [coolors.co](https://coolors.co/1c1c1c-1a936f-88d498-c6dabf-f3e9d2), where I was able to grab this palette:

{% include blog-img.html source="/assets/images/posts/2020/12/14/palette.png" alt="A strong contender for my branding palette, which emphasizes green natural-ish tones." %}

Out of about 45 minutes of searching and comparing and refining, and 8 other finalists, I think this is in my top two.

My dark color is based on my favicon, which was more-or-less selected on a whim to have nice contrast as a browser tab and slightly visible in dark mode. It's not mandatory to reuse that color specifically, but I think it makes sense. Other colors I wanted to include were an off-white cream {%- include color-swatch.html color="#F3E9D2" -%}, some kind of natural green {%- include color-swatch.html color="#C5FFFD" -%} (either a plant-like or water-like), and a mauve {%- include color-swatch.html color="#846075" -%}. The palette above misses the mauve, but I really like contrasts between the greens and the look of the champagne next to the black.

(Also, check out those swatches! I like how that turned out 👌)

This decision is definitely something that I want to sleep on and to get a few additional opinions, but I feel pretty good about this direction! Unfortunately, it's well after midnight again, so I really need to call it quits here and head to bed. The time always goes by so fast.

P.S: I stumbled across [Josh W Comeau's website]({{page.references[8]}}) randomly, and _wow_ is it fun and well done! The tone is playful, but the content is structured very nicely.

P.P.S: I also discovered that my drafts do, in fact, get pushed live to RSS readers, which I was afraid of. Sorry about that! I will need to figure that out... sometime.

## Tasklist

- [x] Configure `crcf` templates to my preference (nice and reusable for the future!)
- [ ] Using current draft as structural inspiration (tweaking as needed from design learning), begin to rebuild the portfolio
