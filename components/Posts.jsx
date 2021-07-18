import sortobject from 'deep-sort-object';
import objectFlip from 'object-flip';

import PostLink from '../components/PostLink.jsx';

export default function Posts( { slug } ) {
	if ( ! slug || 'help' === slug ) {
		return <></>
	}

	const posts = sortobject( {
		'philosophy': {
			'10-25-1983': 'test',
			'10-26-1983': 'test2',
		},
	} );

	return <>
		<ul className="posts">
			{Object.keys( posts[slug] ).map( date =>
				<li key={`/${posts[slug][date]}`}><PostLink slug={`/${posts[slug][date]}`} /></li>
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
