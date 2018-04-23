


import EXPERIENCES_FETCH_SUCCESS from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case (EXPERIENCES_FETCH_SUCCESS): 
			console.log('FIREBASE FETCH', action)
			return state
		default: 
			return state
	}
}





