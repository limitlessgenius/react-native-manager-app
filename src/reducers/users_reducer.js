





export default (state = null, action) => {
	switch(action.type){

		case('FETCH_USERS_SUCCESS'): 
			console.log(action)
			return state
		default: 
			return state
	}
}

