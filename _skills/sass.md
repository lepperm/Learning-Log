--- 
layout: progression
name: sass
fullname: Sass
mainsite: https://sass-lang.com/
category: Extension language
proficient: false
progressionEntries: 
  - 
    id: 1
    status: UN
    name: Getting Sassy With CSS
    item: http://www.sassshop.com/#/
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
    id: 2
    status: OK
    name: Sass Basics
    item: https://sass-lang.com/guide
    type: Official Docs
    price: 0.0
    est-duration: 10
    est-benefit: 10
    act-benefit: 10
    relproj: Portfolio
    relprojlink:
    datecomp: 12/15/20
    datelink:
  - 
    id: 3
    status: OK
    name: Learn Sass In 20 Minutes
    item: https://www.youtube.com/watch?v=Zz6eOVaaelI
    type: Video
    price: 0.0
    est-duration: 20
    est-benefit: 7
    act-benefit: 7
    relproj: Portfolio
    relprojlink:
    datecomp: 12/15/20
    datelink:
resources: 
  - 
    refname: Official Sass Syntax
    reflink: https://sass-lang.com/guide
--- 

## Variables

Prefix variables with a `$` symbol:

```sass
$textColor: black;
```

## Structure

Sass allows for nesting elements.

```css
body {
  background: red;
  p {
    background: blue;
    &:hover {
      background: yellow;
    }
  }
}
```

This is the equivalent of:

```css
body {
  background: red;
}

body p {
  background: blue;
}

body p :hover {
  background: yellow;
}
```

## Importing

Sass files can be broken out into individual files and imported.

Prefix your files with an underscore like `_{filename}.scss`, which is referred to as a "partial." In your main Sass file, this can now be imported as:

```css
@import './{filename}';
```

## Extending

If we want to reuse rules from an existing class, we can extend the class we want to replicate:

```css
@extends 'header';
```

From there, we can override those styles locally, as Sass still cascades top to bottom just like regular CSS.

The classes we extend can be in the same file, imported, or use a special placeholder class with the `%` symbol:

```css
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
  color: #AAA;
}
```

## Mixins

Mixins are prepackaged chunks of CSS that was can easily include in multiple places! Think of them like functions in JavaScript.

`@mixin` is used to declare the template content, and `@include` is used to import it into the CSS rule.

```css
@mixin flexCenter {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  @include flexCenter();
}
```

But what makes mixins really powerful is in the function-like capabilities. If we add variables as properties to `flexCenter`, we can pass CSS values into the mixin:

```css
@mixin flexCenter($direction, $background) {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
  background: $background;
}

p {
  @include flexCenter(column, blue);
}
```

## Operators

Sass supports standard math operators +, -, *, /, and %.

```css
img {
  float: left;
  width: 600px / 960px * 100%;
}
```