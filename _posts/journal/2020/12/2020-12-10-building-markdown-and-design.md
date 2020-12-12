---
layout: journal
title: "Building, Markdown, and Design"
excerpt: Reviewing my experience laying out my design so far and making a decision that might work out or end up being a... learning opportunity, and compiling resources on learning design and rendering Markdown.
author: Max Lepper
categories: [journal]
tags: [portfolio, design]
date: 2020-12-10 23:44:12 -0400
modified_date: 2020-12-11 19:21:06 -0400
published: true
status: live
confidence: log
importance: 2
context: true
comments: true
skills: [general]
references: ["https://stackoverflow.com/questions/31875748/how-do-i-render-markdown-from-a-react-component","https://github.com/remarkjs/react-markdown","https://github.com/highlightjs/highlight.js","https://github.com/gregnb/react-to-print","https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components","https://react-pdf.org/advanced#on-the-fly-rendering","https://github.com/ivmarcos/react-to-pdf","https://www.reddit.com/r/web_design/comments/k9yyzq/how_do_you_guys_go_about_designing_webpages_i_see/","http://dylanbritz.com/post/web-developer-roadmap-for-2021"]
timespent: 285
sleep: 250
recreation: 30
workout: 30
---

## Journal

{% include focus-box.html focus="Learning, Producing" theme="Portfolio" %}

Not to establish a schedule and immediately discard it, but it is critical that I get my portfolio and resume reworked quickly, as my job search is currently less effective with these being incomplete. For the rest of this week and probably also next week, these will be my objectives.

When I left off yesterday, I was feeling pretty iffy (yes, that's the technical term that I'm going with) about the look of my portfolio so far. All the parts seem to be in good, logical places and with decent whitespace, yet it wasn't really getting me excited or inspired at all. After going to bed late with something I felt ashamed to post, it felt like I had spun my wheels all night and wasted the time.

Maybe I'm placing too much emphasis on appearances while going for a developer role, but I've always wanted to brand and present myself well and with good clean simple aesthetics, and an understanding of design will help me to be a stronger developer and better teammate. This will take time and dedicated effort to learn about, practice, and develop.

But I also have to wonder just how much of this I need to do _right now_. Could I make my first impression a bit more solid if I go away and really study for a few weeks and come up with a professional design? Probably. Or does it make more sense to get started building something, get it out there, and have something for people to get impressions of in the first place?

Where I am, right now, I am leaning towards **shipping** - I can build things, and I can launch quickly, and I can refactor and iterate. I can ship now, go learn design, and come back later - the impressions I would miss out on now by not shipping would be the technical and creative feedback, the networking and conversations, and all the learning experiences.

Last night in Framer, things seemed like they had the potential to be very powerful, but I quickly found myself at the point where I would need to start creating custom components. Maybe that's not accurate and I'm just not thinking within the tools of the platform well enough, but it seemed like double work almost, to create JS to fake a certain behavior in the prototype, versus just building the behavior for real in the actual portfolio! I have experience with Material UI and React, and I've done a pretty decent job (if I can say that to myself) building the frontend for [TD Collection](https://tdcollection.net/) based on two static images.

Speaking of TD Collection, it had been bugging me, so I very quickly made a tweak to the style rules so that all the token cards will be the same height in each row. It makes a big visual improvement for four simple CSS changes!

Researching for inspiration, I've looked at over a hundred portfolios in total over the past few weeks and they seem to fall in three major categories:

1. The Long Page (probably around 45% of the sites I saw)
   - Page content is a single continuous scroll, usually showing either a progression or a certain order of chapters.
2. The Fixed Window (about 35%)
   - One category of information is displayed to the user at a time, with the focus being centered in the middle of the window. Main screen elements often have a second detailed page with scrolling.
   - This is the format I'm currently looking to implement.
3. The Art Project (about 20%)
   - Advanced technical and artistic execution, often with 3D rendered components and scenes, complex and layered parallax, or custom visual effects.
   - Awwwards has lots of these, haha.

My samples are naturally heavily biased towards the portfolios that I thought looked interesting enough to click on, and in no way represents an accurate or fair market distribution (which probably leans more heavily on the long and art formats, if I had to guess).

This being said, I feel like the core "idea" for the site - a single page with focused info in the center - it's too wild or uncommon. The draft in Framer was definitely helpful to start thinking through how to structure the elements relative to each other, and I think I'm familiar enough with building things in Material UI now that I can start blocking things out. If this is some kind of anti-pattern that I'm falling into, please warn me in the comments!

This blog post wasn't written chronologically, however, and this decision about the actual build was the last thing I worked on tonight before it was getting late into the evening. Today was a very frantic and stressful day at work, trying to ship a new application and capture all our production information within a window of a few hours, so with me also not sleeping well yesterday, I'm exhausted. While I don't have any changes worth pushing to my repo tonight, I feel good overall about the information compiled.

