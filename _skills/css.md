--- 
layout: progression
name: css
fullname: CSS
mainsite: https://developer.mozilla.org/en-US/docs/Web/CSS
category: Style Sheet Language
progressionEntries: 
  - 
    id: 1
    status: UN
    name: Learn CSS
    item: https://www.codecademy.com/learn/learn-css
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
    status: NS
    name: Learn CSS Layout
    item: http://learnlayout.com/
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
    id: 3
    status: US
    name: Specifics on CSS Specificity
    item: https://css-tricks.com/specifics-on-css-specificity/
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
    id: 4
    status: NS
    name: Scalable and Modular Architecture for CSS
    item: http://smacss.com/
    type: Official Docs
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
    status: OK
    name: Flexboxfroggy
    item: http://flexboxfroggy.com/
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp: 9/7/20
    datelink:
  - 
    id: 
    status: OK
    name: Grid Garden
    item: https://cssgridgarden.com/
    type: Course
    price:
    est-duration:
    est-benefit:
    act-benefit:
    relproj:
    relprojlink:
    datecomp: 9/7/20
    datelink:
  - 
    id: 
    status: NS
    name: What the Flexbox?
    item: https://flexbox.io/
    type: Course
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
    refname: 
    reflink: 
---

## Quick Reference

* TOC
{: toc}

### Media Queries

Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.

The general syntax is:

```css
@media ( conditions ) {
  elem {
    styles: here;
  }
}
```

### Responsive Units

Viewport units are relative to the viewport dimensions, and percentages are relative to the parent container element.

- vw (viewport width)
  - 10vw would be 10% of the viewport's width.
- vh (viewport height)
  - 3vh would be 3% of the viewport's height.
- vmin (viewport minimum)
  - 70vmin would be 70% of the viewport's smaller dimension (height or width).
- vmax (viewport maximum)
  - 100vmax would be 100% of the viewport's bigger dimension (height or width).

### Responsive Images

Consider the following properties:

```css
img {
  max-width: 100%;
  height: auto;
}
```

These rules ensure that an `img` is never wider than the parent container, and automatically adjusts the height to maintain the original aspect ratio.

### Retina Displays

With certain displays, most noticeably with Apple devices, the high-resolution display can make images appear pixelated. According to FreeCodeCamp, this can be counteracted by displaying images at half the resolution of their source image, like so:

