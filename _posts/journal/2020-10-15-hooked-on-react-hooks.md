---
layout: journal
title: "Hooked on React Hooks"
excerpt: Continuing my dive into React Hooks.
author: Max Lepper
categories: [journal]
tags: [react]
date: 2020-10-15 23:02:41 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript]
references: ["https://dev.to/milu_franz/series/7304","https://medium.zenika.com/react-hooks-my-introduction-81b15e6eff20","https://scrimba.com/course/greacthooks","https://reactjs.org/docs/hooks-overview.html","https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578","https://reactjs.org/docs/hooks-rules.html"]
timespent: 170
sleep: 330
recreation: 45
workout: 0
---

## Journal

A kick-off video chat for Product Lab is scheduled for early tomorrow morning, so I'll need to wrap things up early tonight and head to bed at a reasonable time, lest I sleep right through the call!

My objective today is to continue with my React Hooks learning from yesterday. Looking at my schedule, actual code may fall back to tomorrow or Saturday.

I read a few different articles and then started back into the [1-hour introduction class to React Hooks]({{page.references[2]}}) (which is decidedly _not_ 1 hour if you're trying to take notes and do the challenges as you go).

One really interesting concept proposed in the React Hooks course was both reusing values within hooks and using the return statement to clean them up:

```jsx
useEffect(() => {
  let timeoutId
  const handleResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight])
    setVisible(true)
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => setVisible(false), 500)
  }
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
```

I also encountered the [Rules of Hooks]({{page.references[5]}}), and saw that the page contains an ESLint plugin to enforce the rules, which may be neat to try on my portfolio site when I rebuild it.

The day went by incredibly fast and I can't believe I'm already past when I said I'd head to bed! I'm excited to meet my teammates for Product Lab in the morning!

## Tasklist

- [ ] Post my daily updates on Product Lab
- [ ] Post my daily updates on the TD Collection discord
- [ ] Look into React Hooks
  - [x] Complete React Progression [item #7]({{ site.baseurl }}/skills/react#7)
  - [ ] Complete React Progression [item #8]({{ site.baseurl }}/skills/react#8)
- [ ] Work on TDC Landing Page layout
- [ ] Push commit of updated layout and routing with main app scaffolding, short-circuit "GET STARTED" link to Landing, for now