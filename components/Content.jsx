import config  from '../config.json';
import Posts   from '../components/Posts.jsx';
import Post    from '../components/Post.jsx';

export default function Content( { slug } ) {

	function noSlug() {
		return '' === slug || 'undefined' === typeof slug;
	}

	if ( noSlug() ) {
		return <Posts />;
	}

	return <Post slug={slug} />;
}
