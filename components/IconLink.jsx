import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLink( { href, icon } ) {
	return <>
		<a href={href} rel="noreferrer" target="_blank">
			<FontAwesomeIcon icon={icon} height="32" width="32" />
		</a>
	</>;
};
