import config from '../config.js';
import Head from 'next/head'
import IconLink from '../components/IconLink.jsx';
import FadeIn from 'react-fade-in';

export default function Index() {

	return <>

		<Head>
			<title>{config.title} | {config.author}</title>
			<meta name="description" content={config.title} />
			<link rel="icon" href={`${config.gravatar}?s=32`} />
		</Head>

		<FadeIn transitionDuration={400*4} delay={500}>
			<div className="icons">
				<ul>
					{config.icons.map( icon => {
						return <li key={icon.href}>
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
