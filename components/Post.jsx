import FadeIn from 'react-fade-in';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';
import moment from 'moment';
import objectFlip from 'object-flip';
import posts from '../posts.json';
import Prism from 'prismjs';
import React, { useState, useEffect } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import sortobject from 'deep-sort-object';
import { fetchPostTextThen } from '../functions.jsx';
import { getFlatPosts } from '../functions.jsx';
import { Link } from 'react-router';
import 'prism-themes/themes/prism-material-dark.css';

export default function Post( { slug } ) {
	const [ state, setState ] = useState( {} );

	const flatPosts = getFlatPosts( posts );

	useEffect( () => {

		if ( state.title && flatPosts.includes( slug ) ) {
			return; // Published posts seek only once, drafts can update as content is updated (live state).
		}

		fetchPostTextThen( slug, text => {

			if ( 'undefined' === typeof slug ) {
				return; // Why does this happen even?s
			}

			const markDownIt = new MarkdownIt( {
				html: true,
				linkify: true,
				typographer: true,
			} );

			markDownIt.use( require( '@gerhobbelt/markdown-it-github-headings' ), {
				enableHeadingLinkIcons: true,
				prefix: false,
				prefixHeadingIds: false,
				className: 'id-link',
			} );

			const m = matter( text );
			const flatPosts = getFlatPosts( posts );

			setState( {
				title:   m.data?.title,
				date:   flatPosts.includes( slug )
					? moment( objectFlip( flatPosts )[ slug ] ).format( 'MMMM Do, YYYY' )
					: 'Unpublished',

				content: ReactHtmlParser( markDownIt.render( m?.content ) ),
			} );

			Prism.highlightAll();
		} );
	} );

	return <article className={`post ${slug}`}>

		<FadeIn>

			<header>
				<h1>{state.title}</h1>
				<span>{state.date}</span>
			</header>

			<div>
				{state.content}
			</div>

		</FadeIn>
	</article>
};

