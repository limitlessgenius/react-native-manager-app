
import {
	CREATE_EMPLOYEE, 
	STORE_EMPLOYEE
} from './types'

//modular action creator pattern to be utilized run on various different props of same obj
export const createEmployee = ({ key, value }) => {
	return {
		type: CREATE_EMPLOYEE, 
		payload: { key, value }
	}
}

export const storeEmployee = ({ name, phone, shift }) => {
	console.log('STORE EMPLOYEE', name, phone, shift)
}


