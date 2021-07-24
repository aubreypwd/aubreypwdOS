import site from '../config.json';

import {
	faGithub,
	faTwitter,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
	faHome,
	faInbox
} from '@fortawesome/free-solid-svg-icons';

import IconLink from './IconLink.jsx';

export default function IconLinks() {
	return <>
		<nav className="icons">
			<ul>
				<li><IconLink href="mailto:contact@aubreypwd.com" icon={faInbox} newWindow={false} title="Email me" /></li>
				<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} title="Github" /></li>
				<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} title="Twitter" /></li>
				<li><IconLink href="https://linkedin.com/in/aubreypwd" icon={faLinkedin} newWindow={true} title="LinkedIn" /></li>
			</ul>
		</nav>

		<style jsx>{`
		`}</style>
	</>;
};
