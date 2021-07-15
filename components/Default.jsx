import Head          from 'next/head';
import config        from '../config.json';
import Header        from '../components/Header.jsx';
import Footer        from '../components/Footer.jsx';
import FooterScripts from '../components/FooterScripts.jsx';
import Lead          from '../components/Lead.jsx';
import Content       from '../components/Content.jsx';

export default function Default( { slug } ) {

	// @TODO Why can't I get Slug from this?
	const fullUrl = `${config.meta.og.url ?? ''}/${slug ?? ''}`;

	return (
		<>
			<Head>
				<title>{config.title ?? ''} &mdash; {config.subtitle ?? ''}</title>
				
				<link rel="icon" href={config.favicon ?? ''} />
				<link rel="shortcut icon" href={config.favicon ?? ''} />

				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="keywords" content={config.meta.keywords ?? ''} />
				<meta name="robots" content={config.meta.robots ?? ''} />
				<meta name="description" content={config.subtitle ?? ''} />

				<meta name="twitter:title" content={config.meta.twitter.title ?? ''} />
				<meta name="twitter:card" content={config.meta.twitter.card ?? ''} />
				<meta name="twitter:description" content={config.meta.twitter.description ?? ''} />

				<meta property="og:title" content={config.meta.og.title ?? ''} />
				<meta property="og:description" content={config.meta.og.description ?? ''} />
				<meta property="og:type" content={config.meta.og.type ?? ''} />
				
				<meta property="og:url" content={fullUrl} />
				<link rel="canonical" href={fullUrl} />
			</Head>

			<div className="container">
				<Header />

				<div className="content">
					<Lead />
					<Content slug={slug} />
				</div>

				<Footer />
				<FooterScripts />
			</div>
		</>
	)
}
