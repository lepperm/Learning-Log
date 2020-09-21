--- 
layout: progression
name: accessibility
fullname: Accessibility
mainsite: https://www.w3.org/WAI/standards-guidelines/wcag/
category: Accessibility
progressionEntries:
  - 
    id: 1
    status: OK
    name: Applied Accessibility Challenges (FCC)
    item: https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/
    type: Course
    price: 0.0
    est-duration: 30
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp: 9/3/20
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

### Contrast

WCAG recommends at least a 4.5:1 contrast ratio for normal text. This applies both to greyscale and color combinations.

The contrast ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the strongest contrast.

The most common form of colorblindness is a reduced sensitivity to detect greens.

There are many tools available to compare the contrast between elements. Some online color picking tools also include visual simulations of how colors appear for different types of colorblindness.

### Access Keys

The `accesskey` attribute can specify a shortcut key to activate or bring focus to an element, making navigation more efficient for keyboard-only users. HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones.

`<button accesskey="b">Important Button</button>`

### Tab Index

The HTML tabindex attribute has three distinct functions relating to an element's keyboard focus. When it's on a tag, it indicates that element can be focused on. The value (an integer that's positive, negative, or zero) determines the behavior.

Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page in the same order as the elements in the HTML source markup. This same functionality can be given to other elements, such as `div`, `span`, and `p`, by placing a `tabindex="0"` attribute on them. For example:

`<div tabindex="0">I need keyboard focus!</div>`

When the value of the attribute is set to a positive number of 1 or higher, the `tabindex` attribute specifies the exact tab order of elements.

`tabindex="1"` will bring keyboard focus to that element first. Then it cycles through the sequence of specified `tabindex` values (2, 3, etc.), before moving to default and `tabindex="0"` items. Take caution, however, as explicitly modifying the index sequence may confuse users if the tab sequence does not follow an expected pattern, such as top to bottom.

A negative `tabindex` value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard. This is generally used to bring focus to content programmatically (like when a `div` used for a pop-up window is activated).

Using `tabindex` also enables the CSS pseudo-class `:focus` to work on normally non-focusable elements.

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