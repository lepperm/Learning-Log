--- 
layout: progression
name: react
fullname: React
mainsite: https://reactjs.org/
category: Javascript library
progressionEntries: 
  - 
    id: 1
    status: OK
    name: Intro to React
    item: https://reactjs.org/tutorial/tutorial.html
    type: Project
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: Tic-Tac-React
    relprojlink: https://gitlab.com/maxlepper/tic-tac-react
    datecomp: 5/10/2020
    datelink: https://gitlab.com/maxlepper/tic-tac-react/-/commit/24de5a9dd6c80a2082efd247ce82eef4d88114ca
  - 
    id: 2
    status: IP
    name: Intro to React - Extra Credit (4/6)
    item: https://reactjs.org/tutorial/tutorial.html#wrapping-up
    type: Project
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: Tic-Tac-React
    relprojlink: https://gitlab.com/maxlepper/tic-tac-react
    datecomp: 
    datelink: 
  - 
    id: 3
    status: UN
    name: Start Learning React
    item: https://egghead.io/courses/start-learning-react
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 4
    status: NS
    name: Learn React
    item: https://scrimba.com/course/glearnreact
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 5
    status: NS
    name: Getting Started with React (2019 Edition)
    item: https://scotch.io/starters/react/getting-started-with-react-2019-edition
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 6
    status: UN
    name: Demystifying React Hooks
    item: https://dev.to/milu_franz/series/7304
    type: Blog
    price: 0.0
    est-duration: 18
    est-benefit: 5
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 7
    status: OK
    name: React Hooks - My Introduction
    item: https://medium.zenika.com/react-hooks-my-introduction-81b15e6eff20
    type: Blog
    price: 0.0
    est-duration: 8
    est-benefit: 5
    act-benefit: 3
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 8
    status: OK
    name: Learn React Hooks In One Hour
    item: https://scrimba.com/course/greacthooks
    type: Course
    price: 0.0
    est-duration: 60
    est-benefit: 6
    act-benefit: 8
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 9
    status: OK
    name: Understanding Functional Components vs. Class Components in React
    item: https://www.twilio.com/blog/react-choose-functional-components
    type: Blog
    price: 0.0
    est-duration: 8
    est-benefit: 6
    act-benefit: 9
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 
    status: NS
    name: Leveling up with React - React Router
    item: https://css-tricks.com/learning-react-router/
    type: Tutorial
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 
    status: NS
    name: Leveling Up With React - Container Components
    item: https://css-tricks.com/learning-react-container-components/
    type: Tutorial
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 
    status: NS
    name: Leveling Up with React - Redux
    item: https://css-tricks.com/learning-react-redux/
    type: Tutorial
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 
    status: NS
    name: Build a movie search app in React
    item: https://scrimba.com/course/greactmovie
    type: Project
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 
    status: NS
    name: Build an app with React and GraphQL
    item: https://scrimba.com/course/greactgraphql
    type: Project
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 
    status: NS
    name: Environments in Create React App
    item: https://serverless-stack.com/chapters/environments-in-create-react-app.html
    type: Blog
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
  - 
    id: 
    status: NS
    name: Setting up a React Toolchain
    item: https://reactjs.org/docs/create-a-new-react-app.html
    type: Official Docs
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: 
    relprojlink: 
    datecomp: 
    datelink: 
resources: 
  - 
    refname: React.js Examples
    reflink: https://reactjsexample.com/
  - 
    refname: Hooks at a Glance
    reflink: https://reactjs.org/docs/hooks-overview.html
  - 
    refname: Rules of Hooks
    reflink: https://reactjs.org/docs/hooks-rules.html
---

* TOC
{:toc}

## Components

