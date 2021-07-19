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

export default function PostLink( { slug, navigator } ) {
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
			} )
		} );
	} );

	return <>
		<a href={slug}>
			<strong>{state.title || 'Unknown'}</strong>
			<small>{state.date}</small>
		</a>

		<style jsx>{`
			@import '../styles/variables.scss';

			a {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				border-bottom: none !important;

				&:hover {
				}

				strong,
				small {
					display: flex;
					flex-direction: column;
					flex-basis: 100%;
					flex: 1;
					padding: 10px 0;
					margin: 0;
				}

				small {
					display: inline-block;
					padding-left: 5px;
					font-style: italic;
					text-align: right;
					justify-content: space-between;
					align-self: center;
					color: $grey;
				}
			}
		`}</style>
	</>
};

