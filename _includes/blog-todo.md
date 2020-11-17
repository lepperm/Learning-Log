**Modularity**
- [ ] Make the skill collection and data generic (for example, a languages learning breakdown)

**Quality and Code Health**
- [ ] Figure out how to copy compiled `Skills.json` and `Search.json` files to the `_data` folder at build
- [ ] Documentation
- [ ] Blog posts as Progression items should probably all be moved to References, perhaps replicate Quality metric from progression items?

**User Experience**
- [ ] Improve CSS for cross-browser compatibility
- [ ] Greatly improve accessibility
- [ ] Some way to distinguish between different groupings of topics within blog posts.
  - Alternating background shading behind paragraphs (like excel tables)? Horizontal rules? Extra headers? Possibly mock up some variants and take a poll from readers
- [ ] Server push notifications to PWA on new content

**Brainstorming**
- [ ] A configurable floating TOC element
- [ ] "Year in pixels" style blogging map for days with posts
  - [ ] Navigate through to see all posts for that day (can reuse existing search query w/ date format `%b %d, %Y`)
- [ ] Advanced search functionality
  - [ ] Filter posts by date range, duration, skills, length, confidence level, status, and more
  - [ ] Filter skills by time, date range, progression, references, and more
- [ ] Use calls to [GitHub statistics](https://docs.github.com/en/rest/reference/repos#statistics) with mirrored GitLab repositories to cross-reference git data with blog data
- [ ] Generate a list of books that I've read from progression items
- [ ] Wrap-Up Page - summarize the time clocked towards specific skills and any progression entries completed within a certain number of days (past week?), along with a digest of all posts made.
  - [ ] Make it easy to share to social media!