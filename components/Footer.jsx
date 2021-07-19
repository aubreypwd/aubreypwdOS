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

		<style jsx>{`
			@import '../styles/variables.scss';

			footer {
				border-top: 1px solid $grey;
				justify-content: center;

				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				height: 100px;
				width: 100%;

				a {
					align-items: center;
					justify-content: center;
				}

				p {
					color: $grey;
					display: flex;
					flex-direction: column;
					flex-basis: 100%;
					flex: 1;

					&:first-child {
						padding-left: 10px;
					}

					&:last-child {
						text-align: right;
					}
				}
			}
		`}</style>
	</>;
};
