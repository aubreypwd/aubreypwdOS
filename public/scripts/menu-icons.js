/* globals console, jQuery */

( function() {

	// https://iconmonstr.com/iconicfont/
	var config = {
		'github.com': 'github',
		'linkedin.com': 'linkedin',
		'twitter.com': 'twitter',
		'stoicism': 'book',
	};

	for ( var hrefPart in config ) {
		var icon = config[ hrefPart ];

		$( '.menu__inner a' ).each( function( i, e ) {
			var $e = $( e );

			if ( -1 === $e.attr( 'href' ).indexOf( hrefPart ) ) {
				return;
			} 

			$e.prepend( "<i class='im im-" + icon + "'></i>" );
			} );
	}

} () );
