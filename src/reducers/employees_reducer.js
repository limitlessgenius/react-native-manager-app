

import { CREATE_EMPLOYEE } from '../actions/types'


const INITIAL_STATE = []

const employee = {
	name: '', 
	phone: null, 
	shift: ''
}

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case CREATE_EMPLOYEE: 
			return { ...state, ...employee }
		default: 
			return state	
	}
}



