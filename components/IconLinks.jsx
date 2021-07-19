import site from '../config.json';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import IconLink from './IconLink.jsx';

export default function IconLinks() {
	return <>
		<nav className="icons">
			<ul>
				{/*<li><IconLink href="/" icon={faHome} /></li>*/}
				<li><IconLink href="https://github.com/aubreypwd" icon={faGithub} newWindow={true} /></li>
				<li><IconLink href="https://twitter.com/aubreypwd" icon={faTwitter} newWindow={true} /></li>
			</ul>
		</nav>

		<style jsx>{`
		`}</style>
	</>;
};
