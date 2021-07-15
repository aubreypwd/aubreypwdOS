/* globals console, jQuery */

( function() {
	$( '.menu__inner a' ).each( function( i, e ) {
		var $e = $( e );

		if ( -1 === $e.attr( 'href' ).indexOf( '://' ) ) {
			return;
		}

		$e.attr( 'target', '_blank' ).addClass( 'external' );
	} );
} () );
