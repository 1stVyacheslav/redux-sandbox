import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions'; // импортировать все в объект actions

const store = createStore(reducer);
const { dispatch } = store;

// полученные функции эквивалентны store.dispatch( inc() ) и т.п.
// т.е. bindActionCreators() связывает action creator c функцией dispatch()
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
	.getElementById('inc')
	.addEventListener('click', () => {
		inc() // заменили store.dispatch( inc() )
	})

document
	.getElementById('dec')
	.addEventListener( 'click', () => dec() )

document
	.getElementById('rnd')
	.addEventListener('click', () => {

		const value = Math.floor(Math.random() * 10 + 1);
		
		rnd(value)
	})


function updateCounter() {
	document
		.getElementById('counter')
		.textContent = store.getState()
}

store.subscribe( () => updateCounter() )
