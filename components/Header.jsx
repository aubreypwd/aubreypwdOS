import React, { useEffect } from 'react';

import config       from '../config.json';
import Logo         from '../components/Logo.jsx';
import MainNav      from '../components/MainNav.jsx';
import MenuTriggers from '../components/MenuTriggers.jsx';

export default function Header() {
	
	useEffect( () => {
		window.$ = require( 'jquery' );
	} );

	return (
		<header className="header">
			<span className="header__inner">

				<Logo />

				<span className="header__right">
					<MainNav />
					<MenuTriggers />
				</span>

			</span>
		</header>
	)
}
