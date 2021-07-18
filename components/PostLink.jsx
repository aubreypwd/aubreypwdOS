import { Link } from 'react-router';

export default function PostLink( { slug } ) {
	return <>
		<a href={slug}></a>

		<style jsx>{`
			// None
		`}</style>
	</>
};

