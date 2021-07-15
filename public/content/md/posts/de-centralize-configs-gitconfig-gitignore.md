---
title: "De-centralizing my system configurations: dotfiles"
date: 2020-09-18T12:28:58-06:00
---

_Note, I've [entirely ditched](https://twitter.com/aubreypwd/status/1307807612646219776?s=20) this system and opted for a new one I will post about later._

---

Today I did some experimenting. You see my system is entirely customized to be super-efficient and automated. 

[![Screenshot of my current .config](/images/greenshot-2020-09-18-184905.png)](/images/greenshot-2020-09-18-184905.png)

As you can see I currently have these housed in a giant Git repository in my `~/.config/`. This has worked out just fine for a while, but I wanted to experiment with trying to de-centralize it with some kind of package management.

Today I focused on my `.gitconfig` and `.gitignore` files as an experiment with just my "dot-files", and this is what I've come up with:

So I wantedo to figure out what package manager is going to best serve me here. After looking at a lot of them, e.g. npm, bpkg, composer, and a slew of others, I settled on spamming Composer. I know my "packages" are not PHP, but Composer doesn't care about that, plus of all the package managers it's the easiest to install with git repo support (try doing that with npm or other package managers out there), it manages them well in a reliable location, and on top of that with `composer-installers` I think I can do some really cool magic later on...

So I settled on Composer, hate me. 

So first I got my `.gitignore` and `.gitconfig` files into their own packages:

- [https://github.com/aubreypwd/.gitconfig](https://github.com/aubreypwd/.gitconfig)
- [https://github.com/aubreypwd/.gitignore](https://github.com/aubreypwd/.gitignore)

...that I could now easliy install to a reliable place, `~/.composer`. Both packages automatically symlink my `~/.gitconfig|ignore` file for me using the [`/sioweb/ccevent`](https://packagist.org/packages/sioweb/ccevent) package. Even if you supply, e.g. a `post-package-install` script for the package, because you install it as a dependancy those scripts to not fire. But this package, when installed along side it, will look for `package-scripts` and run those, so I was able to add that to both packages and when you install them that automatically runs and runs a `symlink.sh` script.

This symlinking solution on install is great because once I install one of these packages, it symlinks my dot-file in `$HOME` for me, vs me having to do it manually.

So now I can install dot-files individually and I can automate symlinking them!

I'm very curious how the rest of this experiment is going to go...
