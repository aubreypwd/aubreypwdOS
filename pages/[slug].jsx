import Default from '../components/Default.jsx';
import { useRouter } from 'next/router';

export default function Slug() {
	const { slug } = useRouter().query;

	return <>
		<Default slug={slug} />
	</>
}
