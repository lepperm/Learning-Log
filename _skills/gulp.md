--- 
layout: progression
name: gulp
fullname: Gulp
mainsite: https://gulpjs.com/
category: Task Runner
progressionEntries: 
  - 
    id: 
    status: IP
    name: Gulp.js Quick Start
    item: https://gulpjs.com/docs/en/getting-started/quick-start
    type: Official Docs
    relproj:
    relprojlink:
    datecomp:
    datelink:
  - 
    id: 
    status: NS
    name: Automate Your Tasks Easily with Gulp.js
    item: https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
    type: Tutorial
    relproj:
    relprojlink:
    datecomp:
    datelink:
resources: 
  - 
    refname: Task Runners (Gulp, Grunt, etc) and Bundlers (Webpack, Browserify). Why use together?
    reflink: https://stackoverflow.com/a/33574602/14096749
---

## Installations

### First Time Setup

- Install globally with `npm install --global gulp-cli`

### New Project Setup

1. Run `npm init` first to create your `package.json` file
2. Add to your project as a dev dependency
   1. `npm install --save-dev gulp`
3. Verify gulp versions with `gulp --version`

### Initialize gulpfile

Create a file in the project root named `gulpfile.js` containing the following:

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

You can run the default task with `gulp` or a specific task(s) with the syntax `gulp <task> <othertask>`