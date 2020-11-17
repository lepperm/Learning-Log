---
layout: journal
title: "Roadtrip Podcasting and Next Steps Brainstorming"
excerpt: Getting better perspective on where my portfolio needs to be, and brainstorming how to get there.
author: Max Lepper
categories: [journal]
tags: [mentality]
date: 2020-10-29 23:31:20 -0400
modified_date:
published: true
status: live
confidence: log
importance: 3
context: true
comments: false
skills: [general]
references: ["https://open.spotify.com/show/4reiFc64UFAxprQcLqXWnc?si=eahA7RdEQWCDfWQKZ7VyoA"]
timespent: 395
sleep: 400
recreation: 0
workout: 0
---

## Journal

I have been out of town this past week for work, visiting a customer's shop to test out hardware and demo to the stakeholders. Usually these trips can get kind of mentally intensive, trying to crank out features as fast and accurately as possible while troubleshooting weird hardware performance with the customer watching my every move. As such, I had planned to not overload myself by trying to ALSO squeeze in new development learning content or trying to actively manage TDC going into the demo. So far, this has worked out well, and I think we've managed to accomplish most of what we set out to achieve this trip. After a demo in the morning, I should be good to head back.

When I initially set out on the road, I was listening to music, but about twenty minutes into what would turn into a 2.8 hour drive, I did a quick search for developer podcasts and picked one more-or-less at random. The winner was [The Learning Developer's Podcast]({{page.references[0]}}), and while it's a shorter podcast that doesn't seem to be active anymore, it helped to both reaffirm that I'm on the right track, and also offer many great suggestions to help me course-correct moving forward. I've been listening on my drives to-and-from the customer site and also a little bit in the evenings.

Here is the high-level overview of some of my take-aways from the podcast episodes, with how they relate specifically to my own portfolio and projects:

**Portfolio Goals**
- Client projects (Aim for 2-3 solid, complete projects)
  - WHY: Client projects show a good example of getting the work done in a real-life situation.
  - PROJECTS:
    - AGWSU
      - Unsure, not many personal code contributions outside of project management
      - Can I contribute more now that I'm further along? Convert to hooks maybe?
      - Talk with Neal after Product Lab about revisiting and finishing this, maybe completely hold off on guilds feature until the site is actually being used by AG.
    - Offer to create a site for a local company
      - Offer to do free of charge
      - Be transparent about being a newcomer and trying to help out
      - Simple one-to-two page site
    - Offer to resolve a pain point for a local company
      - Similar to above, reach out to my network for insider information
- Personal projects (Aim for 2-3 solid, functional projects)
  - WHY: Personal projects show both the creativity to build something unique and original while also delivering under no force but my own willpower and dedication.
  - PROJECTS:
    - TD Collection (In MVP phase, but some of my best work so far)
      - Will need to review status and team engagement when I return (no activity seen)
    - Learning Log (Live, needs polish)
      - How can I build more value into Learning Log?
      - Add documentation, better code structure, better organization
    - Unnamed Bar Inventory Platform (Conceptual only right now)
      - My mental model for the system architecture actually has lots of overlap with how we've been aiming to implement TD Collection, try to learn from and implement myself
      - Potentially high-value project, could eventually become SaaS
      - Would feature user accounts, admin view, "customer" view, analytics, inventory/budget forecasting, mobile, could use e-commerce, etc - LOTS of things to potentially showcase!
    - My Portfolio site
      - I don't think this counts!!!
    - Open-source projects
      - Work to come up with some kind of small open source project
      - Reach out to friends, network. Anything they'd want to make?
- Open-source contributions (Open source experience is highly desirable)
  - WHY: Contributing to open-source shows a flexibility in working with different teams, different standards, and learning new codebases.
  - NOTES:
    - Focus on adhering to contribution guidelines
    - Use good tags, small commits, and proper pull requests
- Tutorials/Small apps (Only showcase if very polished)
  - Not representative of real-world applications, so they don't add much value to the portfolio
  - If I'm going to showcase these, then they should feature:
    - Clean code
    - Good testing
    - Full functionality

**Learning Log Adjustments**
- Features
  - Read book list, generated from progression items
  - Previous Week / Previous Month activity overview
    - Easy sharing to social media?
- Polish
  - Documentation needs to be added
  - Review variable names, I know that some variables are unclear
  - Add more accessibility
- Reworks
  - See what can be simplified to functions
  - Tag and Category views are not great, needs some kind of redesign to be more useful
    - Part of this issue lies in what stuff is handled by Jekyll and Liquid, and what's handled with Javascript. For example, a more sophisticated post filtering by tags would require all the posts to be filtered and mapped with JS from a JSON object or similar, rather than created at build by Liquid.

The podcast also had some great discussions about mentality and attitude, which I may distill in a later post! From that podcast, I've added a small lineup of others, and will be recommending them as I go if they're helpful for where I am right now in my journey.