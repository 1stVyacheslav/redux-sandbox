const inc = () => ( {type: 'INC'} ),
			dec = () => ( {type: 'DEC'} ),
			rnd = (value) => {
				return {
					type: 'RND',
					value: Math.floor( Math.random()*10 + 1)
				}
			};

export { inc, dec, rnd };