# Learning Log

Thank you for checking out Learning Log! This is a Jekyll site to organize and chronicle development learning and skill sets.

My objective is to capture what and when I work on developing my web development skills. To this end, this site handles compiling and displaying all of my learning logs and skill entries in a detailed and easy-to-navigate fashion, along with up-to-date statistics from my learning habits.

The site, much like the content hosted on it, is a living document and will be constantly changing and improving over time.

If you have any questions, please feel free to open a ticket, or contact me through the on-site chat!

## Requirements

Before building, Ruby needs to be installed. You can check that Ruby is installed with `ruby -v`.

RubyGems will also need to be installed, which can similarly be checked with `gem -v`.

## Quick Start

- Install Jekyll and bundler gems with `gem install jekyll bundler`.

- Pull in dependencies using `bundle`.

- Build the site with `jekyll build`.

- Locally host with `bundle exec jekyll serve --drafts --future` to see all posts.

- When done writing, use `node .\UpdateStats.js` to update dynamically-generated data files used for statistics. The site will need to re-generate.

## Known Issues

Bleeding-edge tasks can be found as either issues on this repository or [on my Tasks page](https://maxlepper.gitlab.io/learning-log/todo/#improvements).