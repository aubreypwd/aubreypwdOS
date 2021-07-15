import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MarkdownIt from 'markdown-it';

export default function Markdown( { value } ) {
	return ReactHtmlParser( new MarkdownIt().render( value ) );
}
