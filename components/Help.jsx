import site from '../config.json';
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

