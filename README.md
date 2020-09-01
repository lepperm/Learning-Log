# Learning Log

Thank you for checking out Learning Log! This is a Jekyll site to organize and chronicle development learning and skill sets.

My objective is to capture what and when I work on developing my web development skills. To this end, this site handles compiling and displaying all of my learning logs and skill entries in a detailed and easy-to-navigate fashion, along with automatically up-to-date statistics from my learning habits.

The site, much like the content hosted on it, is a living document and will be constantly changing and improving over time.

If you have any questions, please feel free to open a ticket, or contact me through the on-site chat.

## Requirements

Before building, Ruby needs to be installed. You can check that Ruby is installed with `ruby -v`

RubyGems will also need to be installed, which can similarly be checked with `gem -v`

## Quick Start

- Install Jekyll and bundler gems with `gem install jekyll bundler`

- Pull in dependencies using `bundle`

- Build the site with `jekyll build`

- Locally host with `bundle exec jekyll serve --drafts --future` to see all posts

## Known Issues

Currently, I have to manually copy the Liquid-generated `Skill.json` and `Search.json` files to the `_data` data folder after building and before committing. My current thinking is that this is something that I may be able to correct with a self-made Ruby plugin or by using a task runner...but I haven't learned that yet - hence the reason for the blog!

Additionally, it appears that styling is a little weird on iOS on certain pages. Improving the CSS for cross-browser use is on my task list, and will ideally resolve the issues I've seen in time.

More bleeding-edge tasks can be found [on my Tasks page](https://maxlepper.gitlab.io/learning-log/todo/#improvements).