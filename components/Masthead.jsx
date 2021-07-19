import site from '../config.json';

import IconLinks from './IconLinks.jsx';
import Navigator from './Navigator.jsx';
import Lead from './Lead.jsx';

export default function MastHead( { slug } ) {
	return <>
		<header>
			<IconLinks />
			<Lead slug={slug} />
		</header>
	</>
};

