# aubreypwd.com Built on NextJS

This is a (WIP) re-build of my site (which previously [ran on Hugo](https://github.com/aubreypwd/aubreypwd.github.io-hugo)) in NextJS!

## Why?

- Because @WebDevStudios is the best damn Headless shop out there
- I like the fine-grained control
- Still Markdown driven
- I like how things are built with puzzle pieces
- Still out for more reasons....

Initially I was doing it as a challenge to do a ground-up Next app, and the only thing I could think of was duplicate my site. But then I really liked it.

### Components

All the things have been cut down into all the `components/`

- Default (main layout)
    + Header
    + Content
        * Posts (archive)
        * Post (single)
    + Footer

There are more cut-up components but these are the base of them.

### `config.json`

Most of the site is ran by `config.js`.

#### `config.posts`

These are all the posts meant to be displayed in the `Posts` component.

- Private/WIP posts will not be in this list until you add them
- They are date-sorted, so only the date is stored in the object, but you can override the date in frontmatter
    + But you can't use the override to change the position it's in

### `public/content`

All the data that comes in to the site comes from Markdown files in `public/content`, but to get linked to on the site it has to be added to `config.posts`.
