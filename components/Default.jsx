import Head          from 'next/head';
import config        from '../config.json';
import HeadContents  from '../components/HeadContents.jsx';
import Header        from '../components/Header.jsx';
import Footer        from '../components/Footer.jsx';
import FooterScripts from '../components/FooterScripts.jsx';
import Lead          from '../components/Lead.jsx';
import Content       from '../components/Content.jsx';

export default function Default( { slug } ) {
	return (
		<>
			<Head>
				<HeadContents />
			</Head>

			<div className="container">
				<Header />

				<div className="content">
					<Lead />
				</div>

				<Content slug={slug} />

				<Footer />
				<FooterScripts />
			</div>
		</>
	)
}
