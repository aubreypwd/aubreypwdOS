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

export default function Post( { slug, navigator } ) {
	const [ state, setState ] = useState( {} );

	const markDownIt = new MarkdownIt();

	useEffect( () => {
		if ( state.title ) {
			return;
		}

		fetchPostTextThen( slug, text => {
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
			<span><datetime>{state.date}</datetime></span>
		</header>

		{state.content}

		<style jsx>{`
			@import '../styles/variables.scss';

			header {
				margin-bottom: 50px;

				h1,
				span {
					display: block;
				}

				h1 {
					font-size: 2rem;

					&:first-child {
						margin-bottom: 5px;
					}
				}

				span {
					padding-left: 0;
					margin-top: 10px;
					color: $grey;
					font-style: italic;
					padding-left: 10px;
				}
			}
		`}</style>
	</>
};

