import React, { useEffect, useState } from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import matter from 'gray-matter';

import MarkdownIt from 'markdown-it';

export default function PostBlurb( { slug } ) {

	const [state, setState] = useState(0);

	useEffect( () => {

		fetch( `../content/md/posts/${slug}.md` )
			.then( response => response.text() )
			.then( text => {
				const m = matter( text );

				setState( {
					content: ReactHtmlParser( new MarkdownIt().render( m?.content ) ),
					title:   m.data?.title,
					date:    m.data?.date.toString(),
				} )
			} );
	} );

	return (
		<div key={slug} className="post on-list">
			<h1 className="post-title"><a href={slug}>{state.title}</a></h1>
			
			<div className="post-meta">
				<span className="post-date">{state?.date}</span>
			</div>

			<div className="post-content">{state?.content}</div>
			
			<div><a className="read-more button" href={slug}>Read more →</a></div>
		</div>
	);
}
