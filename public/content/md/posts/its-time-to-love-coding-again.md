---
title: "It's time to love coding again"
date: 2020-07-20
---

So if you're reading this, you're probable reading it on a _yet again_ new version of my site, this time running on Next.js.

# 🤪 Why

A few months ago [@gregrickaby](https://twitter.com/gregrickaby), the Director of Engineering [@WebDevStudios]() set our team out to become the _best damn headless shop out there_. Part of that initiative was learning Next.js, and because I'm a _learn by doing_ type, I set out to rebuild my site using Next.js mostly as an excersize (I was only going to go with it if I loved it...and I did)!

Here are some primary reasons I would rather run my site on Next.js over [hugo](http://localhost:3000/hello-world) right now:

- It's also static
- I'm not locked into a theme (like w/ `hugo`)
- I loved coding again

That third point is probably the most important. With Hugo I didn't really _build_ my site, and even with WordPress I didn't. Next.js gave me an opportunity to build a website again and yet not get too overloaded or locked into something new.

So basically, in the end, this was fun!

# ⚙️ How it works (_the new design_)

I also landed on this new design&mdash;I wanted to make the site more interactive so I had this idea of asking the user for a prompt to decide what to pull up. I write content mostly about **coding** and **philosophy** so the idea was if you typed any of those it would pull up posts for those keywords magically...and it does!

- [Checkout the Source on Github...](https://github.com/aubreypwd/aubreypwd-com-next)

# 🤔 Challenges, Sticking Points, & TODO

- Right now I'm [having to place posts in a list with dates](https://github.com/aubreypwd/aubreypwd-com-next/blob/main/posts.json) to sort them by date properly, I want to move my posts to `fs` vs. `fetch` in the future
- I find live-updating based on `.md` file changes with state make my Macbook Air fans rev up, so posts are not neccessarily using _live_ state when presented
- Syntax highlighting is basic at least, I still want to figure out how to do more here
- I want to use MDX as pages/posts instead, but not sure how to do that yet
- Everything currently is in a [global sass file](https://github.com/aubreypwd/aubreypwd-com-next/blob/main/styles/globals.scss) I may want to move to something more modular
- I hope to beef up the input navigator to take in more keywords (_even secret fun ones_)
