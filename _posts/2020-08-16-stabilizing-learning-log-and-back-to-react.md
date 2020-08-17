---
layout: journal
title: "Stabilizing Learning Log and Back to React"
date: 2020-08-16 21:33:38 -0400
published: true
author: Max Lepper
categories: [journal]
tags: [javascript, liquid]
excerpt: Reflecting on the past 3 months of web development and a few last improvements for Learning Log before switching back to other projects.
references: ["https://shopify.github.io/liquid/", "https://jekyllrb.com/docs/liquid/filters/", "https://jekyllrb.com/docs/configuration/options/"]
skills: [javascript, liquid, jekyll, html, css]
timespent: 200
---

## Journal

When I first started this site, I had been fervently studying every evening, predominantly focused with learning Javascript, ReactJS, Redux, Firebase, and Material-UI. It was a _lot_, and a hard mentality shift from doing industrial development. In my career so far, higher-order logic and inheritance are often not technically achievable depending on the hardware and development environment, which is often locked to a specific manufacturer. Best practices were shackled to industry giants with little market pressure to change from "how it's always been done".

Since I was cramming so much new information, I reached a point where I felt like I hadn't retained anything and that I was spinning my wheels. My newfound confidence and excitement was sabotaged by imposter syndrome and rocky fundamentals. I knew what I should be able to do, but didn't understand how to execute it or what all was going on.

Now, I will say that with hindsight, I am glad that things have gone the way they have. Over the past 2-3 months, I have:

- Wrestled with and largely overcome my fear of coding and pushing code live
- Experienced burnout, learned my limits, and set up healthier boundaries for myself at a sustainable pace that I am excited for
- Learned a ton of terminology and how to improve my communication with other developers
- Learned lots about web deployment, like using Pages and Firebase hosting, DNS redirects, performance testing, mobile-first development, and more of the logistics of serving a page to the general public
- Had a blast automating deployments using CI pipelines
- Worked as a project manager and junior developer on a website for a Wright State University club and developed my agile project management skills in more of a real-world environment
- Developed this site to chronicle and reinforce my learning in a far more structured and detailed method

For having first looked at Jekyll and starting this site only eight days ago today, I am extremely happy with how this log has come along. Being able to dynamically track everything and have summaries produced on the fly has been a great motivator so far, and I am very excited to continue posting moving forward.

That's not to say that I'm done developing for Learning Log, by any means! I still would like to build out the individual skill pages and develop progression, and automating copying data files and creating new pages would make it even easier to write posts.

Changes made today were:

- Added "top logged skills" which, really, is just a subsection of the top few entries in the skills table
- With top logged skills in stats now, it makes more sense for skills to be sorted by name, after all
- Added last logged date to the skills table
- Progression and category values now populating from skill collection pages
- Top references now sorted and correctly populating to stats page
- Added a basic template for skill pages

My skills data is currently skewed to specifically developing this site, so I am excited to balance things back out as I return to React development.

## Tasks

- [x] Sort and display the top logged skills correctly
- [x] Determine how to identify "last logged' value for Skills table
- [x] How to handle progression and category data for skill pages?
  - My thinking is that the skill pages should have this data, and if found, populate to the table.
  - Unsure how to handle/automate progression data. I don't think I can use Liquid in the skill page front matter.
- [x] Figure out how to create the top references output