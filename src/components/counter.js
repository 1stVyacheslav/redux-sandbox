import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

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

function mapStateToProps(state) {
	return {
		counter: state
	}
}

function mapDispatchToProps(dispatch) {

	const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

	return {
		inc,
		dec,
		rnd: () => {
			const value = Math.floor( Math.random()*10 + 1 )
			return rnd(value)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);