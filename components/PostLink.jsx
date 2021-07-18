import { Link } from 'react-router';

import React, { useState, useEffect } from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import objectFlip from 'object-flip';
import sortobject from 'deep-sort-object';
import Moment from 'moment';

import posts from '../posts.json';

export default function PostLink( { slug, navigator } ) {
	const [ state, setState ] = useState( {} );

	const markDownIt = new MarkdownIt();

	useEffect( () => {
		if ( state.title ) {
			return;
		}

		fetch( `../content/md/posts/${slug}.md` )
			.then( response => response.text() )
			.then( text => {
				const m    = matter( text );
				const md   = markDownIt.render( m?.content );
				const html = ReactHtmlParser( md );

				// console.log( slug, m.data.date.toString(), m.data.date );

				setState( {
					title:   m.data?.title,
					date: m.data?.date
						? Moment( m.data.date.toString() ).format( 'MMMM Do, YYYY' )
						: Moment( objectFlip( posts[ navigator ] )[ slug ] ).format( 'MMMM Do, YYYY' ),
				} )
			} );
	} );

	return <>
		<a href={slug}>
			<span>{state.title || 'Unknown'}</span>
			<small>{state.date}</small>
		</a>

		<style jsx>{`
			@import '../styles/variables.scss';

			a {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				&:hover {
				}

				span,
				small {
					display: flex;
					flex-direction: column;
					flex-basis: 100%;
					flex: 1;
				}

				small {
					padding-left: 5px;
				}

			}
		`}</style>
	</>
};

