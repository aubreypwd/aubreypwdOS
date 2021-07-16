import React, { useEffect, useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import striptags from 'striptags';
import config from '../config.json';
import sortobject from 'deep-sort-object';
import objectFlip from 'object-flip';
import FormattedDate from '../components/FormattedDate.jsx';

export default function Post( { slug, date, excerpt = false } ) {
	const [state, setState] = useState( 0 );

	useEffect( () => {

		fetch( `../content/md/posts/${slug}.md` )
			.then( response => response.text() )
			.then( text => {
				const m    = matter( text );
				const md   = new MarkdownIt().render( m?.content );
				const html = ReactHtmlParser( md );

				setState( {
					title:   m.data?.title,
					content: html,
					date: m.data?.date 
						? m.data?.date.toString()                           // You can override shown date in frontmatter.
						: objectFlip( sortobject( config.posts ) )[ slug ], // If not, use date from config.posts.

					excerpt: excerpt 
						? striptags( md ).substr( 0, config.excerptLength ) // Excerpt.
						: '',                                               // No excerpt.
				} )
			} );
	} );

	return (
		<div key={slug} className="post on-list">
			<h1 className="post-title"><a href={slug}>{state.title}</a></h1>
			
			<div className="post-meta">
				<span className="post-date">
					<FormattedDate date={state?.date} />
				</span>
			</div>

			<div className="post-content">
				{excerpt ? state.excerpt : state.content}
			</div>
			
			{ excerpt &&
				<a className="read-more button" href={slug}>Read more →</a>
			}
		</div>
	);
}
