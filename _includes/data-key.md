## Data Key

### Front Matter

Values are presented in the following format:

`<key>: <value>`

#### All Posts

- **layout**: journal
  - The template from `_layouts` that Jekyll will use to render this post
- **title**: "Daily Log Title"
  - The title for the post
- **excerpt**: This is an example excerpt for a daily log
  - A short overview or summary of the post contents
- **author**: Max Lepper
  - The author's name
- **categories**: [journal]
  - An array of a single entry to categorize the post, typically but not exclusively the same as the layout type
- **tags**: [html, css, javascript]
  - An array of tags to be associated with the post
- **date**: 2020-09-06 23:52:46 -0400
  - Datetime stamp for the original posting
- **modified_date**: 2020-09-07 16:19:21 -0400
  - Datetime stamp for any edits beyond the original posting
- **published**: true
  - Boolean that specifies if the post will be included or excluded from the build
- **status**: finished
  - A string value to indicate the status of the current post
    - notes (extremely rough, bullet points)
    - draft (rough or incomplete pass)
    - live (first live release)
    - finished (final edits)
- **confidence**: likely
  - A string value to indicate the confidence in the accuracy of the beliefs expressed in the post
    < The following 3 values indicate that the post either makes little meaningful reflection, expresses a view from emotions, or is fictional. >

    - log (recording of events with little reflection)
    - emotional (expressing emotional impressions)
    - fiction (creative writing)

    < The following 8 values are a verbal measure of the confidence the author has that the claims originally made are accurate or true. This value will likely change with time. >

    - impossible (0%)
    - remote (1%-15%)
    - highly unlikely (16%-30%)
    - unlikely (31%-45%)
    - possible (46%-55%)
    - likely (56%-70%, most common)
    - highly likely (71%-85%)
    - certain (86+%)
- **context**: false
  - Boolean that specifies if the current post requires some context outside of the post content ("true" means "needs context")

#### Logs Only

- **skills**: [html, css, javascript]
  - An array of skills developed in association with the log, which will accrue time
- **references**: ["https://www.gwern.net/About#confidence-tags","https://www.gwern.net/About#importance-tags"]
  - An array of URLs as strings for supporting or notable external links that support the post content
- **timespent**: 120
  - The time, in minutes, attributed to skill development being captured with this post

### Learning Items

#### Progress
- OK (Complete)
- IP (In progress)
- UN (Up next)
- NS (Not started)

#### Type
- Course
- Book
- Project
- Milestone
- Official Docs
- Blog
- Conference