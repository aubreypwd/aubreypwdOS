---
title: "Sublime hangs (beachball) on save [Fix]"
date: 2020-10-30
---

So, the last few weeks I've had a thing happen since switching to a MacBook Air recently. Since the CPU is not up to snuff as my old MacBook Pro (more to come on this switch later ⌨️), Sublime Text would hang for about a second on save of a file in a large project.

This likely went un-notice on my 2.7Ghz MacBook Pro, but started to notice it on my Air. Turns out it was because Sublime was indexing all the various `node_modules/**` in all the various folders it was in, on save.

So I had to figure out a way to _not_ index files, yet leave them in my sidebar (I want them there).

According to [this](https://stackoverflow.com/a/40028043/1436129) to tell Sublime _not_ to index a file, yet leave it in the Sidebar you have to adjust `binary_file_patterns` in your user settings, like so:

```json
"binary_file_patterns":
[
    "*.jpg",
    "*.jpeg",
    "*.png",
    "*.gif",
    "*.ttf",
    "*.tga",
    "*.dds",
    "*.ico",
    "*.eot",
    "*.pdf",
    "*.swf",
    "*.jar",
    "*.zip",
    "*.json",
    "*.log",
    "*.map*",
    "*.min.*",
    "*.sql",
    ".db/*",
    ".git/*",
    ".hg/*",
    ".sass-cache/*",
    ".svn/*",
    "bower*/*",
    "cache/*",
    "conf/*",
    "debug.log",
    "logs/*",
    "*.log",
    "node_modules/*",
    "vendor/*",
],
```

And, this, so far, has turned out to be right. And, as you can see, I've included a few other patters I don't care for Sublime to index. I only want Sublime indexing for `Goto Definition` stuff anyways.

I also don't have anything for `index_exclude_patterns` since they are already in the `binary_file_patterns` above.
