---
layout: journal
title: "Regex Review"
excerpt: Improving my Regex understanding with a helpful resource.
author: Max Lepper
categories: [journal]
tags: [regex]
date: 2022-02-18 22:07:46 -0400
modified_date: 2022-02-19 14:49:21 -0400
published: true
status: finished
confidence: certain
context: false
comments: true
skills: [general]
references: ["https://regexlearn.com/"]
timespent: 60
---

## Journal

Regex has been an area where I've known enough to piece together a solution, but up until now, it's been a bit of a trial-and-error process. Luckily, I happened across [Regex Learn]({{page.references[0]}}), which is a site that provides learning resources, cheat sheets, and a playground for learning and working with Regex! The lessons are great bite-sized chunks, with reviews at regularly paced intervals.

* TOC
{: toc}

## Regex

Regex, or regular expressions, are a way of expressing a search pattern. The content of a regex describes a string or set of strings that should match the pattern. This is particularly useful in operations like filtering, input validation, and extracting important information from text.

Over the next few sections, I will explain the meaning behind each regex command, and provide some examples as we go.

### Framing

Typically, a regex will be framed with a pair of `/` slashes. To give you an example, a simple expression to find the first match the string "Hello World" in some text could be written as `/Hello World/`.

For the following syntax sets, we'll assume that our expression is wrapped in these slashes.

### Matches and Sets

Matching is the primary workhorse in regular expressions. If you know exactly what you're searching for, a simple match can quickly zero in on your target data.

- `string` ► matches the exact word "string"
- `.` ► matches any individual character
- `b[aeiou]r` ► matches any word with any one of the characters in the bracket (or, a **character set**)
- `b[^eo]r` ► matches any word except for words with any one of the characters in the bracket (or, a **negated character set**)
- `[a-z]` ► matches any character within a letter range, case-sensitive. This also works for numbers, like `[0-9]`!

### Repetitions

- `a+` ► the character to the left (in this case, `a`) can appear one or more times
- `a*` ► the character to the left (`a`) can appear zero to many times
- `a?` ► the character to the left (`a`) is optional
- `a{n}` ► the character to the left (`a`) should appear `n` times
- `a{n,}` ► the character to the left (`a`) should appear `n` or more times
- `a{n,s}` ► the character to the left (`a`) should appear between `n` and `s` times

### Groups

Groups are where the power of regular expressions begins to show. You can easily create alternative sets of valid matching data to add flexibility to your search sets, and reusability to sequences referenced multiple times.

- `(text)` ► This creates a group to use in combination with other rules
- `\1` ► Using incrementing numbers acts as a shorthand notation for repeating previous groups. (or, a **group reference**)
- `(?:la)` ► This denotes a non-capturing group, meaning that this group is unique and cannot be referenced by a group number.
- `(crow|rat)` ► A pipe in a group acts like an "or" (or, an **alternation**), indicating alternative expressions

To elaborate on group references: You could match a string "la-la-dee-ladee" with `(la)-\1-(dee)-\1\2`, where "la" = `\1` and "dee" = `\2`.

### Anchors

At times, the placement of the information relative to the start or end of lines or words can be critical. Anchors allow us to search in context of the complete text to further narrow our matches.

- `^` ► Start of line, place this at the front of a match to indicate it should only match at the start of a line
- `$` ► End of line, place this at the end of a match to indicate it should only match if it is the last thing on the line
- `\b` ► Word boundary, matches the word character at the end of a word
- `\B` ► Negated word boundary, matches the word character at the end of a word

Example, given the string "data", where the letter in bold is the matched character:
- `a\b` ► `dat`**a**
- `a\B` ► `d`**a**`ta`

### Character Matching

While we can express many characters as part of a character set, there are some shorthand expressions we can use to simplify these searches. Rather than typing out `[a-zA-Z0-9_]*` to match something like a username, we could greatly simplify this with `\w*`.

- `\` ► Escape character, use this before any of the functional regex characters `{ } [ ] / \ + * . $^ | ?` to select them
- `\w` ► Only match letters, numbers, and underscore characters
- `\W` ► Negated alphanumeric match, match everything but letters, numbers, and underscores
- `\d` ► Matches number characters only
  - This is just like using `[0-9]`!
- `\D` ► Negated numeric match, matches everything but numbers
  - Again, this is similar to `[^0-9]`
- `\s` ► Matches a space character
- `\S` ► Matches (you guessed it) everything but a space character

### Lookarounds

Lookarounds evaluate the context in which our matches are found while excluding that context in our returned match.

That sentence is a bit confusing without context, so to give an example, let's say we have a URL which has a unique number at the end of the string, and we want to grab that number and do something with it. Maybe we know it will only be numbers, but we have no idea how many numbers long it may be.

Let's say that one such URL would be: `https://www.mysite.com/50351`

We want to grab that `50351` number, so we could use a positive lookbehind because we want a **POSITIVE** match on our context string while checking the text **BEHIND** (or to the left of) the target value.

That could make our regex `/(?<=mysite.com/)\d*/`.

Notice that in this case, we don't care if the URL is `http` or `https` or if the `www.` is included or omitted - we are able to still get a positive match on our target numbers. If you want to try this for yourself, you can try it out on [Regex Learn's Playground](https://regexlearn.com/playground).

- `target(?=text)` ► Positive lookahead, only matches if the text after the `=` in our group immediately follows the target
- `target(?!text)` ► Negative lookahead, only matches if the text after the `=` in our group is NOT immediately following the target
- `(?<=text)target` ► Positive lookbehind, only matches if the text after the `=` in our group immediately precedes the target
- `(?<!text)target` ► Negative lookbehind, only matches if the text after the `!` in our group does NOT immediately precede the target

### Greedy and Lazy Matches

In the instance where they may be many matches, we can also specify how much of the match to return.

- `.*w` ► **Greedy match**, will match as long as possible until reaching the last valid "w"
- `.*?w` ► **Lazy match**, will stop after the first "w" is encountered

For example, given "meow meow meow"
- Greedy: "meow meow meow"
- Lazy: "meow"

### Flags

Flags are modifiers added immediately after the end of our `/ /` regex frame to modify how the search is performed. We can utilize these to expand the context of our searches and to simplify our expression.

- `/ /` ► No modifiers, return first match only
- `/ /g` ► **Global**, select all matches
- `/ /m` ► **Multiline**, matches according to new line characters, whereas the default behavior of regex is to treat everything as one line
- `/ /i` ► **Case insensitive**, does not consider case when performing matches

## Summary

My key take-away from this course was that regex is actually quite simple, once you understand how to apply the rules! Many of them quickly become easy to build together into a robust selection tool.

## Time Summary

- 2/3
  - 1h (SiG WordPress)
  - 0.5h (Regex course)
- 2/4
  - 0.5h (Regex course)
- 2/8
  - 0.5h (SiG WordPress)
- 2/9
  - 1.25h (SiG WordPress)
- 2/13
  - 1h (SiG WordPress)
- 2/16
  - 1h (SiG WordPress)
- 2/17
  - 1.5h (SiG WordPress)

Note: Time spent towards Silver is Gold is no longer being rolled into learning totals.