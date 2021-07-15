import { useRouter } from 'next/router';
import Default       from '../components/Default.jsx';

export default function Content() {
	const { slug } = useRouter().query;

	return (
		<>
			<Default slug={slug} />
		</>
	)
}
