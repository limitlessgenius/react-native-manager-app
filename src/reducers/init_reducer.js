

export default (state = null, action) => {

	switch(action.type) {
		case 'START_APP': 
			return action.payload
		default: 
			return state
	}

	return []
}


