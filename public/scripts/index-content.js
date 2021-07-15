/* globals console, jQuery */

( function() {
	var control = {
		'page/': false // Pagination
	};

	for ( var test in control ) {
		var show = control[ test ];
		var test = -1 === window.location.href.indexOf( test ) ? false : true;
		
		if ( false == show && test ) {
			$( 'body' ).addClass( 'no-index-content' );
		}
	}
} () );
