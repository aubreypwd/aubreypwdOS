import config from '../config.json';
import Script from 'next/script';


export default function FooterScripts() {
	return (
		<>
			<Script src="scripts/main.js" />
			<Script src="scripts/prism.js" />
			<Script src="scripts/target-blank-menu-links.js" />
			<Script src="scripts/is-stoicism.js" />
			<Script src="scripts/menu-icons.js" />
			<Script src="scripts/index-content.js" />
			<Script src="scripts/githubify-icons.js" />
		</>
	)
}
