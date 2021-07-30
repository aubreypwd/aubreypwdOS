import Terminal from 'react-console-emulator';
import { useState } from 'react';
import config from '../config.js';

export default function Index() {

	function getIcons() {
		return config.icons.map( icon => icon.fileName );
	}

	const [ currentDir, setCurrentDir ] = useState( '/' );

	const [ files, setFiles ] = useState( {

		'/': [
			'links',
		],

		'links': [
			'..',
			...getIcons(),
		],

	} );

	console.log( files.links );

	return <div className="terminal">
		<Terminal

			commands={{

				open: {
					description: 'Open a file.',
					usage: 'open [file]',

					fn: ( arg1 ) => {
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

						files[currentDir][arg1]();

						return false;
					}
				},

				cd: {
					description: 'Open a folder.',
					usage: 'cd [folder]',

					fn: ( arg1 ) => {

						if ( '..' === arg1 ) {
							setCurrentDir( '/' );
							return false;
						}

						if ( ! files[ arg1 ] ) {
							return `No folder called ${arg1}`;
						}

						return setCurrentDir( arg1 );
					}
				},

				ls: {
						description: 'List files.',
						usage: 'ls',

						fn: () => {

							return [
								'total ' + Object.keys( files[ currentDir ] ).length,

								...Object.entries( files[ currentDir ] ).map( ( i, v ) => {

									if ( '/' !== currentDir ) {
										return `${i[1]}`;
									}

									return `${i[1]}/`;
								} ),

							].join( '\n' );
						}
					}
			}}

			welcomeMessage="Welcome to aubreypwdOS!"
			promptLabel={`aubreypwdOS@${currentDir}/`.replace( '//', '/')}
			autoFocus={true}
		/>
	</div>
}
