import site from '../config.json';

export default function Posts() {
	return <>
		<footer>
			<p>
				<em><small>Copyright &copy; {site.author}</small></em>
			</p>

			<p>
				<small>Built on <a href="https://nextjs.org/" rel="noreferrer" target="_blank">Next.js</a></small>
			</p>
		</footer>
	</>;
};
