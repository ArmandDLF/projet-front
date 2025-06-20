/* @refresh reload */
import { For, render } from 'solid-js/web'
import './index.css'
import {App, Association} from './App.jsx'

import { Route, Router } from '@solidjs/router'

const root = document.getElementById('root')

export const Pages = [
	//[Nom_affichage, chemin, composant],
	["L'association", "/", Association],
	["Autre page", "/truc", ]
];


render(() => 
<Router root={App}>
	<For each={Pages}>
		{(page_info, index) =>
			<Route path={page_info[1]} component={page_info[2]}/>
		}
	</For>
</Router>, root)
