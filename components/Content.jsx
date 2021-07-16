import config  from '../config.json';
import Posts   from '../components/Posts.jsx';
import Post    from '../components/Post.jsx';

export default function Content( { slug } ) {
	
	if ( '' === slug || 'undefined' === typeof slug ) {
		return <Posts />;
	}

	return <Post slug={slug} />;
}
