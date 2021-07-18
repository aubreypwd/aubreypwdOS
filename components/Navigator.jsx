import {site} from '../next.config.js';
import SocialLinks from './SocialLinks.jsx';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navigator( { slug } ) {

	const router = useRouter();

	const valids = [
		'coding',
		'philosophy',
		'help',
		'?',
	];

	useEffect( () => {
		document.getElementById( 'input' ).focus();
	} );

	function click( event ) {
		event.preventDefault();
	}

	function isHelp( value ) {
		return 'help' === event.target.value ||
			'?' === event.target.value;
	}

	function focus( event ) {
		event.preventDefault();

		// Always reset.
		event.target.classList.remove( 'invalid' );
		event.target.classList.remove( 'valid' );

		if ( ! valids.includes( event.target.value ) ) {

			// Invalid.
			event.target.classList.add( 'invalid' );
			event.target.classList.remove( 'valid' );

			return;
		}

		// Valid
		event.target.classList.remove( 'invalid' );
		event.target.classList.add( 'valid' );
	}

	function up( event ) {
		focus( event );

		if ( '' === event.target.value ) {
			router.push( '/' );
			return;
		}

		if ( isHelp( event.target.value ) ) {
			router.push( '/help' );
			return;
		}

		if ( ! valids.includes( event.target.value ) ) {
			return; // Nothing valid, do nothing.
		}

		router.push( event.target.value );
	}

	return <>
		<h1>
			<a href="/">
				{site.title}/<input
					type="text"
					id="input"
					onClick={click}
					onKeyUp={up}
					autoComplete="off"
					onFocus={focus}
					maxLength="19"
					defaultValue={slug} />
			</a>

			<small>
				<em>Then hit <strong>enter</strong> or type <strong>help</strong> for help.</em>
			</small>
		</h1>

		<style jsx>{`
			@import '../styles/variables.scss';

			h1 {

				margin: 0;
				font-size: 1rem;

				a {
					color: $black;
					text-decoration: none;

					input,
					input:active,
					input:focus,
					input:focus-within {
						border: 0;
						border-bottom: 1px solid $grey;
						display: inline;
						font-family: inherit;
						font-size: inherit;
						padding: 0;
						width: auto;
						outline: none;
						font-weight: bold;
						caret-color: black;

						&.valid {
							// color: $lightGreen;
						}

						&.invalid {
							color: $lightRed;
						}
					}
				}

				small {
					font-weight: normal;
					opacity: 40%;
					padding-left: 10px;
				}
			}
		`}</style>
	</>
};

