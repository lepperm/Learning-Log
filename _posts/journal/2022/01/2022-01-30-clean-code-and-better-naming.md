---
layout: journal
title: "Clean Code and Better Naming"
excerpt: Learning to improve my approach to variable and function naming and keeping my code clean.
author: Max Lepper
categories: [journal]
tags: ["clean code"]
date: 2022-01-30 19:31:28 -0400
modified_date:
published: true
status: live
confidence: log
context: true
comments: true
skills: [general]
references: ["https://scrimba.com/learn/cleancode/clean-code-introduction-cKgJpPhq"]
timespent: 300
---

## Journal

Following my assessment, I've been feeling really inspired to dig into some courses I've had in my backlog! My client site is in the process of going through some new changes, partnerships, and scaling, but I'm hopeful that I can squeeze in a bit more studying. With that, I'm checking out [Scrimba's Clean Code]({{page.references[0]}}) course.

* TOC
{: toc}

## Clean Code

The instructor of this course opens with a strong point - 90% of development is reading code! We need to be able to understand how it works and also communicate what our contributions are to others more effectively with "clean code."

This means, we want our code to be more:
- Searchable
- Readable
- Understandable
- Testable
- Automatable

More readable code is **more valuable** than less lines of code!

We can automate correcting and enforcing some code writing patterns with the aid of a linter - I'm currently using Prettier on most things and running my rules automatically when saving. What I didn't realize is that we can have linters do more than just clean up new lines, white space, and curly brace positioning, but we can also have it enforce structural patterns and guidelines. This would be things like, not using console.logs, or initializing variables at the top of functions. I'd love to help enforce a consistent pattern between how I declare and initialize elements! This course doesn't cover configuring a linter, though, so that's an exploration for a different time.

We can further improve and/or automate things with spell checkers, git hooks, unit and integration testing, and by learning and using solid principles and design patterns.

### Variables

> "Choose a name that describes what it does, but not how it does it"

Don't always settle on your first variable name! A good variable will:
- often replace comments
- make what it is descriptive
- help a non-technical person understand what it's doing

When it comes to principles, we can:
- Use Camel Case for variables (something I'm already doing)
- Use `const` instead of `let` for variables that don't get reassigned (something else I'm usually doing?)
  - This would be something great to double-check with a linter, if possible!

> "String interpolation (ES6+) makes strings more readable"

This is [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)! So, things like `This is a ${descriptor} string.` This takes away the visual clutter of concatenating variables and characters together and can help give a more literal view of the output.

When interpreting arrays with a consistent structure into variables, we use array deconstruction to limit the number of declarations:
`const [firstName, middleName, lastName] = userNames;`

### Magic Numbers

Magic Numbers are hard numbers used in operations and calculations with no description of what they do or where they came from. This could be something like:

`let x = y * 86400000;` <= 86400000 is our magic number! What is that??

These numbers can easily be pulled out and assigned to descriptive variables. The time to do this is when you're working in the code! You know what your intent is and what things are doing, but these numbers may seem like a mystery if you come back to them later.

Let's clean up our example above:

```js
const oneDayInMilliseconds = 86400000;
let x = y * oneDayInMilliseconds;
```

In an instance where you're performing a calculation of multiple parts or even simple parts, it may be cleaner to show how you get to your final value. For example, instead of showing `= 86400000` as a value for milliseconds in a day, you could break this calculation out to `= 1000 * 60 * 60 * 24`

### Spacing

For better readability, we can utilize new lines to show some separation between different elements or dissimilar information in our code. Some examples include:
- A new line between declaring variables and logic
- A new line around contained chunks of logic, like an `if` statement
- A new line before a return statement
- Newlines around comments that are unrelated to surrounding logic (which probably shouldn't be in the code in the first place, unless it's metadata for the file!)

### Functions

Clean functions are _focused_ functions - small, concise, clearly describing what they do, and easy to understand how they are used in the application.

- Keep functions small
- Eliminate boolean flags, functions should do ONE thing
- Reads top to bottom
- Correct function naming
- Limiting parameters
- Don't repeat yourself
- Avoid side effects
- No globals

If a function gets beyond two parameters, ask yourself if it's too large, or if you're trying to do too much with it. If you're passing lots of related information as separate parameters, would it make more sense to pass these in as an object instead?

Naming
- Use descriptive names! Name them for what they are actually doing at a high level
- Standardize your naming conventions between function names

We can use key words in our function names to indicate what the function does, like we can use "get" to indicate that we're returning a value or object, or "is" or "has" to indicate that we're checking a conditional and returning a true or false.

For conditionals, try to limit the number of conditions to one, be careful with two, and definitely break up more than two. Chaining more conditions makes things harder to read and unclear. To simplify things for conditional chains, we can extract the conditionals to its own function. This has the added benefit of making the conditions easier to reuse or modify as needed, decoupled from the original logic.

### Comments

Bad comments are when they're used to explain low quality or unclear code, or are messy remnants of leftover code, visual markers, or todos. Between git and established code conventions within your team, there should be no need to include these!

Good comments are short and concise and provide value. Maybe they indicate that something is important, or explain a business case for something that may be out of place or legal comments. Strong variable and function naming can often eliminate most comments!

When comments are used to delineate between separate elements, it may be cleaner to split the elements into different files to remove that need to distinguish between them.

## Summary

My key take-away from this course was to slow down and be mindful of how I can communicate more information to someone reading my code for the first time. There's a lot of potential to add a ton of information into function names and to communicate more information by breaking up logic into more functions, so this is something I'd like to try to do more of on my next project.

For further reading, the instructor recommended both the Clean Code book by Robert Martin and this JavaScript-focused repository on GitHub:
- <https://github.com/ryanmcdermott/clean-code-javascript>

## Cleaning Up Blogs

I've been dialing back my scope on blog posts lately, as they grew to be bigger than what they should be, and beyond my original intent for this site. With that, I'm trying to feel out how I want to streamline.

One change is that I will be removing my focus blocks for posts moving forward, as my blogs tend to be focused on a specific topic or project, and not the sort of daily changing routine that I originally created them to handle.

I'm also going to be counting Silver is Gold time as "general" from here forward, until I get into more true development work with the site.

## Time Summary

- 1/27
  - 2h (SiG WordPress)
  - 0.5h (Clean Code course)
- 1/28
  - 0h
- 1/29
  - 0.5h (SiG WordPress)
- 1/30
  - 1h (SiG WordPress)
  - 1h (Clean code course)