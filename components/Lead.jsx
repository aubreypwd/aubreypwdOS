import site from '../config.json';

import Navigator from './Navigator.jsx';
import Help from './Help.jsx';

export default function Lead( { slug } ) {
	return <>
		<nav className="lead">
			<h2>
				It&apos;s time to love <Navigator slug={slug} /> again.
			</h2>

			<div className="by">
				by <strong>{site.author}</strong> <em>(type <strong>help</strong> for help)</em>
			</div>
		</nav>

		{ 'help' === slug && <Help /> }
	</>
};

