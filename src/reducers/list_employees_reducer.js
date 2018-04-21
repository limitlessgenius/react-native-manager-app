
import { EMPLOYEES_SUCCESS } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEES_SUCCESS: 
			return { ...state, ...action.payload}
		default: 
			return state
	}
}

//If I have state {} why not { ...state, action.payload }