```css
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

### Flexbox

An element can be turned into a flex container with:
`display: flex;`

A flex container allows you to adjust and control the flow of child elements within the container.

For a graphical representation of [flex terms and directions, click here](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg).

#### `flex-direction`

- `row` - horizontally aligned children
- `column` - vertically aligned children
- `row-reverse` - same as `row`, but elements are arranged in the opposite order of the HTML flow
- `column-reverse` - same as `column`, but elements are arranged in the opposite order of the HTML flow

#### `order`

For fine adjustment of element order in a flex container, you can explicitly set the sequence with a numerical value (positive or negative) using `order`.

#### `justify-content`

`justify-content` is how we specify how the flex container will space out and align the items within.

`center`
- The most common, aligns all items to the center of the flex container

`flex-start`
- Pushes all items to the left (if row direction) or top (if column direct) of the container

`flex-end`
- Pushes all items to the right (if row direction) or bottom (if column direct) of the container

`space-between`
- Aligns the items to the center of the main axis, with extra space placed between the items, and the first and last items pushed to the edge of the container

`space-around`
- Space is distributed across all elements, with 1/2 spacing on the outside of the first and last elements

`space-evenly`
- Space is distributed across all elements, with full spacing on the outside of the first and last elements


#### `align-items`

`align-items` is similar to `justify-content`, but rather than aligning along the primary axis, `align-items` aligns to the cross axis of the flex container. This allows us to change how all of the spaced objects are ultimately arranged in the parent object.

`center`
- The most common, aligns all items to the cross-center of the flex container

`flex-start`
- Pushes all items to the top (if row direction) or left (if column direct) of the container

`flex-end`
- Pushes all items to the bottom (if row direction) or right (if column direct) of the container

`stretch`
- Stretches all of the items to fill the flex container

`baseline`
- Aligns all items to their baselines, similar to the line that letters sit on

#### `align-self`

`align-self` allows you to adjust an item's alignment individually, instead of setting all elements at once. This is useful since other common adjustment techniques using the CSS properties `float`, `clear`, and `vertical-align` do not work on flex items.

`align-self` accepts the same values as `align-items` and will override any value set by the `align-items` property.

#### `flex-wrap`

`flex-wrap` can be used to control how elements scale and arrange as they fill their container.

`nowrap`
- Default, items do not wrap

`wrap`
- Child elements will wrap left-to-right if in a row or top-to-bottom if in a column

`wrap-reverse`
- Child elements will wrap right-to-left if in a row or bottom-to-top if in a column

#### `flex-flow`

`flex-wrap` and `flex-direction` are used together so frequently that you can use the single command `flex-flow` to specify both!

The syntax is:
`flex-flow: (direction) (wrap)`

#### Grow and Shrink

`flex-shrink` is used to control how elements shrink when the flex container is smaller than the combined widths of all the flex elements within it.

Values for `flex-shrink` are specified as numbers relative to other child elements in the same flex container. The higher the number, the more the element shrinks (multiplicative).

`flex-grow` is the opposite of `flex-shrink`, and is used to control how children grow when the parent container expands. It is similarly set with a number value.

`flex-basis` specifies the initial size of the item before CSS makes adjustments via `flex-grow` or `flex-shrink`. The units for this parameter are similar to other size properties - `px`, `em`, `%`, `auto`, etc.

This has quickly become a somewhat long list of properties to specify. To make things more manageable, there is a shorthand property available to set multiple values at once: `flex`!

The format is as follows:
`flex: (grow) (shrink) (basis);`

### Grid

#### Grid Construction

An element can be turned into a grid container with:
`display: grid;`

To make use of this grid container, you have to specify a structure. with `grid-template-columns`. For example, to make a grid of three 50px wide columns, you would use:

`grid-template-columns: 50px 50px 50px;`

You can do the same for rows using `grid-template-rows`.

Either absolute or relative units can be used to define the size of rows and columns. Some options include:

`fr`
- Sets the column or row to a fraction of the available space. Note that the total number of `fr` determines the divisor:
  - `grid-template-columns: 1fr 3fr;` makes 2 columns, with one (1/4) wide and the second (3/4) wide.

`auto`
- Sets the column or row to the width or height of its content automatically,

`%`
- Adjusts the column or row to the percent width of its container.

These can be used in any combination:

`grid-template-columns: auto 50px 10% 2fr 1fr;`

The above snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

To construct rows instead of columns, substitute `row` in place of `column` for any of the above commands.

`grid-template` is a shorthand property that combines `grid-template-rows` and `grid-template-columns` in the form of:

`grid-template: (rows) / (columns)`

Like:

`grid-template: 50% 50% / 200px;`

Grids can be constructed within grids, allowing for highly specific arrangements.

##### Functions

The `repeat()` function can be used to create a specified number of columns:

`grid-template-columns: repeat(5, 20%);`

These can be used in conjunction with other column declarations:

`grid-template-columns: 50px repeat(3, 1fr) 50px;`

`repeat()` can also replicate patterns:

`grid-template-columns: repeat(2, 1fr 50px) 20px;`

Which translates to:

`grid-template-columns: 1fr 50px 1fr 50px 20px;`

The `minmax()` function is used to limit the size of items when the grid container changes size.

`grid-template-columns: 100px minmax(50px, 200px);`

In the code above, `grid-template-columns` is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.

You can nest functions within functions for more complex behavior!

##### Auto Properties

The `repeat()` function comes with an option called `auto-fill`. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining `auto-fill` with `minmax`, like this:

`grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));`

When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. If your container can't fit all your items on one row, it will move them down to a new one.

`auto-fit` works almost identically to `auto-fill`. The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

##### Template Areas

You can group cells of your grid together into an area and give the area a custom name, like so:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named `header`, the bottom three cells into a `footer` area, and it makes two areas in the middle row; `advert` and `content`. Every word in the code represents a cell and every pair of quotation marks represent a row. The `.` symbol can be used to designate an empty cell in the grid.

Now that we have a labelled area, we can specify that elements should be added directly to areas:

```css
.item1 {
  grid-area: header;
}
```

This lets the grid know that you want the `item1` class to go in the area named `header`.

##### Gap

To add a gap between columns or rows, use the gap property:

`grid-column-gap: 10px;`
`grid-row-gap: 5px;`

`grid-gap` is a shorthand property that handles gaps for both rows and columns, with the syntax:

`grid-gap: (row) (column);`

If `grid-gap` receives only one value, it defaults to using the same value for both rows and columns.

#### Grid Positioning

The hypothetical horizontal and vertical lines that create the grid are referred to as lines. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.

This is what the lines look like for a 3x3 grid:

<table>
  <tr>
    <td>1 ←↑</td>
    <td>2 ←</td>
    <td><span>3 ←</span><span style="float:right;">4 →</span></td>
  </tr>
  <tr>
    <td>2 ↑</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><span>3 ↑</span><span style="float:right;">4 ↓</span></td>
    <td></td>
    <td></td>
  </tr>
</table>

(each number in the table above is the value of the line at the top/left of the cell containing the number, respectively)

##### Start, End, and Area

`grid-column-start` takes an integer value (starting from 1) to indicate the start of a grid selection. Independently, this will only select one column.

Using `grid-column-end`, however, can extend this selection across multiple columns. Take note that the integer value for "end" is the first column that is NOT part of the selection.

These values absolute to the grid, and can be used in either direction. For example:

```css
grid-column-start: 2;
grid-column-end: 5;
```

gives the same selection as

```css
grid-column-start: 5;
grid-column-end: 2;
```

Negative values can also be used to select from the right side of the grid:

```css
grid-column-start: 2;
grid-column-end: -3;
```

Rather than using index values, `span` allows you to specify your selection by the desired column width. This only works with positive values.

```css
grid-column-start: 2;
grid-column-end: span 3;
```

`grid-column` is a shorthand property that combines both `grid-column-start` and `grid-column-end` together, separated by a slash:

`grid-column: 2/5;`

To select rows instead of columns, substitute `row` in place of `column` for any of the above commands.

Row and Column selectors can be used simultaneously to select across entire areas:

```css
grid-column: 2/5;
grid-row: 1/6;
```

To condense things even further, `grid-area` combines both `grid-column` and `grid-row` into a single property with syntax:

`grid-area: (row start) / (column start) / (row end) / (column end);`

You can overlap `grid-area`s.

##### `order`

For fine adjustment of element order in a grid, you can explicitly set the sequence with a numerical value (positive or negative) using `order`.

#### `justify-items` and `align-items`

`justify-items` is used to control the location all of the objects in a grid horizontally, and `align-items` is used to control vertically.

#### `justify-self` and `align-self`

`justify-self` and `align-self` work similar to their standard CSS counterparts. `justify-self` is used to control an object's location horizontally, and `align-self` is used to adjust vertically.

Both take values such as:
- `start`
- `center`
- `end`

#### Grid Media Queries

Grids and Media Queries can be used together to rearrange site layouts dynamically for different device resolutions.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto 1fr auto;
  grid-gap: 10px;
  grid-template-areas:
    "header"
    "advert"
    "content"
    "footer";
}

@media (min-width: 300px){
  .container{
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
}

@media (min-width: 400px){
  .container{
    grid-template-areas:
      "header header"
      "advert content"
      "footer footer";
  }
}
```

The above results in a column of content under 300px, a full left-side advert at 300px-400px, and a full-width header and footer with inset advert above 400px.