import {site} from '../next.config.js';
import SocialLinks from './SocialLinks.jsx';

export default function MastHead() {
	return <>
		<header>
			<SocialLinks />

			<h1>{site.title}</h1>
			<h2>{site.lead}</h2>
		</header>

		<style jsx>{`
			header {

				margin-top: 4rem;

				h1 {

					margin: 0;
					font-size: 1rem;

					a {
						color: #0070f3;
						text-decoration: none;

						&:hover,
						&:focus,
						&:active {
							text-decoration: underline;
						}
					}
				}

				h2 {
					font-size: 4rem;
					margin: 0;
				}
			}
		`}</style>
	</>
};

