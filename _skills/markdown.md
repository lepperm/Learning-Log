--- 
layout: progression
name: Markdown
fullname: Markdown
mainsite: https://daringfireball.net/projects/markdown/
category: Markup language
progressionEntries: 
  - 
    id: 1
    status: OK
    name: Markdown Tips & Tricks 1
    item: http://blog.virtuacreative.com.br/markdown-tips-and-tricks.html
    type: Blog
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
    relproj: Learning Log
    relprojlink: https://maxlepper.gitlab.io/learning-log/
    datecomp: 8/18/2020
    datelink: 
resources: 
  - 
    refname: Official Markdown Syntax
    reflink: https://daringfireball.net/projects/markdown/syntax
  - 
    refname: Markdown Tips & Tricks
    reflink: http://blog.virtuacreative.com.br/markdown-tips-and-tricks.html
---

## Quick Reference

**Simplified Image Linking**
{% highlight markdown %}
![shortname][shortname]

[shortname]: {{site.baseurl}}/img/link.svg "alt-text"
{% endhighlight %}