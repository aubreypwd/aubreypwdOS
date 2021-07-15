import config from '../config.json';

export default function MainNav() {
	return (
		<nav className="menu">
			<ul className="menu__inner menu__inner--desktop">
				<li><a href="https://github.com/aubreypwd">Github</a></li>
				<li><a href="https://linkedin.com/in/aubreypwd">LinkedIn</a></li>
				<li><a href="/tags/stoicism">Stoicism</a></li>
				<li><a href="https://twitter.com/aubreypwd">Tweets</a></li>
			</ul>

			<ul className="menu__inner menu__inner--mobile">
				<li><a href="https://github.com/aubreypwd">Github</a></li>
				<li><a href="https://linkedin.com/in/aubreypwd">LinkedIn</a></li>
				<li><a href="/tags/stoicism">Stoicism</a></li>
				<li><a href="https://twitter.com/aubreypwd">Tweets</a></li>
			</ul>
		</nav>
	)
}
