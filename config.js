import {
  faGithub,
  faTwitter,
  faLinkedin,
  faWordpress,

//https://fontawesome.com/v5.15/icons/stack-overflow?style=brands
} from '@fortawesome/free-brands-svg-icons';

import {
  faHome,
  faInbox,
  faComments,
  faTerminal,
  faGifts,

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

module.exports = {
  url: "https://aubreypwd.com",
  title: "aubreypwdOS",
  author: "Aubrey Portwood",
  gravatar: "https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/",
  initialIconSize: 96 * 4,

  // The icons in the Dock.
  icons: [
    {
      href: "https://twitter.com/aubreypwd",
      icon: faTwitter,
      newWindow: true,
      title:"Twitter",
      fileName: "Twitter" // For Terminal
    },
    {
      href: "https://github.com/aubreypwd",
      icon: faGithub,
      newWindow: true,
      title:"Github",
      fileName: 'Github' // For Terminal
    },
    {
      href: "https://linkedin.com/in/aubreypwd",
      icon: faLinkedin,
      newWindow: true,
      title:"LinkedIn",
      fileName: 'LinkedIn' // For Terminal
    },
    {
      href: "https://profiles.wordpress.org/aubreypwd/",
      icon: faWordpress,
      newWindow: true,
      title:"WordPress.org",
      fileName: 'WordPress' // For Terminal
    },
    {
      href: "https://communityinviter.com/apps/aubreypwd/aubreypwd",
      icon: faComments,
      newWindow: true,
      title:"Slack",
      fileName: 'Slack' // For Terminal
    },
    {
      href: "https://www.giftster.com/gift/public/Cs5vO/",
      icon: faGifts,
      newWindow: true,
      title:"Wishlist",
      fileName: 'Wishlist' // For Terminal
    },
    {
      href: "/terminal",
      icon: faTerminal,
      newWindow: true,
      title:"Terminal",
      fileName: 'Terminal.app' // For Terminal
    }
  ]
};
