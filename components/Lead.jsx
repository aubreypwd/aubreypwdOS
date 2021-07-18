import {site} from '../next.config.js';

import SocialLinks from './SocialLinks.jsx';
import Navigator from './Navigator.jsx';
import Help from './Help.jsx';

export default function Lead( { slug } ) {
	if ( 'help' === slug ) {
		return <Help />
	}

	return <>
		<h2
			className={slug}
			dangerouslySetInnerHTML={{ __html: `It's time to love<br> <em>something</em> again.`.replace( 'something', slug || 'something' ) }}>
		</h2>

		<style jsx>{`
			h2 {
				font-size: 4rem;
				margin: 0;
			}
		`}</style>
	</>
};

