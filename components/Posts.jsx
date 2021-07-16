import matter from 'gray-matter'
import Post from '../components/Post.jsx'
import sortobject from 'deep-sort-object';
import objectFlip from 'object-flip';
import config from '../config.json';

export default function Posts( { slug } ) {

	// Make sure we show posts by date.
	const posts = sortobject( config.posts );

	return (
		<div className="posts posts">
			{Object.keys( posts ).map( date => <Post 
				key={date} 
				slug={posts[ date ]} 
				date={objectFlip( posts )[ posts[ date ] ]}

				// Show the excerpt.
				excerpt={true}
			/> )}
		</div>
	);
}
