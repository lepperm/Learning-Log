--- 
layout: progression
name: markdown
fullname: Markdown
mainsite: https://daringfireball.net/projects/markdown/
category: Markup language
proficient: true
progressionEntries: 
  - 
    id: 1
    status: OK
    name: Markdown Tips & Tricks 1
    item: http://blog.virtuacreative.com.br/markdown-tips-and-tricks.html
    type: Blog
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: Learning Log
    relprojlink: https://maxlepper.gitlab.io/learning-log/
    datecomp: 8/18/2020
    datelink: 
  - 
    id: 2
    status: OK
    name: Markdown Tips & Tricks 2
    item: http://blog.virtuacreative.com.br/markdown-tips-tricks-part2.html
    type: Blog
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: Learning Log
    relprojlink: https://maxlepper.gitlab.io/learning-log/
    datecomp: 8/18/2020
    datelink: 
  - 
    id: 3
    status: OK
    name: Wes Bos's Mastering Markdown
    item: https://masteringmarkdown.com/
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj: Learning Log
    relprojlink: https://maxlepper.gitlab.io/learning-log/
    datecomp: 9/15/2020
    datelink: 
resources: 
  - 
    refname: Official Markdown Syntax
    reflink: https://daringfireball.net/projects/markdown/syntax
  - 
    refname: Markdown Tips & Tricks
    reflink: http://blog.virtuacreative.com.br/markdown-tips-and-tricks.html
  - 
    refname: Kramdown Syntax (The Markdown renderer for Jekyll)
    reflink: https://kramdown.gettalong.org/syntax.html
---

## Quick Reference

### Links

```markdown
[Link text](url "title tag")
```

For longer URLs,

```markdown
[Link text][token]

[token]: https://www.google.com
```

### Images

Images in Markdown are simply links with an exclamation (!) proceeding the link.

```markdown
`![Alt-text][token]`
```

Links and images can be nested! For example:

```markdown
`![`![Tiny image](tiny image link)`][Full-size image]`
```

You can also embed HTML inside tags.

### Simplified Image Linking

{% highlight markdown %}
`![Alt-text][token]`

`[token]: {{site.baseurl}}/img/link.svg "alt-text"`
{% endhighlight %}

### Diff Blocks

Using the syntax ```diff as a fence allows you to highlight code changes explicitly:

```diff
var x = 100;
- var y = 300;
+ var y = 200;
```