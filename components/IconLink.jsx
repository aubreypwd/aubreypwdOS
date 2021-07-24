import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLink( { href, icon, newWindow = false, title = '' } ) {
	return <>
		<a href={href} rel="noreferrer" target={ newWindow ? '_blank' : '' } title={title}>
			<FontAwesomeIcon icon={icon} height="32" width="32" />
		</a>
	</>;
};
