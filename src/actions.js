const inc = () => ( {type: 'INC'} ),
			dec = () => ( {type: 'DEC'} ),
			rnd = (value) => ( {type: 'RND', value} );

export { inc, dec, rnd };