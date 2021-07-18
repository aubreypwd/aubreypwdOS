import {site} from '../next.config.js';

import SocialLinks from './SocialLinks.jsx';
import Navigator from './Navigator.jsx';
import Lead from './Lead.jsx';

export default function MastHead( { slug } ) {
	return <>
		<header>
			<SocialLinks />
			<Navigator slug={slug} />
			<Lead slug={slug} />
		</header>

		<style jsx>{`
			header {
				margin-top: 4rem;
			}
		`}</style>
	</>
};

