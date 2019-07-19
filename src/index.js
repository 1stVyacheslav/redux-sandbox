import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions'; // импортировать все в объект actions
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

// полученные функции эквивалентны store.dispatch( inc() ) и т.п.
// т.е. bindActionCreators() связывает action creator c функцией dispatch()
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


function rndFunc() {
	const value = Math.floor( Math.random()*10 +1 );
	return rnd(value);
}

function updateCounter() {
	ReactDOM.render( 
		<Counter 
			counter={ store.getState() }
			inc={inc}
			dec={dec}
			rnd={rndFunc}
		/>,
		document.getElementById('root')
	)
}

updateCounter()

store.subscribe( () => updateCounter() )


