import Head from 'next/head'
import config from '../config.json';
import Masthead from '../components/Masthead.jsx';
import Posts from '../components/Posts.jsx';
import Footer from '../components/Footer.jsx';
import Post from '../components/Post.jsx';
import React, { useEffect } from 'react';
import posts from '../posts.json';
import Help from './Help.jsx';
import {title} from '../functions.jsx';

export default function Default( { slug } ) {

	function content( slug ) {

		if ( 'undefined' === typeof slug ) {
			return <></>; // Why does this happen?
		}

		if ( 'help' === slug ) {
			return <Help />
		}

		// Is a category, show it's posts.
		if ( Object.keys( posts ).includes( slug ) ) {
			return <Posts slug={slug} />
		}

		// Must be a post or un-published post.
		return <Post slug={slug} />
	}

	return <>

		<Head>
			<title>{title( slug )}</title>
			<meta name="description" content={config.description} />

			<link rel="icon" href="https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/?s=32" />
		</Head>

		<section className="page">
			<Masthead slug={slug} />

			<main>
				{ content(slug) }
			</main>

			<Footer />
		</section>
	</>;
};
