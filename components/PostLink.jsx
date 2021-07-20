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

import { getFlatPosts } from '../functions.jsx';

export default function PostLink( { slug } ) {
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
					: moment( objectFlip( getFlatPosts( posts ) )[ slug ] ).format( 'MMMM Do, YYYY' ),
			} )
		} );
	} );

	return <>
		<a href={slug} className="postlink">
			<strong>{state.title || 'Unknown'}</strong>
			<small>{state.date}</small>
		</a>
	</>
};

