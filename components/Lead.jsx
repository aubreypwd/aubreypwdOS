import config   from '../config.json';
import Markdown from '../components/Markdown.jsx';

export default function Lead() {
	return (
		<div className="index-content">
			<p><Markdown value={config.lead} /></p>
		</div>
	)
}
