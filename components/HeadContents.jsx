import config from '../config.json';
import Script from 'next/script';

export default function HeadContents() {
	return (
		<>
			<title>{config.title} &mdash; {config.subtitle}</title>
			<link rel="icon" href={config.favicon} />
			<link rel="shortcut icon" href={config.favicon} />

			<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<meta name="keywords" content={config.meta.keywords} />
			<meta name="robots" content={config.meta.robots} />
			<meta name="description" content={config.subtitle} />

			<meta name="twitter:card" content={config.meta.twitter.card} />
			<meta name="twitter:title" content={config.meta.twitter.title} />
			<meta name="twitter:description" content={config.meta.twitter.description} />

			<meta property="og:title" content={config.meta.og.title} />
			<meta property="og:description" content={config.meta.og.description} />
			<meta property="og:type" content={config.meta.og.type} />
			<meta property="og:url" content={config.meta.og.url} />

			<link rel="canonical" href={config.meta.og.url} />
			<link rel="stylesheet" href="https://aubreypwd.com/assets/style.css" />
			<link rel="stylesheet" href="https://aubreypwd.com/style.css" />
		</>
	)
}
