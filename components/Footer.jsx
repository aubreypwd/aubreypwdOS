import config from '../config.json';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="copyright copyright--user">
					Copyright &copy; {config.author}
				</div>
			</div>
		</footer>
	)
}
