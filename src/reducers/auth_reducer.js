

export default (state = null, action) => {
	switch(action.type) {
		case 'EMAIL_CHANGE': 
			return action.payload
		default: 
			return state
	}
}

