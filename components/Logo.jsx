import config from '../config.json';
import Image  from 'next/image';


export default function Logo() {
	return (
		<a href="/" className="logo">
			
			<Image 
				className="gravatar" 
				src={config.gravatar} 
				alt={config.title} 
				layout="fixed" 
				width="32"
				height="32" 
			/>
			
			<span className="logo__mark">
				<svg xmlns="http://www.w3.org/2000/svg" className="greater-icon" viewBox="0 0 44 44">
					<path fill="none" d="M15 8l14.729 14.382L15 35.367"/>
				</svg>
			</span>

			<span className="logo__text">{config.siteTitle}</span>
			<span className="logo__cursor"></span>
		</a>
	)
}
