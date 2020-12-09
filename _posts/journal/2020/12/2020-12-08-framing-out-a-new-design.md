---
layout: journal
title: "Framing Out a New Design"
excerpt: Comparing design platform contenders, sketching out a new layout,and learning the new tools.
author: Max Lepper
categories: [journal]
tags: [portfolio,design]
date: 2020-12-08 23:38:21 -0400
modified_date:
published: true
status: live
confidence: log
importance: 3
context: true
comments: true
skills: [framer]
references: ["https://www.smashingmagazine.com/2019/04/sketch-figma-adobe-xd-ui-design-applications/","https://www.framer.com/tutorials/"]
timespent: 280
sleep: 465
recreation: 30
workout: 0
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

Before diving into building out the new version of my portfolio site, taking some time to properly lay things out should give me a good idea to go about the structure. I've used Adobe XD a little bit, and heard of others like Figma and Framer, but I'm not familiar enough with the differences or committed to any one in particular just yet. My objectives for today will be in three parts:

1. Create a layout
2. Perform some research a select a design platform to initially use
3. Begin to create the layout in the design platform (unfortunately, probably won't get too far into this)

[Last time I was planning for this redesign]({% post_url journal/2020/11/2020-11-04-storybook-and-design-research %}), I had identified a few key inspirations:

1. <https://kuon.space/>
2. <https://fleurmoreau.fr/>
3. <http://2016.robinmastromarino.com/>

I realize that these sites are all more design-centric, so maybe it will ultimately turn out that this isn't the right approach for me. I've reached out to a few peers for input, but there wasn't much actionable feedback or constructive criticism, so I'm going into this a little blind. Either that, or my design is perfect! 😂

I have some art background from a hobby perspective, but certainly no formalized design experience yet. I would absolutely like to take some time to learn and improve on the UX side of things just to be a bit more knowledgeable and a better collaborator.

For now, though, that's where leveraging Storybook will be my long-term advantage. If the core elements are good and the model data is solid, I can always change the design later.

On some scrap paper, I drafted and iterated on a few different designs, settling on one that has links in the upper-right, socials at the lower left, and then projects in the center (scrolling left to right for now, but I may go with vertical. I'm not sold on either direction yet). My thinking is that the center (or "focus" component) will be a swappable wrapper, and clicking on different links will unload and replace the "focus" component. This component could come in a few variations:

- Text (For about and contact info)
- Carousel (for projects)
- Document (for resume)

My design also needs to work well mobile, as this is where I see most sites perform poorly. On desktop, the preview and detail pages for projects can be side-by-side in two columns, but they should stack vertically on mobile. I would like the vertical height for each project to be consistent between projects in the carousel, but maybe truncate the content and allow it to be unfurled.

In a bit of a frenzy, I drafted up a very rough mental checkpoint of my thoughts to use as a general reference when creating the formal layout. It's scratchy and not to scale and I'm hesitating to post it, so that means that I should probably go ahead and post it:

{% include blog-img.html source="/assets/images/posts/2020/12/08/quickdraft.png" alt="A quick hand drafted layout for my reworked portfolio" %}
(We only have overhead lighting in the office, so there's some weird shadows going on)

Step one done! Well, it might not look done, but I have enough of a sense of what I'm going for that it will make it easier to block out and modify once I get in a design platform.

Next up is actually researching platforms. I was able to quickly narrow down a few different options:

- [Adobe XD](https://www.adobe.com/products/xd.html)
- [Framer](https://www.framer.com/)
- [Figma](https://www.figma.com/)
- [InVision](https://www.invisionapp.com/)
- [Sketch](https://www.sketch.com/)

Reviewing a few different articles, I found one in particular that did a good job [covering a bit of everything]({{page.references[0]}}). I did some smaller searches from there, but here are my core take-aways:

| Product  | Platform                         | Price<br>(individual)  | Key Features                                                                       | Contender? |
|----------|----------------------------------|------------------------|------------------------------------------------------------------------------------|------------|
| Adobe XD | Windows<br>macOS                 | Free<br>(very limited) | Cloud collab<br>Prototyping                                                        | No         |
| Framer   | macOS<br>Web                     | Free<br>(3 projects)   | Real-time collab<br>Prototyping<br>Animations/transitions<br>Code<br>Framer Motion | Yes        |
| Figma    | Windows<br>macOS<br>Linux<br>Web | Free<br>(3 projects)   | Real-time collab<br>Prototyping<br>Code                                            | Yes        |
| InVision | Windows<br>macOS                 | Free<br>(3 projects)   | Newest<br>Real-time collab<br>Prototyping<br>Animations/transitions<br>Code        | Yes        |
| Sketch   | macOS                            | $99                    | Oldest                                                                             | No         |

With all of this in mind, I'm split pretty evenly between Framer and InVision! Both look exceptionally feature-rich and seem to be continuously rolling out improvements. I especially like the support for animations in prototypes, and access to usable code. For right now, I'm thinking I'll go with Framer, and that's mostly because I can dive immediately into the webapp, and I've been really interested in eventually using Framer Motion as an animation framework when I have an application that calls for one.

That being said, I'm _absolutely_ installing the InVision desktop client to play around with sometime, as it looks super slick. Bonus points for default dark theme. 👌

Step two complete! On to step three, Framer has an [intro tutorials]({{page.references[1]}}), and then two series on desktop prototyping and coding. There ended up being way more content in here than I expected! I only got about halfway through the Desktop Prototyping tutorials before midnight, and I think I'm going to call it quits for tonight.

I'm trying to shake off my battle with insomnia and get my sleep schedule back on track. It's exceedingly tempting to keep going and either finish these tutorials or clean up my draft from yesterday (which is still very much a draft), but today has been a good immediate contrast between what I'm able to tackle with good sleep versus no sleep. There is this feeling of needing to move quickly to avoid harm and danger, which is, in and of itself, persistently stressful. Regularly failing to deliver the desired results within a self-imposed deadline is also stressful. Being sleep-deprived amplifies all those feelings and negatively impacts immediate performance, recall, and retention. The answer is easy, but also so difficult:

- Get better sleep.
- Don't take on too much work.

How do you know when too much is too much? Some days, I am capable of blowing my task list completely out of the water and going further than planned. Others, I make progress but at a much smaller scale than hoping. Today is kind of like the latter - I was really hoping to at least have the main elements of my design roughed out. I can think of about 40 minutes I could have recovered, but that still may not have been enough.

I think a lot of this comes back to mental framing, and "want" statements over "should" statements, and goals. It's funny how, now that it has been identified, it's so much more recognizable when looking at the problem directly. This is where my mind was drifting while writing this post, yet it still took a moment before I caught it.

I _want_ to spend a little extra time learning Framer, as I do not have much experience in design applications, and this will be a foundational introduction.

I _want_ to get a good night's sleep, so that I can perform better tomorrow and continue at this pace.

I _want_ to be more patient with myself, so that I do not get discouraged or feel overwhelmed, which would distract me from being productive.

That being said, I'm off to bed. Goodnight! 👋😊

## Tasklist

- [x] Draft a new portfolio layout
- [x] Select an application to use for design
- [ ] Create the layout design in a design environment
