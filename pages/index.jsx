import config from '../config.js';
import IconLink from '../components/IconLink.jsx';
import Header from '../components/Header.jsx';
import FadeIn from 'react-fade-in';

export default function Index() {

	return <>

		<Header />

		<FadeIn transitionDuration={400*4} delay={500}>
			<div className="icons">
				<ul>
					{config.icons.map( icon => {
						return <li key={icon.href} className={icon.href}>
							<IconLink
								href={icon.href}
								icon={icon.icon}
								newWindow={icon.newWindow}
								title={icon.title}
								size={config.initialIconSize} />
						</li>
					})}
				</ul>
			</div>
		</FadeIn>

	</>
}
