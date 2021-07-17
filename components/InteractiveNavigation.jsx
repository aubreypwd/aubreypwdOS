import {site} from '../next.config.js';
import SocialLinks from './SocialLinks.jsx';
import React, { useEffect } from 'react';

export default function MastHead() {

	const valids = [ 'developer', 'stoic' ];

	useEffect( () => {

		document.getElementById( 'input' ).focus();
	} );

	function click( event ) {
		event.preventDefault();
	}

	function up( event ) {

		if ( ! valids.includes( event.target.value ) ) {

			event.target.classList.add( 'invalid' );
			return;
		}

		event.target.classList.remove( 'invalid' );
		event.target.classList.add( 'valid' );

		if ( 'Enter' !== event.code ) {
			return;
		}

		if ( ! valids.includes( event.target.value ) ) {
			return;
		}

		// Load <Posts/> component dynamically.
	}

	return <>
		<h1>
			<a href="/">
				{site.title}/
				<input
					type="text"
					id="input"
					onClick={click}
					onKeyUp={up}
					autoComplete="off"
					maxLength="19"/>
			</a>
		</h1>

		<style jsx>{`
			@import '../styles/variables.scss';

			h1 {

				input,
				input:active,
				input:focus,
				input:focus-within {
					border: 0;
					border-bottom: 1px solid transparent;
					display: inline;
					font-family: inherit;
					font-size: inherit;
					padding: 0;
					width: auto;
					outline: none;
					font-weight: bold;
					caret-color: black;

					&:focus {
						border-bottom: 1px solid $grey;
					}

					&.valid {
						color: green;
					}

					&.invalid {
						color: red;
					}
				}

				margin: 0;
				font-size: 1rem;

				a {
					color: $black;
					text-decoration: none;
				}
			}
		`}</style>
	</>
};

