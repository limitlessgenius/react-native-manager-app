





export default (state = null, action) => {
	switch(action.type){

		case('FETCH_USERS_SUCCESS'): 
			console.log('USERS LIST', action.payload)
			return state
		default: 
			return state
	}
}

