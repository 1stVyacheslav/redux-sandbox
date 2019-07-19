import React from 'react';

const Counter = ( { counter, inc, dec, rnd } ) => {
	return (
		<div className='jumbotron text-center'>
			<h2 class='mb-5'>{counter}</h2>
			<button class="btn btn-primary mr-1" onClick={inc}>INC</button>
			<button class="btn btn-primary mr-1" onClick={dec}>DEC</button>
			<button class="btn btn-primary" onClick={rnd}>RND</button>
		</div>

	)
}

export default Counter;