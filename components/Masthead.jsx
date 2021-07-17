import {site} from '../next.config.js';
import SocialLinks from './SocialLinks.jsx';
import InteractiveNavigation from './InteractiveNavigation.jsx';

export default function MastHead() {
	return <>
		<header>
			<SocialLinks />

			<InteractiveNavigation />
			<h2>{site.lead}</h2>
		</header>

		<style jsx>{`
			header {

				margin-top: 4rem;

				h2 {
					font-size: 4rem;
					margin: 0;
				}
			}
		`}</style>
	</>
};

