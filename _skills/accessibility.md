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

### Audio

The `audio` element give semantic meaning when wrapped around an audio stream. Including `controls` shows minimally play and pause, as well as supporting keyboard functionality.

```
<audio id="myClip" controls>
  <source src="audio/clip.mp3" type="audio/mpeg" />
</audio>
```

Multimedia content, such as video, has both auditory and visual components. Synchronized captions and a transcript should be included.

### Figure

`figure` and `figcaption` can be used to wrap charts, diagrams, and images and include a caption describing the image.

`figcaption` should be used to briefly note the trends or conclusions illustrated for the user.

### Forms

The `for` attribute on a `label` tag explicitly associates that `label` with the form control and is used by screen readers. The value of the `for` attribute must be the same as the value of the `id` attribute of the form control.

```
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

The tag `fieldset` can be used to surround an entire grouping of elements, and an accompanying `legend` tag can be used to describe the grouping.

### Date

When referring to dates informally, a `time` element can be used to add specificity to the date in question:

`<time datetime="2020-08-31">last Monday</time>`

### Using CSS

HTML elements should be used to structure page content correctly FIRST, but then CSS can be used to further embellish content for users with screen readers.

Here is an example CSS class that can be read by a screen reader:
```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

Note that the following CSS rules hide content for ALL users, including those with screen readers:
- `display: none;`
- `visibility: hidden;`
- `width: 0px;`
- `height: 0px;`