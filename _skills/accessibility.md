--- 
layout: progression
name: accessibility
fullname: Accessibility
mainsite: https://www.w3.org/WAI/standards-guidelines/wcag/
category: Accessibility
progressionEntries:
  - 
    id: 1
    status: IP
    name: Applied Accessibility Challenges (FCC)
    item: https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/
    type: Course
    relproj:
    relprojlink:
    datecomp:
    datelink:
resources:
  - 
    refname: How to Meet WCAG (Quick Reference)
    reflink: https://www.w3.org/WAI/WCAG21/quickref/
---

### Semantic Tags

Tag names alone can indicate the type of information it contains, which adds semantic meaning to that content. Assistive technologies can access this information to provide better page summary or navigation options to their users.

- **main**
  - Wraps the main unique content, and there should be only one per page
  - Located within the `body` tag
- **article**
  - A sectioning element used to wrap independent, self-contained content (blog entries, forum posts, or news articles)
- **section**
  - If an article is for standalone content, a section is for grouping thematically related content
  - Sections can be nested in articles
  - Unrelated content should be kept in `div`s
- **header**, **nav**, **footer**
  - Landmark tags (similar to `main`) for content repeated across pages
  - If the `footer` contains navigation tags, it is not necessary to also wrap those tags in `nav`

### Headings

Screen readers can quickly skim header tags to give the reader a summary of the page contents.

Each page should only have a single `h1` tag for both accessibility and SEO. All other sections should be nested in a way that appropriately and logically groups the page content.

### Images

Using `alt` tags for images is considered mandatory by HTML5 specifications.

In situations when an image is already explained with text content, or does not add meaning to a page, the `img` still needs an `alt` attribute, but it can be set to an empty string.