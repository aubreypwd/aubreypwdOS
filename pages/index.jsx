import Head from 'next/head'
import config from '../config.json';
import IconLink from '../components/IconLink.jsx';
import FadeIn from 'react-fade-in';

import {
	faGithub,
	faTwitter,
	faLinkedin,
	faWordpress,
	faStackOverflow,

//https://fontawesome.com/v5.15/icons/stack-overflow?style=brands
} from '@fortawesome/free-brands-svg-icons';

import {
	faHome,
	faInbox,

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=skull&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

const size = 96;

export default function Home() {
	return <>
		<Head>
			<title>{config.title}</title>
			<meta name="description" content={config.description} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<FadeIn transitionDuration={400*4} delay={50*2}>
			<div className="icons">
				<ul>
					<li><IconLink href="mailto:contact@aubreypwd.com" icon={faInbox} newWindow={false} title="Email Me" size={size} /></li>
					<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" size={size} /></li>
					<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" size={size} /></li>
					<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" size={size} /></li>
					<li><IconLink href="https://profiles.wordpress.org/aubreypwd/" icon={faWordpress} newWindow={true} title="WordPress.org" size={size} /></li>
					<li><IconLink href="https://stackoverflow.com/users/1436129/aubreypwd" icon={faStackOverflow} newWindow={true} title="Stack Overflow" size={size} /></li>
				</ul>
			</div>
		</FadeIn>
	</>
}
