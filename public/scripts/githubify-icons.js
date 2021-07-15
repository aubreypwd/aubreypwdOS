/* globals console, jQuery */

( function() {

	$( '.post a' ).each( function( i, a ) {
		var $a = $( a );

		if ( -1 !== $a.attr( 'href' ).indexOf( 'github.com' ) ) {
			$a.prepend( "<i class='im im-github'></i>" ).addClass( 'github-link' );
		}
	} );

} () );
