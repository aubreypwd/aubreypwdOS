import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLink( {
	href,
	icon,
	newWindow = false,
	title = '',
	size = 96,
	description = '',
} ) {

	return <>

		<a href={href} rel="noreferrer" target={ newWindow ? '_blank' : '' }>
			<div className="icon"><FontAwesomeIcon icon={icon} height={size} width={size} /></div>
			<div className="title">{title}</div>
		</a>
	</>;
};
