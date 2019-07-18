import { createStore } from 'redux';

const reducer = (state = 0, action) => {

	switch (action.type) {
		case 'INC':
			return state + 1;

		case 'DEC':
			return state - 1;
			
		default:
			return state
	}

}

const store = createStore(reducer); // по сути обертка вокруг функции reducer
// store.subscribe( () => {
// 	// вывести текущее состояние state
// 	console.log( store.getState() )
// } )


// // передаем Action
// store.dispatch( {type: 'INC'} )
// store.dispatch( {type: 'INC'} )
// store.dispatch( {type: 'INC'} )

document
	.getElementById('inc')
	.addEventListener('click', () => {
		store.dispatch( {type: 'INC'} )
	})

document
	.getElementById('dec')
	.addEventListener('click', () => {
		store.dispatch( {type: 'DEC'} )
	})

function updateCounter() {
	document
		.getElementById('counter')
		.textContent = store.getState()
}

store.subscribe( () => updateCounter() )
