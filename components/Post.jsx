import { Link } from 'react-router';

import React, { useState, useEffect } from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import objectFlip from 'object-flip';
import sortobject from 'deep-sort-object';
import moment from 'moment';

import posts from '../posts.json';

export default function Post( { slug, navigator } ) {
	const [ state, setState ] = useState( {} );

	const markDownIt = new MarkdownIt();

	useEffect( () => {
		fetch( `../content/md/posts/${slug}.md` )
			.then( response => response.text() )
			.then( text => {
				const m = matter( text );

				setState( {
					title: m.data?.title,
					date:  m.data?.date
						? moment( m.data.date.toString() ).format( 'MMMM Do, YYYY' )
						: moment( objectFlip( posts[ navigator ] )[ slug ] ).format( 'MMMM Do, YYYY' ),

					content: ReactHtmlParser( markDownIt.render( m?.content ) ),
				} )
			} );
	} );

	return <>
		<header>
			<h1>{state.title}</h1>
			<div><small><date>{state.date}</date></small></div>
		</header>

		{state.content}

		<style jsx>{`
			@import '../styles/variables.scss';

			header {

				h1 {
					&:first-child {
						margin-bottom: 5px;
					}
				}

				div {
					margin-bottom: 40px;

					date {
						color: $grey;
						font-style: italic;
						font-weight: bold;
					}
				}
			}
		`}</style>
	</>
};

