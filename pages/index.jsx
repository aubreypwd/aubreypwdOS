import Head from 'next/head'
import IconLink from '../components/IconLink.jsx';
import FadeIn from 'react-fade-in';

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

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=skull&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

const config = {

	url: "https://aubreypwd.com",
	title: "aubreypwdOS",
	author: "Aubrey Portwood",
	gravatar: "https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/",
	initialIconSize: 96 * 4
}

console.log( `%c\\( ﾟヮﾟ)/ Thanks for visiting ${config.title} a simple site that links to further things about me, ${config.author}`, 'color: #ff00ff' );
console.log( '%cBuilt with <3 and Next.js - https://github.com/aubreypwd/aubreypwdOS', 'color: #06e6f2' );

export default function Index() {
	return <>

		<Head>
			<title>{config.title} | {config.author}</title>
			<meta name="description" content={config.title} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<FadeIn transitionDuration={400*4} delay={500}>
			<div className="icons">
				<ul>
					<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" size={config.initialIconSize} description="I mostly do things on Twitter, you're going to get to know me more personally there."/></li>
					<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" size={config.initialIconSize} description="I code and type things in my terminal, it's all mostly on Github."/></li>
					<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" size={config.initialIconSize} description="You're going to learn more about my past and my skills here, I rarely post here." /></li>
					<li><IconLink href="https://profiles.wordpress.org/aubreypwd/" icon={faWordpress} newWindow={true} title="WordPress.org" size={config.initialIconSize} description="I've been build WordPress websites for over 10 years and try my best to stay involved in the WordPress community."/></li>
					<li><IconLink href="https://tlk.io/aubreypwd" icon={faComments} newWindow={true} title="Chat" size={config.initialIconSize} description="If I'm at my computer, feel free to chat with me directly, but remember it's public."/></li>
				</ul>
			</div>
		</FadeIn>
	</>
}