[Components](https://reactjs.org/docs/components-and-props.html) are the building blocks created with React, and can be used to split a UI up into independent reusable pieces.

Components consume `props`, which are arbitrary inputs, which can be used to manipulate how the component displays.

Values, passed as `props`, can be delivered to user-declared components as such:

```jsx
const element = <Welcome name="World" />;
```

Props should be named from the component’s own point of view, rather than the context in which it is being used.

Components can be built up of further components, allowing for high abstraction and flexibility. The general recommendation is that if a component is used several times or is complex, it is a good candidate to be extracted to a separate component.

### Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Class components tend to be more verbose and typically require a minimum of `constructor()` and `render()` lifecycle methods, and may take advantage of other lifecycle methods such as `componentDidMount()` (runs after component rendered to DOM) and `componentWillUnmount()` (runs as the component is being removed from the DOM).

Class components are known as "stateful," as they can implement logic and state.

### Function Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Function components utilize hooks to simplify accessing lifecycle methods. They are also considered "stateless," as they simply accept data and display it in some form.

Or at least, this used to be the case. With the introduction of React Hooks in React 16.8, function components have rapidly gained functionality, and are the current preference for component construction.

Functional components can also be declared in the `export` to keep things exceptionally tidy:

```jsx
import React, { useState } from 'react'

export default function MyComponent() {
  
}
```

`{ useState }` within our import is destructured from React so that it can be used directly instead of `React.useState()`.

## Props

Props passed to a component are read-only, and should not be modified. The rule is:

> **All React components must act like pure functions with respect to their props.**

As an example:

```jsx
function sum(a, b) {
  return a + b;
}
```

...is a pure function, as it always returns the exact same results for the same inputs.

## State

State is similar to props, but is private and fully controlled by a component.

While `<Clock date={new Date()} />` would make the date object accessible within `Clock` via `{this.props.date.toLocaleTimeString()}`, using state allows the date object to be fully self-contained within `Clock`:

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

While state can be initialized with `this.state`, it can also be updated with `this.setState()`. `this.state` can ONLY be assigned in the constructor.

Directly modifying the state value will not re-render a component! Using `setState()` will trigger the re-render correctly.

Updates to both props and state may be batched asynchronously by React for performance, and may be unreliable to use to set state.

**UNRELIABLE:**
```jsx
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

To counteract this, `setState()` can alternatively accept a function that uses the previous state and the updated props to update state once properly processed.

**CORRECT:**
```jsx
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

...which can be simplified further with arrow notation:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

The state can contain multiple independent variables, and each can be updated independent of each other with separate `setState()` calls. The merge is shallow, so only the state variables passed to `setState()` are replaced.

## Hooks

Hooks are powerful functions that expose class-like capabilities to functional components. The most commonly used hooks are `useState()` and `useEffect()`, and many have direct similarities to class lifecycle methods.

### Rules

1. Only call Hooks at the top level
2. Only call Hooks from React functions

### Conversion Reference

| Classes                                                                              | Hooks                                                                                    |
|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| constructor(props) {<br>  super(props)<br>  this.state = { varName: initValue }<br>} | const [varName, setVarName] = useState(initValue);                                       |
| componentDidMount() {<br>  console.log("Hello");<br>}                                | React.useEffect(() => {<br>  console.log("Hello");<br>}, []);                            |
| componentWillUnmount() {<br>  console.log("Bye");<br>}                               | React.useEffect(() => {<br>  return () => {<br>    console.log("Bye");<br>  }<br>}, []); |

### `useState`

In a class component, state is declared like this:

```jsx
constructor(props) {
  super(props)
  this.state = { date: new Date() }
}
```

Without implementing the constructor and calling `super(props)`, all the state variables that you are trying to use will be `undefined`, per [the React documentation](https://reactjs.org/docs/react-component.html#constructor).

In a function component, however, the `useState()` hook allows you to set both a variable (left) and a function to update the value of said variable (right):

```jsx
const [time, setTime] = useState(new Date());
```

`useState` is imported from React, and can either be accessed by `React.useState()` or deconstructed at import with `{ useState }` and accessed directly.

Let's look at an iterative example. Given a state variable `count`:

```jsx
const [count, setCount] = useState(0)
```

...let's say we have a button to increase the value of `count` by one per click:

```jsx
<button onClick={setCount(count + 1)}>+</button>
```

Declaring the function this way executes immediately, however, so we want to use an in-line function to have it execute on the click:

```jsx
<button onClick={() => setCount(count + 1)}>+</button>
```

State updates are processed asynchronously, so by using the state variable directly, we are relying on the current state of `count` and run the risk of calling `setCount` with an outdated value. We can counteract that by passing a function, with the current state as it's argument, to `setCount` rather than a value directly:

```jsx
<button onClick={() => setCount(currentCount => currentCount + 1)}>-</button>
```

For related state variables, it may be helpful to declare them in groupings using destructured arrays:

```jsx
const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])

setWindowSize([window.innerWidth, window.innerHeight])
```

### `useEffect`

The `useEffect` hook takes the following parameters:
- A function to execute on trigger
- An array of things that should trigger the effect when updated
  - An empty array will only run on the first render
  - A missing second parameter will create an infinite loop

```jsx
useEffect(getValue, [])
```

When a target prop is updated, the `useEffect`'s function will run.

### `useRef`

We can utilize `useRef` to get a reference to a DOM element.

Add `ref={}` within the target element properties. The reference variable itself is an option with value `.current` that is set to the current value.

```jsx
const inputRef = useRef()

useEffect(() => {
  inputRef.current.focus()
}, [])

<input ref={inputRef} ...>
```

In another example, we can use the reference to get useful information:

```jsx
const headerRef = useRef({ offsetHeight: 0 })

<header ref={headerRef}>

<Canvas
  color={activeColor}
  height={window.innerHeight - headerRef.current.offsetHeight}
/>
```

### `useCallback`

`useCallback` utilizes the exact same pattern as `useEffect` - a function (or functional component in our case), and an array of conditions:

```jsx
export default function Playground() {
  const [count, setCount] = useState(30)
  {...}
  const cb = useCallback(num => console.log(num), [count])

  return (
    <div>
      {...}
      <Calculate cb={cb} num={count} />
    </div>
  )
}

function Calculate({ cb, num }) {
  cb(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
}
```

In the example above, the `num` will be updated in the console every time that `count` is updated.

### `React.memo`

Going back to `useCallback`, we can use `React.memo` to check and see if the inputs are the same, and not render if they are:

```jsx
const Calculate = React.memo(({ cb, num }) => {
  cb(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})
```

### `useMemo`

`useMemo` can be utilized to cache the results of long equations for reuse.

```jsx
useCallback(() => console.log('useCallback')) // return the function
useMemo(() => console.log('useMemo')) // return the result of the function
```

### Custom Hooks

Names for custom hooks should start with `use`, similar to `useState` and the other native react hooks. Formatting of the actual functions are similar, as well.

Try to make them as small, composable, and reusable as possible!