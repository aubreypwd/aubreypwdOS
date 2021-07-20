---
title: "It's time to love something again."
date: 2020-07-20
draft: true
---

So if you're reading this, you're probable reading it on a _yet again_ new version of my site, this time running on Next.js.

# Why

A few months ago [@gregrickaby](https://twitter.com/gregrickaby), the Director of Engineering [@WebDevStudios]() set our team out to become the _best damn headless shop out there_. Part of that initiative was learning Next.js, and because I'm a _learn by doing_ type I set out to rebuild my site using Next.js mostly as an excersize, I was only going to go with it if I loved it...and I did!

Here are some primary reasons I would rather run my site on Next.js over Hugo:

- It's also static
- I'm not locked into a theme (like w/ `hugo`)
- Building the site was as close to HTML + Javscript + Markdown as I could get w/out cruft

# How it works

I even, somehow, ventered into a new design because in my excersize I wanted to make the site more interactive so I had this idea of asking the user for a prompt to decide what to pull up. I write content mostly about **coding** and **philosophy** so the idea was if you typed any of those it would pull up posts for those keywords magically...and it does.

- [Checkout the Source on Github...](https://github.com/aubreypwd/aubreypwd-com-next)

# Challenges, Sticking Points & `@TODO`

- I can't use `.md` files entirely to build an archive, I [have to place posts in a list with dates](https://github.com/aubreypwd/aubreypwd-com-next/blob/main/posts.json) to sort them by date properly
- I find live-updating based on `.md` file changes with state make my Macbook Air fans rev up, so posts are not neccessarily using _live_ state when presented
- Syntax highlighting is basic at least, I still want to figure out how to do more here
- I want to use MDX as pages/posts instead, but not sure how to do that yet
