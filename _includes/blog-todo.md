**Data Generation**
- [ ] Add a "Books" page that scoops up all book progression items and outputs them to a table (can be hidden for now!)
- [ ] Add project name tags to old blog posts (for use with Projects table)
- [ ] Wrap-Up Page - summarize the time clocked towards specific skills and any progression entries completed within a certain number of days (past week?), along with a digest of all posts made.
  - [ ] Make it easy to share to social media!

**Statistics**
- [ ] Use calls to [GitHub statistics](https://docs.github.com/en/rest/reference/repos#statistics) with mirrored GitLab repositories to cross-reference git data with blog data
- [ ] "Year in pixels" style blogging map for days with posts
  - [ ] Navigate through to see all posts for that day (can reuse existing search query w/ date format `%b %d, %Y`)
- [ ] Graphs of post metrics over time
- [ ] Posting gap bugged with new year, need to inspect closer

**Modularity**
- [ ] Make the skill collection and data generic (for example, could be reused for a spoken languages learning breakdown)
- [ ] Create `includes` versions of task deferral messages
- [ ] Build a "Quotes" element to replace existing quotes

**Quality and Code Health**
- [ ] Add documentation to all Jekyll/Liquid functions
- [ ] Blog posts as Progression items should probably all be moved to References, perhaps replicate Quality metric from progression items?

**User Experience**
- [ ] Improve CSS for cross-browser compatibility
- [ ] Improve accessibility (this needs to be made measurable)
- [ ] Server push notifications to PWA on new content
- [ ] Advanced search functionality
  - [ ] Filter posts by date range, duration, skills, length, confidence level, status, and more
  - [ ] Filter skills by time, date range, progression, references, and more
- [ ] Implement a [new blog theme](https://mmistakes.github.io/minimal-mistakes/)

**Bugs**
- [ ] Look into duplicated "Firebase" entries in Skills page on Learning Log