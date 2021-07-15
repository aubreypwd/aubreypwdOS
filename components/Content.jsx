import config  from '../config.json';
import Archive from '../components/Archive.jsx';
import Page    from '../components/Page.jsx';

export default function Content( { slug } ) {

	function noSlug() {
		return '' === slug || 'undefined' === typeof slug;
	}

	if ( noSlug() ) {
		return (
			<Archive />
		);
	}

	return (
		<Page slug={slug} />
	);
}
