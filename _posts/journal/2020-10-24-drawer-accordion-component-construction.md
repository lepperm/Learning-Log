---
layout: journal
title: "Drawer Accordion Component Construction"
excerpt: Building out checkbox and slider accordion components for the TDC Main App drawer.
author: Max Lepper
categories: [journal]
tags: [react,javascript,material-ui,tdc]
date: 2020-10-24 23:29:41 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [react,javascript,material-ui,css]
references: ["https://material-ui.com/components/slider/","https://stackoverflow.com/questions/61206613/how-to-change-material-ui-slider-thumb-style-when-its-disabled","https://material-ui.com/customization/components/","https://stackoverflow.com/questions/62902832/why-do-you-need-to-apply-the-two-generated-class-names-root-disabled-to-the"]
timespent: 650
sleep: 310
recreation: 65
workout: 10
---

## Journal

My two main objectives for today are to create drawer components and have the drawer contents build itself from the filters found in the token data. Some of this has already been partially figured out from yesterday, where I was able to map the token data as objects to token cards. My plan is to do the same thing here.

To give myself some sample data to work with, I created a `filters.json` file that has a full selection of all the filter categories and filter values we will expect to see in the final database, created from the True Dungeon Token Database (TDTD). I had all of this data compiled previously, so formatting it into a JSON object went very quickly, rather than trying to build it from our `tokens.json` file. My suspicion is that we will actually generate this data through Firebase, but we haven't covered specifics there just yet.

Similar to the token cards, I created a map that passes through the name of the main key, and then an object with the subkeys to each child component. Since I already had the checkbox accordion component started, that was quickly cleaned up and adjusted to accept the new data. There were a few CSS and grid tweaks, but very quickly it was building out each section in the drawer with every unique filter in my `filters.json` file!

Capitalization is inconsistent in TDTD for some filter values, so I adjusted the label to always ensure that the first character is capitalized, and that made things look much nicer.

With this completed, I spent some time going through and trying to clean up compiler errors. One big one was about "unique keys" for items in lists, so I added an `i` parameter to my maps and created keys based on the item name and `i` value, which seemed to resolve most of them. Admittedly, there was some trial-and-error before I got to that solution.

Next up was the [slider]({{page.references[0]}}) accordion component, to be used for Years. We want this element to have two handles, a minimum and maximum, and a fairly condensed layout, relative to a default slider.

The first challenge was getting our range established. I ended up first scraping out all non-number values into a new array of just numbers, which was then sorted in ascending order. From there, I could grab the values of the first and last elements and map them to `minValue` and `maxValue` respectively, which are then used to establish the min and max values of the Slider element itself. To handle two sliders, the value is declared as an array, and initialized with the min and max:

```jsx
const [value, setValue] = React.useState([minValue,maxValue]);
```

When the handles are moved, the new value gets set to the state correctly. I'm not sure if it's better to include all of the elements in-between or just the endpoints, but I assume that the endpoints should be sufficient.

Next up was the `yearless` parameter value. We hadn't talked about this much, so I wasn't quite sure how to handle this. My initial thought was to have an array of checkbox items populate under the slider, but then I instead opted for replacing the `All` option, and having that enable or disable the slider.

I was really struggling to get Material UI CSS rules to work for disabling the slider with the `yearless` checkbox. I tried a ton of variations in both `makeStyles` and a custom component `withStyles`. I was able to get the handles to change color, and explicitly set the track and rail colors, but I could not get them to work with the `disabled` flag. Digging through the code, it really looked like it should have worked, but I am most likely nesting something wrong. Eventually, I opted to instead simply collapse the section when `yearless` is checked, and apply the disabled colors on the handles for during the animation. I anticipate that this component may change the most, but all the major pieces are in place now!

## Tasklist

- [x] Post my daily updates on Product Lab
- [x] Post my daily updates on the TD Collection discord
- [x] Break main app elements into smaller components
  - [x] filter category accordions
    - [x] checkbox-style
    - [x] slider-style