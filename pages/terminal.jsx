import Terminal from 'react-console-emulator';
import { useState } from 'react';
import config from '../config.js';
import Header from '../components/Header.jsx';

export default function Index() {
	const [ currentDir, setCurrentDir ] = useState( '~' );

	const [ files, setFiles ] = useState( {

		'~': [
			'links',
			'mcfarlin',
			'papyrus',
		],

		// Because why would I not?
		'mcfarlin': {
			'mustard-calls':       () => window.open( 'https://www.youtube.com/watch?v=QWDpk7ZI6HA', '_blank' ),
			'tom-is-an-introvert': () => window.open( 'https://www.youtube.com/watch?v=KULbfJK0Lnw', '_blank' ),
			'Wordpress':           () => window.open( 'https://www.youtube.com/watch?v=3ytA-GrqQVY', '_blank' ),
		},

		'papyrus': {
			'papyrus.ttf':          () => document.getElementsByClassName( 'terminal' )[0].classList.add( 'papyrus' ),
			'imadeamistake.ttf': () => document.getElementsByClassName( 'terminal' )[0].classList.remove( 'papyrus' ),
		},

		// The same things on the homepage.
		'links': [
			'..',
			...config.icons.map( icon => icon.fileName ),
		],

	} );

	return <>

		<Header subTitle='Terminal' />

		<div className="terminal">

				<Terminal

					commands={{

						exit: {
							description: 'Exit this terminal',
							usage: 'exit',
							fn: () => window.close(),
						},

						// Open command.
						open: {
							description: 'Open a file.',
							usage: 'open [file]',

							fn: ( arg1 ) => {

								// links
								if ( 'links' === currentDir && files.links.includes( arg1 ) ) {
									config.icons.map( icon => {

										if ( icon.fileName !== arg1 ) {
											return;
										}

										window.open( icon.href, '_blank' );
									} );

									return false;
								}

								if ( ! files[currentDir][arg1] ) {

									return `No file named ${arg1} in ${currentDir}/.`;
								}

								const call = files[currentDir][arg1]();

								if ( 'string' === typeof call ) {
									return call;
								}

								return false;
							}
						},

						// cd command.
						cd: {
							description: 'Open a folder.',
							usage: 'cd [folder]',

							fn: ( arg1 ) => {

								if ( '..' === arg1 ) {
									setCurrentDir( '~' );
									return false;
								}

								if ( ! files[ arg1 ] ) {
									return `No folder called ${arg1}`;
								}

								return setCurrentDir( arg1 );
							}
						},

						// ls command.
						ls: {
								description: 'List files.',
								usage: 'ls',

								fn: () => {

									return [
										'total ' + Object.keys( files[ currentDir ] ).length,

										...Object.entries( files[ currentDir ] ).map( ( i, v ) => {

											if ( '~' !== currentDir ) {

												// Maybe a function or maybe a string only.
												if ( 'object' === typeof i ) {

													// String only.
													if ( 'string' === typeof i[1] ) {
														return i[1];
													}

													// Must have  a function.
													return i[0];
												}

												// Everything else.
												return `${i[1]}`;
											}

											// Directory.
											return `${i[1]}/`;
										} ),

									].join( '\n' );
								}
							}
					}}

					promptLabelStyle={{ color: '#59cfe1' }}
					inputTextStyle={{ color: '#78d18b' }}
					welcomeMessage="Welcome to aubreypwdOS"
					promptLabel={<strong>{`aubreypwdOS@${currentDir}/$`.replace( '~/', '~')}</strong>}
					autoFocus={true}
				/>
			</div>
	</>
}
