import config from '../config.js';
import Head from 'next/head'

export default function Header( { subTitle } ) {

	return <>
		<Head>
			<title>{subTitle ? `<${subTitle}>` : ''} {config.title} | {config.author}</title>
			<meta name="description" content={config.title} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>
	</>;
};
