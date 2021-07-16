import config from '../config.json';
import Moment from 'moment';

export default function FormattedDate( { date } ) {
	return (
		<>
			{ Moment( date ).format( 'MMMM Do, YYYY' ) }
		</>
	)
}
