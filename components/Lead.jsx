import {site} from '../next.config.js';

import Navigator from './Navigator.jsx';
import Help from './Help.jsx';

export default function Lead( { slug } ) {
	return <>
		<aside className="lead">
			<h2>
				It&apos;s time to love <Navigator slug={slug} /> again.
			</h2>

			<small>
				<em>type <strong>help</strong> for help.</em>
			</small>
		</aside>

		{'help' === slug &&
			<Help />
		}
	</>
};

