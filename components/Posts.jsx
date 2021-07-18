import sortobject from 'deep-sort-object';
import objectFlip from 'object-flip';

import PostLink from '../components/PostLink.jsx';

import posts from '../posts.json';

export default function Posts( { slug } ) {
	if ( ! slug || 'help' === slug ) {
		return <></>
	}

	const sorted = sortobject( posts );

	return <>
		<ul>
			{Object.keys( sorted[slug] ).map( date =>
				<li key={`/${sorted[slug][date]}`}>
					<PostLink slug={`${sorted[slug][date]}`} />
				</li>
			)}
		</ul>

		<style jsx>{`
			ul {

				li {
					padding: 3px 0;
				}
			}
		`}</style>
	</>;
};
