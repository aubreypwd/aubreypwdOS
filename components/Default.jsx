import Head from 'next/head'
import {site} from '../next.config.js';
import Masthead from '../components/Masthead.jsx';
import Posts from '../components/Posts.jsx';
import Footer from '../components/Footer.jsx';
import Post from '../components/Post.jsx';
import posts from '../posts.json';
import {getFlatPosts} from '../functions.jsx';
import React, { useEffect } from 'react';

export default function Default( { slug } ) {

	function post( slug ) {
		let flatPosts = getFlatPosts( posts );

		if ( flatPosts.includes( slug ) ) {
			return <Post slug={slug} />
		}

		return <Posts slug={slug} />
	}

	return <>
		<Head>
			<title>{site.title} by {site.author} &mdash; {site.description}</title>
			<meta name="description" content={site.description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<section className="container">
			<Masthead slug={slug} />

			<main>
				{ post(slug) }
			</main>

			<Footer />
		</section>
	</>;
};
