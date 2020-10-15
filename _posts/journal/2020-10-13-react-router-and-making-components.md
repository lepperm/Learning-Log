---
layout: journal
title: "React Router and Making Components"
excerpt: Spending some time to try building the TDC main app page, learning how to use React Router, and identifying that I really need to learn Hooks.
author: Max Lepper
categories: [journal]
tags: [material-ui,react,tdc]
date: 2020-10-13 23:21:48 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [material-ui,react]
references: ["https://material-ui.com/components/drawers/#clipped-under-the-app-bar","https://material-ui.com/components/accordion/#controlled-accordion","https://material-ui.com/components/checkboxes/#checkbox-with-formcontrollabel","https://reactrouter.com/web/guides/quick-start","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals","https://developers.google.com/web/updates/2015/01/ES6-Template-Strings","https://stackoverflow.com/questions/44796786/how-to-set-a-background-image-in-reactjs","https://www.w3schools.com/js/js_arrow_function.asp"]
timespent: 355
sleep: 310
recreation: 0
workout: 0
---

## Journal

As a learning exercise, I wanted to take some time to try and start building out the main app for TD Collection. Going off of our layout from the previous night, my thinking was to structure the components as follows:

- AppBar (ideally reused from landing as Navigation component)
  - Icon
  - Search Bar (Added for app)
  - Icon Button (user account)
- Main content
  - Chip div
    - Chips (representing active filters)
  - Token Grid
    - Grid item
      - Token Card
        - Card Image (token)
        - Card Content
          - Token Name
          - Token details
          - Icon button (add to collection)
- Left-hand Drawer (clipped persistent)
  - Map of category filter names array =>
    - Accordion (filter category by name, "controlled" to only one open at a time)
      - Accordion summary
        - Category filter title
        - "All" checkbox
        - Expand icon
      - Accordion details
        - Grid container
          - Map of category filter contents array =>
            - Grid item
              - Checkbox

First off, though, I had to build routes so that users can navigate from the landing page to the main page. From AGWSU, [React-Router-Dom]({{page.references[3]}}) seems like the right tool for the job. I took a little time to familiarize myself with the basics and then set out to put it in motion. I made `Route` elements for the landing page and the main app (which I called `/tokens` for now), and put those elements inside a `Switch` inside the `BrowserRouter` element, which lives in the top-level `App.js` file.

For the endpoints to these routes, I used anonymous functions with [arrow notation]({{page.references[7]}}) (which I'm trying to be mindful of and sprinkle in more) to create objects assembled from components that would form the destination page:

```javascript
const LandingPage = () => (
  <div>
    <Navigation />
    <Landing />
  </div>
);
```

My thinking is that this will give me flexibility moving forward to have my routing and pages somewhat insulated from each other, and keep things easier to work on.

Over in `Landing.js` and using `withStyles`, I was able to get the "GET STARTED" text cleaned up by removing the underline and setting theme text. I'd like to make this visually pop in some way, but I'm not entirely sure how to do it yet.

In the main app, the first thing I looked into was the `Drawer`, where our token filters will live. For the `Drawer` element, we've discussed using the [clipped variant]({{page.references[0]}}) so that the AppBar comfortably nests over top. We will most likely want the `Drawer` to tuck away on mobile, but those plans have not yet been solidified.

Trying to get the `Drawer` to clip under `AppBar` proved to be more challenging than expected. The example from Material UI uses function-based components and hooks, however I have been using classes through AGWSU up to this point.

I'm sure there's a pretty easy way to work around this and get it functional with classes that I'm missing in my currently shallow-ish understanding of Javascript, however with our October 31st deadline, I get things working **now**. Neal has mentioned wanting everything to be using Hooks, so it'll be a double-boon to try and prioritize trying to learn how to use them over the next few days. For the time being, I left the drawer as-is, because I'm more concerned at learning and trying to implement the structure than the specifics right now.

Next item in is the `Accordion`. Similar to the `Drawer`, the "controlled" variant uses hooks and so I implemented a basic structure, with `AccordionSummary` for the collapsed state and `AccordionDetails` for the expanded contents. We want "all tokens" to be the default when a new user reaches the page for the first time, so each filter category will get an "all" summary view `Checkbox` (with `FormControlLabel`) to quickly toggle category options on or off.

In the details, nearly all categories will utilize checkboxes (again with labels) with few exceptions. While we could theoretically stuff the accordion full of checkboxes, they would be much easier to read if arranged as a grid, so a `Grid` container is the top-level item under the details.

The first category I was working on has 24 discrete filter values, and this is a low enough level that I could try mapping the values to components instead - which worked out great! I hard-coded an array of 4 values and mapped those to a `Grid` item containing a `FormControlLabel` with a `Checkbox` and it cleanly populated all 4 checkboxes within the `Accordion`.

```javascript
{%- raw -%}
<AccordionDetails>
  <Grid container spacing={1}>
    {["Common", "Uncommon","Rare","Ultra Rare"].map((value) => (
      <Grid item xs>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              color="primary"
              size="small"
              inputProps={{ 'aria-label': value + ' checkbox' }}
            />
          }
          label={value}
        />
      </Grid>
    ))}
  </Grid>
</AccordionDetails>
{% endraw %}
```

A few things at this point - the "all" checkbox was positioning itself weirdly so I need to look into that, and hard-coding these filter values sounds gross. Being able to map both the filter category names AND values to build the entire Drawer contents seems like the most flexible way to go. Getting a unique list of filter categories and their properties shouldn't be too bad once all the data is loaded into the database, but I will need to look into how to properly transfer nested arrays into maps. My initial thought is that I could do some kind of key / value paired object, so I'll add that to my learning list next to hooks.

{% include blog-img.html source="/assets/images/posts/2020/10/13/AccordionCheckboxes.png" alt="The new accordion section, complete with mapped checkboxes" %}

I've been falling behind on Product Lab and Learning Log lately, so I'm trying to slowly make up lost time. If you're reading this and you happen to be in Product Lab with me - that's right, I'm plagiarizing myself! Some content has been dropped in over here verbatim, but I'm trying to add more details over here and massage in supporting information when applicable. I'm still about half a day behind, so fingers crossed that I'll get there eventually! I need to prioritize progress and learning over writing, but it feels nice to have my head above the self-imposed water.

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Create tasks for tomorrow of things that I need to look into