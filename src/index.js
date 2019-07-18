import { createStore } from 'redux';

const reducer = (state = 0, action) => {

	switch (action.type) {
		case 'INC':
			return ++state;
			
		default:
			return state
	}

}

const store = createStore(reducer); // по сути обертка вокруг функции reducer
store.subscribe( () => {
	// вывести текущее состояние state
	console.log( store.getState() )
} )


// передаем Action
store.dispatch( {type: 'INC'} )
store.dispatch( {type: 'INC'} )
store.dispatch( {type: 'INC'} )
