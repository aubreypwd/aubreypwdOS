import matter from 'gray-matter'

import PostBlurb from '../components/PostBlurb.jsx'

export default function Archive( { slug } ) {

	const archive = [
		'apple-watch-se-watch-os-7-review',
		'better-words-for-stoic-virtues',
		'de-centralize-configs-gitconfig-gitignore',
		'hello-world-1-1',
		'hello-world',
		'stoic-five-minute-journal',
		'stoic-week-2020-friday',
		'stoic-week-2020-saturday',
		'stoic-week-2020-sunday-makeup',
		'stoic-week-2020-thursday',
		'stoic-week-2020-tuesday',
		'stoic-week-2020-wednesday',
		'sublime-file-hangs-on-save',
	];

	return (
		<div className="archive posts">
			{ archive.map( slug => <PostBlurb key={slug} slug={slug} /> ) }
		</div>
	);
}
