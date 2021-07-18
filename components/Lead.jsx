import {site} from '../next.config.js';

import SocialLinks from './SocialLinks.jsx';
import Navigator from './Navigator.jsx';
import Help from './Help.jsx';

export default function Lead( { slug } ) {
	return <>
		<h2 className={slug}>
			It&apos;s time to love <Navigator slug={slug} /> again.
		</h2>

		<small>
			<em>type <strong>help</strong> for help.</em>
		</small>

		{'help' === slug &&
			<Help />
		}

		<style jsx>{`
			@import '../styles/variables.scss';

			h2 {
				font-size: 4rem;
				margin: 0;
			}

			small {
				font-weight: normal;
				color: $grey;
				padding-left: 10px;
				font-size: 1rem;
				line-height: 2rem;
			}
		`}</style>
	</>
};

