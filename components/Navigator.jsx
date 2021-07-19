import {site} from '../next.config.js';
import SocialLinks from './SocialLinks.jsx';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import posts from '../posts.json';
import { getFlatPosts, getPostCategory } from '../functions.jsx';

export default function Navigator( { slug } ) {

	const router = useRouter();

	useEffect( () => {
		const input = document.getElementById( 'input' );

		if ( ! input ) {
			return;
		}

		input.focus();
		input.select();
	} );

	const valids = [
		...Object.keys( posts ),
		'help',
		'?',
	];

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

	function getDefaultInputValue() {
		return getPostCategory( slug, posts );
	}

	return <>
		<div>
			<input
				type="text"
				id="input"
				onClick={click}
				onKeyUp={up}
				autoComplete="off"
				onFocus={focus}
				maxLength="19"
				defaultValue={getDefaultInputValue()} />
		</div>

		<style jsx>{`
			@import '../styles/variables.scss';

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
				width: 100%;
				dispaly: block;

				&::selection{
					background: $black;
					color: $white;
				}

				&:focus.valid {
					// Nothing;
				}

				&.invalid {
					color: $lightRed;
				}
			}
		`}</style>
	</>
};

