---
title: "It's time to love coding again"
date: 2020-07-20
---

A few months ago [@gregrickaby](https://twitter.com/gregrickaby), the Director of Engineering [@WebDevStudios]() set our team out to become the _best damn headless shop out there_. Part of that initiative was learning Next.js, and because I'm a _learn by doing_ type, I set out to rebuild my site using Next.js just as an experiement; and this is what I came up with!

# ⚙️ How it works

I wanted to make the site more interactive so I had this idea of asking the user for a prompt to decide what to pull up. I write content mostly about **coding** and **philosophy** so the idea was if you typed any of those it would pull up posts for those keywords magically...and it does!

- [Checkout the Source on Github...](https://github.com/aubreypwd/its-time-to-love-coding-again)

# 🤔 Challenges, Sticking Points

- Right now I'm [having to place posts in a list with dates](https://github.com/aubreypwd/its-time-to-love-coding-again/blob/main/posts.json) to sort them by date properly, I want to move my posts to `fs` vs. `fetch` in the future
- I find live-updating based on `.md` file changes with state make my Macbook Air fans rev up, so posts are not neccessarily using _live_ state when presented
- Syntax highlighting is basic at least, I still want to figure out how to do more here
- I want to use MDX as pages/posts instead, but not sure how to do that yet
- Everything currently is in a [global sass file](https://github.com/aubreypwd/its-time-to-love-coding-again/blob/main/styles/globals.scss) I may want to move to something more modular
- I hope to beef up the input navigator to take in more keywords (_even secret fun ones_)
- I lost the _rss_ feed simply because I didn't know if I really needed to figure it out, as I'm not sure a lot of people subscribe to my feed (maybe I'll bring it back)
