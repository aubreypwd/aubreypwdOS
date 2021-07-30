import config from '../config.js';
import Header from '../components/Header.jsx';
import Terminal from 'react-console-emulator';
import { useState } from 'react';

export default function Index() {

	// Current directory.
	const [ currentDir, setCurrentDir ] = useState( '~' );

	// Files.
	const [ files, setFiles ] = useState( {

		'~': [
			'links',
			'mcfarlin',
			'papyrus',
		],

		// Because why would I not?
		'mcfarlin': {
			'mustard-calls':       () => window.open( 'https://www.youtube.com/watch?v=QWDpk7ZI6HA', '_blank' ),
			// 'tom-is-an-introvert': () => window.open( 'https://www.youtube.com/watch?v=KULbfJK0Lnw', '_blank' ),
			'Wordpress':           () => window.open( 'https://www.youtube.com/watch?v=3ytA-GrqQVY', '_blank' ),
		},

		'papyrus': {
			'papyrus.ttf':  () => document.getElementsByClassName( 'terminal' )[0].classList.add( 'papyrus' ),
			'normal.ttf':   () => document.getElementsByClassName( 'terminal' )[0].classList.remove( 'papyrus' ),
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

					// The commands.
					commands={{

						// Normal exit command.
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

									// Open links.
									config.icons.map( icon => {

										if ( icon.fileName !== arg1 ) {
											return;
										}

										window.open( icon.href, '_blank' );
									} );

									return false;
								}

								if ( ! files[currentDir][arg1] ) {

									// Nothing.
									return `No file named ${arg1} in ${currentDir}/.`;
								}

								// Normal files (that are functions that do things).
								const call = files[currentDir][arg1]();

								if ( 'string' === typeof call ) {
									return call; // Return output.
								}

								return false; // No output.
							}
						},

						// cd command.
						cd: {
							description: 'Open a folder.',
							usage: 'cd [folder]',

							fn: ( arg1 ) => {

								if ( '..' === arg1 ) {

									// Go home (yes my FS only supports 2 levels).
									return setCurrentDir( '~' );
								}

								if ( ! files[ arg1 ] ) {
									return `No folder called ${arg1}`;
								}

								// Go to 2nd level folder.
								return setCurrentDir( arg1 );
							}
						},

						// ls command.
						ls: {
								description: 'List files.',
								usage: 'ls',

								fn: () => {

									return [

										// Always show total.
										'total ' + Object.keys( files[ currentDir ] ).length,

										// Then the list of files or folders.
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

					// Other options like styles, etc.
					promptLabelStyle={{ color: '#59cfe1' }}
					inputTextStyle={{ color: '#78d18b' }}

					welcomeMessage={[
						"Welcome to aubreypwdOS, type [help] if you need help.",
					]}

					promptLabel={<strong>{`aubreypwdOS@${currentDir}/$`.replace( '~/', '~')}</strong>}
					autoFocus={true}
				/>
			</div>
	</>
}
