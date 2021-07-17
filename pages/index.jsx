import Head from 'next/head'
import {site} from '../next.config.js';
import Masthead from '../components/Masthead.jsx';
import Posts from '../components/Posts.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
	return <>
		<Head>
			<title>{site.title} by {site.author} &mdash; {site.description}</title>
			<meta name="description" content={site.description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="container">
			<Masthead />

			<main className="main">
				<article>
					<Posts />
				</article>
			</main>

			<Footer />
		</div>

		<style jsx>{`
			@import '../styles/variables.scss';

			.container {
				align-items: center;
				justify-content: center;
				margin: auto;
				padding: 0 2rem;
				width: 800px;

				@media (max-width: 600px) {
					width: 100%;
				}
			}

			.main {
				align-items: center;
				justify-content: center;
				padding: 2rem 0 2rem 0;
			}
		`}</style>
	</>
}
