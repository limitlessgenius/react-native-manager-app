


import EXPERIENCES_SUCCESS from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case (EXPERIENCES_SUCCESS): 
			console.log('ACTION', action)
			return state
		default: 
			return state
	}
}





