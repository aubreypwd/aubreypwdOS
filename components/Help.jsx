import {site} from '../next.config.js';
import FadeIn from 'react-fade-in';

export default function Help( { slug } ) {
	return <>
		<FadeIn>
			<p>
				Try <strong>coding</strong> or <strong>philosophy</strong>.
			</p>
		</FadeIn>
	</>
};

