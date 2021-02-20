import { LOADUSER_FIELD,
REQUEST_PEDNING,
REQUEST_SUCCESS,
REQUEST_FAILED,
DISPLAYBOX_FIELD,
INPUT_CHANGE_FIELD,
BUTTON_SUBMIT_FIELD,
ROUTE_CHANGE_FIELD,
EMAIL_CHANGE_FIELD,
PASSOWRD_CHANGE_FIELD,
NAME_CHANGE_FIELD,
ENTRIESCOUNT_FIELD,
UNLOADUSER_FIELD
 } from './constants';


export const setInputField = (text) => {
	return {
		type: INPUT_CHANGE_FIELD,
		payload: text
	}
}


export const setEmailChange = (text) => {

	return {

		type: EMAIL_CHANGE_FIELD,
		payload: text

	}
}


export const setPasswordChange = (text) => {

	return {

		type: PASSOWRD_CHANGE_FIELD,
		payload: text

	}
}

export const setNameChange = (text) => {

	return {

		type: NAME_CHANGE_FIELD,
		payload: text

	}
}

export const setLoadUser = (data) => (dispatch) => {

	dispatch( {

		type: LOADUSER_FIELD,
		payload:  {user : {
        id: data.id,
        name:data.name,
        email:data.email,
        entries: data.entries,
        joined: data.joined

  	 		}
  	 	}
 	})
}

export const setUnloadUser = () => {

	return {

		type: UNLOADUSER_FIELD,
		payload:  { 
		signInEmail: '',
		signInPassword: '',
		user : {
        id: '',
        name: '',
        email:'',
        entries: 0,
        joined: ''

  	 		}
  	 	}
	}
}


export const setRouteChange = (route) => {

		return {

			type: ROUTE_CHANGE_FIELD,
			payload: route

		}

  }


 export const setDisplayFaceBox=(box)=>{

 	return {

		type: DISPLAYBOX_FIELD,
		payload: box
 	}
    
 }



 export const setEntriesCount=(num)=>{

 	return {

		type: ENTRIESCOUNT_FIELD,
		payload: num
 	}
    
 }

// export const setRequestRobots = () => (dispatch)=>{
// 	console.log('setRequestRobots');
// 	dispatch({type: REQUEST_ROBOTS_PEDNING})
// 	fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json() )
//       .then(users=> dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
//       .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
// } // redux-thunk middleware would catch that function and give it dispatch
// // otherwise, redux couldn't catch it.


// export const setStyleChange = (text) => {
// 	return {
// 	type: CHANGE_STYLE, //constant, in Javascript convention, is captalized. 
// 	payload: text  //payload is we're sending whatever data is needed to the reducer
// }}