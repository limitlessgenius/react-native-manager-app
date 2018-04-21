

import { CREATE_EMPLOYEE } from '../actions/types'

const INITIAL_STATE = {
	name: '', 
	phone: '', 
	shift: ''
}

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case CREATE_EMPLOYEE: 
			return { ...state, [action.payload.key]: action.payload.value }
		default: 
			return state	
	}
}