For my resume, I'm thinking that a Markdown page will be sufficient for right now, as I can always make a more stylized-looking document at some point in the future if I want to be extra and have a whole cohesive branding suite. A friend recently did this (the markdown resume, not the branding suite) and it turned out great, so it will be neat to try! I'm not sure what all it takes to render Markdown, so I [did some reading]({{page.references[0]}}) on Stack Overflow.

For packages, [`react-markdown`]({{page.references[1]}}) seems to be pretty solid. I also stumbled across a package for syntax highlighting called [highlight.js]({{page.references[2]}}). I don't think I will need it immediately, but nice to take note of for in the future!

It would be neat if I could have specifically only the Markdown section print, if I render the resume in the page - navbar, footer, and all. Not sure how often people are physically printing off resumes these days, but it would hopefully also work well for PDF. [`react-to-print`]({{page.references[3]}}) seems promising for this.

Alternatively, I could build it in HTML, which would give me some more robust options for styling, but it sounds like [injecting styling into prints can be an issue]({{page.references[4]}}) depending on the approach.

[`react-to-pdf`]({{page.references[6]}}) looks like a solid contender, and it has a codepen example - perfect! I added some inline styling and created a non-`ref` `div` outside of the printable content but on the same page:

{% raw %}

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "./styles.css";
const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p style={{ color: "red" }}>Hello I have style</p>
      </div>
      <div>This content shouldn't print!</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

{% endraw %}

This worked like a charm! My style text printed red, and the non-printing `div` was nowhere to be found in the document. I think this will work out well, if this is the route I want to take.

One thing I'm unsure of is rendering differences between browsers. Whereas I feel Markdown stands a slightly better chance of rendering pretty consistently, there might be some differences with the HTML and CSS version of the same content. I might think on this for a bit. In the meantime, I can still work on typing everything up in a Markdown style.

I was sent a [thread on design]({{page.references[7]}}) and read through tips from other developers on how they come up with their layouts. After reading through, I would like to make a progression page for intentional design studies with some of the topics and resources referenced:

- Basics / fundamentals / principles of UI
- Typography
- Color theory
- "Refactoring UI" (watch/read)
  > "After committing about 5 hours total to the book and videos on Youtube, I can definitely say my design savvy has skyrocketed"
- Grid Systems in Graphic Design by Josef Muller Brockmann
- Inspiration sites
  - Behance
  - Lapa Ninja
  - Onepagelove
  - Dribbble
  - Be mindful to not confuse aesthetics with functional design! Many inspiration sites are NOT client work and only exist on these platforms
- <https://narvaezdelamora.com/web-design-flow/>
- "Progressive enhancement". Implement the UI first, bare minimum with layout and elements that facilitates navigation + input. Then enhance (e.g. with graphics, composition, fonts, etc)

I was also able to find a [video introduction crash-course]({{page.references[8]}}):

- [ ] [Design for Non-Designers](https://www.youtube.com/watch?v=ZbrzdMaumNk) (97m)
- [ ] [Learn UI Design Fundamentals](https://scrimba.com/learn/design) (~60m)
- [ ] [Beginning Graphic Design: Fundamentals](https://www.youtube.com/watch?v=YqQx75OPRa0) (6m)
  - [ ] [Beginning Graphic Design: Color](https://www.youtube.com/watch?v=_2LLXnUdUIc) (6m)
  - [ ] [Beginning Graphic Design: Typography](https://www.youtube.com/watch?v=sByzHoiYFX0) (6m)
  - [ ] [Beginning Graphic Design: Layout and Composition](https://www.youtube.com/watch?v=a5KYlHNKQB8) (6m)
  - [ ] [Beginning Graphic Design: Branding and Identity](https://www.youtube.com/watch?v=l-S2Y3SF3mM) (6m)
- [ ] [The Principles of Design . . . Defined!](https://www.youtube.com/watch?v=k1npitnxdQs) (2m)
- [ ] [Typography Tutorial - 10 rules to help you rule type](https://www.youtube.com/watch?v=QrNi9FmdlxY) (4m)
- [ ] [How To Use Color — Color Basics](https://www.youtube.com/watch?v=QkCVrNoqcBU) (7m)
- [ ] [Layout and space in UI design](https://www.youtube.com/watch?v=WOagiK0itaw) (7m)
- [ ] [Perfecting Contrast in UI Design](https://www.youtube.com/watch?v=UWr-HAamc70) (13m)

As far as time commitments, most of those are not too bad! I might try to run through some of these videos tomorrow if I can get to them before being at my computer.

## Tasklist

- [ ] Rewrite my resume, no formatting
- [ ] ~~Create the layout in a design environment~~ Using current draft as structural inspiration
