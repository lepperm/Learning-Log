---
layout: journal
title: "One Hundred Shiny New Tokens"
excerpt: Building out components for TD Collection, getting token cards working with our sample data, and lots of new adjustments and features.
author: Max Lepper
categories: [journal]
tags: [react,javascript,material-ui,tdc]
date: 2020-10-23 23:44:08 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,material-ui,css]
references: ["https://kirstyburgoine.wordpress.com/2018/01/21/iterating-through-json-data-in-react/","https://medium.com/javascript-in-plain-english/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526","https://stackoverflow.com/questions/62587636/material-ui-passing-icon-as-a-prop","https://reactjs.org/docs/hooks-reference.html#useref"]
timespent: 470
sleep: 380
recreation: 40
workout: 0
---

## Journal

Neal has said that he'll be back Sunday, and then I'm heading out on the road for work Monday. I'll be back basically just for Halloween, and then out of town again for a few days. With the amount of time I have left to contribute before the end of the lab, I really want to get things polished up so that I have my best work live before Neal dives in.

The first thing to tackle was creating the token card component. It was easy enough to extract the structure I had so far from the Main App mapping. Right now, I'm passing each value in as a discrete prop, which seems like a really inefficient and impractical way of doing things but it was something I could do quickly. I'd like to instead pass through a neatly-contained token object, which I believe would be more flexible to changes in how the data is delivered.

With this in mind, I set out to try and learn JSON objects a bit better. It took me a bit to understand how to access and pass objects at different levels. For example, I couldn't map `tokenData` directly, and had to use `Object.keys(tokenData)` to create a map of the main keys. To then access the subkeys, I had to use `tokenData[key].subkeyValue`. I found a great blog post that does a nice job [talking through accessing data within JSON objects]({{page.references[0]}}).

With this in place, I took my sample token data and created more entries to map, slightly changing each value, and this worked well!

The next issue was getting the token images to dynamically be required. I was able to specify a fallback and wrap the request in try...else tags, but even for images that I verified were in my image asset folder with the exact same file name, they just weren't getting correctly scooped up into the build folder. Some [examples I referred to]({{page.references[1]}}) made it look like it should be super easy,but I just was not having success.

Turns out, I was using curly braces where they didn't make sense, but it took going away for a bit and coming back to realize the simple error. Here's the final fallback image require function:

```jsx
const fallbackRequire = () => {
  try {
    return require(`../../images/tokens/${image}`);
  }
  catch (e) {
    return placeholderToken;
  }
}
```

Now matching images are correctly added to the build folder like a charm! Adding `radius: 50%` to the CSS gives the tokens a great clean look that allows the `onHover` styling to show through on the background.

With the token cards looking and working the way I wanted, it was time to take the next step. I was able to remove my dummy data for the tokens and drop in the actual token sample data file. Right away, it fully populated all 100 tokens successfully to the body of the Main App!! 😄🎉

Next up was to go about reintegrating the Navigation component, as it was manually recreated in the Main App. I added a `searchBar` prop to toggle the search bar visibility and allow the same nav component to be reused between Landing and Main App.

Next up, I made a feature card component for the Landing page features. My thinking is that, as we develop more features, we could have these cycle through on the Landing page. These went together really quickly, and in the process, I learned that [you can pass entire components into components]({{page.references[2]}}), super cool!

Switching back to the search bar component, I next wanted to properly get the input field data and add it to state. This gave me some hands-on practice with [`useRef`]({{page.references[3]}}) and using `onChange` and `onClick` to get the current field values, as well as writing the final value to state when submitted. Everything outputs to the console and an alert box right now, but it demonstrates that things are updating appropriately.

Winding down, I worked on documentation, testing, and tweaking a few small details. Pushing up the code, I noticed that the pipeline timed out and reported a memory error during our Testing stage. I tried increasing the timeout, but we still ran out of memory, so this might be a question for Uriah, whom I've been told is an expert in testing and DevOps. All-in-all, I'm super pleased with the amount of progress I made today!

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Break main app elements into smaller components
  - [x] token card
  - [x] feature card
  - [ ] filter category accordions
- [x] Add a search bar to the navigation component
  - [x] Access the search bar field, write submitted value to state?