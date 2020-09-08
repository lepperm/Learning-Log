---
layout: journal
title: "Imagine.Dat's D3 + React Workshop"
excerpt: My personal notes and next learning steps from attending an online D3 + React workshop.
author: Max Lepper
categories: [note]
tags: [d3]
date: 2020-08-22 13:15:28 -0400
modified_date: 2020-09-07 18:26:31 -0400
published: true
status: finished
confidence: log
importance: 1
context: false
skills: [d3, react, sass]
references: ["https://github.com/imagine-dat/d3-react-tutorial","https://github.com/imagine-dat/d3-react-advanced","http://renestep.com/","https://www.milufranz.com/","https://codepen.io/Milu5489/pen/NWxBLKK?editors=0110","https://codepen.io/ren_estep/pen/eYJwJQr","https://dev.to/milu_franz"]
timespent: 160
sleep:
workout:
---

## Journal

Today, I attended the D3 + React workshop hosted by Imagine.Dat! I have been looking forward to this for months.

### Outline
* TOC
{:toc}

### Workshop Repos

[https://github.com/imagine-dat/d3-react-tutorial]({{page.references[0]}})

[https://github.com/imagine-dat/d3-react-advanced]({{page.references[1]}})

- They highly recommend following along with the Main branch

### About the Group

Imagine.Dat is a Dayton group of creative visualizers of collected data.

- Rene Step - [http://renestep.com/]({{page.references[2]}})
- Milu Franz - [https://www.milufranz.com/]({{page.references[3]}})

### Basics (45 min)

#### D3 Definition

D3 - **D**ata **D**riven **D**ocuments

D3 is a Javascript library for data modeling.

#### SVG + React

A few examples of [SVG objects in a React component]({{page.references[4]}})

No logic in the component, just returning what we want the object to look like

#### D3 Install

Install with `npm install d3 --save`

Import with `import * as d3 from d3;`

#### D3 + React

We started by cloning the [basic repo]({{page.references[0]}}) and setting up with `npm install` and `npm start`.

For the tutorial, we started out in `00-clean-start`, which is a very very basic React app:

```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Your app goes here!
    </div>
  );
}

export default App;
```

##### `git checkout 01-generate-data-info`

First, making `helper.js` to generate and return a pair of random numbers.

Next, we import this into our `App.js` and we can verify that it does generate a set of data to the console.

Now we import a second hook `setInterval` to generate new data every 2 seconds. We can see this in the console again!

Nothing has displayed to the screen so far, so in our return function, we map this data to a string. We're using ` to wrap the string to include variables and logic. I'm unfamiliar with this, so I will add it as a learning objective!

##### `git checkout 02-bind-data-to-svg`

Next, we attach an svg circle to each data point.

##### `git checkout 03-add-animations-and-transitions`

We're using `npm install --save react-spring` to animate these data points. In the case of our tutorial repo, this dependency is already present in our package file, so `npm install` should have taken care of this.

```jsx
useEffect(() => {
    setIsAnimated(!isAnimated);
  }, [data]);
```

Make a useSpring `style` const and attach it to our react-spring hook.

```jsx
  const style = useSpring({
    config: {
      duration: 2000,
    },
    r: isAnimated ? 5 : 0,
    opacity: isAnimated ? 1 : 0,
  })
```

We'll attach this {...style} object to our animated.circle object. The spring hook supports a config, that lets us modify the animations.

##### `git checkout 04-responsiveness`

```jsx
// custom hook to watch for browser window resize :)
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
```

Our `updateSize` function will update our size state. The `window.addEventListener` will call the `updateSize` function any time the window is resized. We also want to call this function once to get our initial window size.

This gives us two stat variables to pass to `App()`:

```jsx
const [width, height] = useWindowSize();
```

We can now use these values to set our SVG viewBox size, our our `helper.js` input parameters and generateData hook, and our useSpring style to allow the circles to scale with browser size.

##### `git checkout 05-axes-and-scalability`

Start by creating a new component `Axis.js` to return a new SVG element, wrapping a path element. Add this in the app under the circles.

Next, let's import D3!

`npm install d3 --save`

In our `Axis.js` component:

`import * as d3 from d3;`

The `useMemo` hook is to help limit rerenders and make the code more efficient.

In our Axis function return, we iterate over our ticks with a translate offset. Each tick then gets a key value and a little style to make sure we can read it and it is located correctly.

We specified a scale of 0-100 across 300px. This is initially static, so now we want to make it dynamic as we resize the window.

Tell `Axis` to expect a `domain` and `range` prop, which uses our window width.

We want the ticks to rerun all of our calculations, so we need to pass these elements to the `useMemo` hook. React doesn't update for changes to values in arrays, only new elements in the array, so we join our array values as a string to trigger the update.

Last, our scale is getting cut off, so we have to scale our scale. The SVG view box gets the width value

```jsx
viewBox={`0 0 ${width} 40`}
```

```jsx
<path
  d={[
    "M", range[0], 6,
    "v", -6,
    "H", range[1],
    "v", 6,
  ].join(" ")}
  fill="none"
  stroke="currentColor"
/>
```

Our horizontal line does not go all the way across the screen, so we need to make this dynamic as well. The line is quite thick, so using `fill="none"` drops it down to 1px wide.

Finally, we removed the animations, as it was getting a bit difficult to see. All done!

### Break #1 (10 mins)

#### My Comments

There was a LOT of content in this last section, so it was kind of difficult to follow along with. It sounds like a recording will be made available, though, so I'll definitely be rewatching as soon as it's sent out.

#### Questions / Tips

We can use parent container size instead of window size for resizing to create dashboards.

### Advanced (45 mins)

#### Project setup

This project is using the `pokeapi.co` database as our data source. We will be using Node NPM commands to set up the project (which is great because that's what I'm familiar with).

Start with a basic create-react-app and then cd into the created folder:

- `npx create-react-app poketypes`

Once created, we want to install:

- `npm install d3 --save-dev`
  - Our visualization framework
- `npm install axios --save-dev`
  - Promise-based http client to make calls to the opensource data
- `npm install node-sass --save-dev`
  - Uses scss files

Next, install our create-react-app dependencies with `npm install` and then run with `npm start`. Easy peasy so far.

#### Project API

First, we're starting with creating a header component and a bubble component.

> ....and here is where they lost me immediately! So much happening all at once. I think I need to get more familiar with modern React best practices to be able to follow along with this section.
>
> I'm going to add some notes, but things moved so quickly, it was difficult to determine what I could write and if I had enough time to type something meaningful before we moved on. If the video files are made available later, I will definitely go back through the content slower, because it seems like an excellent practical example!

- Uses d3.pack() to flatten our data

- Both the header and bubble components will be imported to the app

- Axios calls are made with async/await wrapped in a try/get block to get our pokemon data, then feed this data into the bubble component.

#### Bubble chart

- Import useResize from `./Resize`

- Similar to the basic example, we set the viewbox to the width and height of the parent container

![image-20200822112136410]({{site.baseurl}}/assets/images/posts/2020/08/22/image-20200822112136410.png)

  > Here, my connection dropped out hard and my browser crashed, so I lost about 3-4 minutes trying to get reconnected.

##### CSS Takes Time

The comment was made that CSS takes time, especially when using a preprocessor like Sass. Here, we're using  `&__` nesting. I will need to read about this, as it looks like it helps increase our organization.

We're also using CSS variables instead of Sass variables, as they supposedly have more ability to interact with the DOM.

> There was a lot of CSS adjusting next, but since I was having trouble following along with the fundamental setup, I wasn't too sure what all of these changes were influencing.

#### Bar Graph

Recommended using [this codepen]({{page.references[5]}}) if I ever need a spinner.

![image-20200822114330334]({{ site.baseurl }}/assets/images/posts/2020/08/22/image-20200822114330334.png)

Lots of adding data to components, drawing SVG rectangles, and setting CSS to the finish line.

### Closing (10 mins)

#### Questions

Is React a light framework?

- Depends on what you're using.
- Suggested Vue.js and Preact

#### Extra Bits

- Many charting libraries are built on D3.

- Uber may have an open-source API for some data.

### Take-Away

In summary, I really need to build out my fundamentals. I've generated a short list of concepts that I need to explore further:

**Javascript**

- String variable notation
- Making API calls

**React**

- Using Hooks
- Components and state

**Sass** - "Some of the best docs"

- `&__` nesting
- ...most of Sass

[Milu's blog]({{page.references[6]}}) also looks like it covers Git and React Hooks, so I would like to read through these posts sometime!

## Tasklist

- [x] Attend D3 + React Workshop
- [x] Try to follow along as best as possible 😬
