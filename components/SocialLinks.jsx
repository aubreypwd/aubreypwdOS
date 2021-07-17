import {site} from '../next.config.js';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon.jsx';

export default function SocialLinks() {
	return <>
		<nav>
			<ul>
				<li><SocialIcon href="https://github.com/aubreypwd" icon={faGithub} /></li>
				<li><SocialIcon href="https://twitter.com/aubreypwd" icon={faTwitter} /></li>
			</ul>
		</nav>

		<style jsx>{`
			nav {

				ul {
					display: inline-block;
					padding: 1rem 0;
					margin: 0;

					li {
						display: inline-block;
						padding: 0 5px;

						&:first-child {
							padding-left: 0;
						}
					}
				}
			}
		`}</style>
	</>;
};
