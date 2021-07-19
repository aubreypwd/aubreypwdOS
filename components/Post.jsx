import { Link } from 'react-router';

import React, { useState, useEffect } from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import objectFlip from 'object-flip';
import sortobject from 'deep-sort-object';
import moment from 'moment';

import posts from '../posts.json';

import { fetchPostTextThen } from '../functions.jsx';

import FadeIn from 'react-fade-in';

import Prism from 'prismjs';
import 'prism-themes/themes/prism-material-dark.css';

export default function Post( { slug, navigator } ) {
	const [ state, setState ] = useState( {} );

	useEffect( () => {
		if ( state.title ) {
			return;
		}

		fetchPostTextThen( slug, text => {
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

			setState( {
				title: m.data?.title,
				date:  m.data?.date
					? moment( m.data.date.toString() ).format( 'MMMM Do, YYYY' )
					: moment( objectFlip( posts[ navigator ] )[ slug ] ).format( 'MMMM Do, YYYY' ),

				content: ReactHtmlParser( markDownIt.render( m?.content ) ),
			} );

			Prism.highlightAll();
		} );
	} );

	return <article className="post">

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

