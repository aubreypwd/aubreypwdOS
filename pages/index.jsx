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

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=skull&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

const config = {

	title: "Aubrey Portwood",
	author: "Aubrey Portwood",
	description: "I mostly build websites, but am also a Stoic",
	gravatar: "https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/",
	iconSize: 96
}

export default function Home() {
	return <>

		<Head>
			<title>{config.author} &mdash; {config.description}</title>
			<meta name="description" content={config.description} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<FadeIn transitionDuration={400*4} delay={500}>
			<div className="icons">
				<ul>
					<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" size={config.iconSize} /></li>
					<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" size={config.iconSize} /></li>
					<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" size={config.iconSize} /></li>
					<li><IconLink href="https://profiles.wordpress.org/aubreypwd/" icon={faWordpress} newWindow={true} title="WordPress.org" size={config.iconSize} /></li>
					<li><IconLink href="mailto:contact@aubreypwd.com" icon={faInbox} newWindow={false} title="Email" size={config.iconSize} /></li>
				</ul>
			</div>
		</FadeIn>
	</>
}
