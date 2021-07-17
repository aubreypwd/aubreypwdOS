import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLinks( { href, icon } ) {
	return <>
		<a href={href} rel="noreferrer" target="_blank">
			<FontAwesomeIcon icon={icon} height="32" width="32" />
		</a>

		<style jsx>{`
			// None
		`}</style>
	</>;
};
