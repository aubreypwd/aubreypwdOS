import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeIn from 'react-fade-in';

export default function IconLink( { href, icon, newWindow = false, title = '' } ) {
	return <FadeIn>
		<a href={href} rel="noreferrer" target={ newWindow ? '_blank' : '' }>
			<div><FontAwesomeIcon icon={icon} height="96" width="96" /></div>
			<div className="title">{title}</div>
		</a>
	</FadeIn>;
};
