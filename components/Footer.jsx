import {site} from '../next.config.js';

export default function Posts() {
	return <>
		<footer>
			<p>
				<em><small>Copyright &copy; {site.author}</small></em>
			</p>

			<p>
				<small>Built on Next</small>
			</p>
		</footer>
	</>;
};
