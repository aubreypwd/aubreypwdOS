import Head from 'next/head'
import config from '../config.json';

import IconLink from '../components/IconLink.jsx';

import {
	faGithub,
	faTwitter,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
	faHome,
	faInbox
} from '@fortawesome/free-solid-svg-icons';


export default function Home() {
	return <>
		<Head>
			<title>{config.title}</title>
			<meta name="description" content={config.description} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<div className="icons">
			<ul>
				<li><IconLink href="mailto:contact@aubreypwd.com" icon={faInbox} newWindow={false} title="Email Me" /></li>
				<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" /></li>
				<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" /></li>
				<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" /></li>
			</ul>
		</div>
	</>
}
