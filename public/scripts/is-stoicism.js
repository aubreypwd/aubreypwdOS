/* globals console, jQuery */

( function() {
	
	function isStoicismUri() {
		return -1 !== window.location.href.indexOf( '/stoicism' );
	}

	function isStoicContent() {
		return false; // @TODO: Fix.
	}

	if ( 
		! isStoicismUri() &&
		! isStoicContent()
	) {
		return;
	}

	$( '.menu__inner a' ).each( function( i, e ) {
		var $e = $( e );

		if ( -1 === $e.attr( 'href' ).indexOf( 'stoicism' ) ) {
			return;
		}

		$e.addClass( 'active' );
	} );
} () );
