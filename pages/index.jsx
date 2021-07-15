import Head         from 'next/head';
import Script       from 'next/script';
import config       from '../config.json';
import HeadContents from '../components/HeadContents.jsx';
import Header       from '../components/Header.jsx';

export default function Home() {
	return (
		<>
			<Head>
				<HeadContents />
			</Head>

			<div className="container">
				<Header />

				<div className="content">
					<div className="index-content">
						<p>Hi 👋 I am a Senior WordPress Developer <a href="https://webdevstudios.com">@WebDevStudios</a> and a modern-day Stoic on the <a href="/tags/stoicism">hunt for the <em>good life</em></a>. If you want to learn more about me, checkout the links in the menu or any of the blogs below.</p>
					</div>
				</div>

				<footer className="footer">
						<div className="footer__inner">
							
							<div className="copyright copyright--user">Copyright &copy; Aubrey Portwood / <a href="/index.xml"><i className="im im-radio"></i> RSS</a> / Powered by <a href="https://gohugo.io/">hugo</a> &amp; <a href="https://github.com/panr/hugo-theme-hello-friend" target="_blank">hello-friend</a></div>
							
						</div>
				</footer>

				<Script src="scripts/main.js" />
				<Script src="scripts/prism.js" />
				<Script src="scripts/target-blank-menu-links.js" />
				<Script src="scripts/is-stoicism.js" />
				<Script src="scripts/menu-icons.js" />
				<Script src="scripts/index-content.js" />
				<Script src="scripts/githubify-icons.js" />
			</div>
		</>
	)
}
