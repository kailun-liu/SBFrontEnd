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



const initialStateInput = {

	input:'',
	box: {}

}

export const inputChange = (state=initialStateInput, action={}) => {
	switch (action.type) {
		case INPUT_CHANGE_FIELD:
			return Object.assign({}, state, {input : action.payload, box: {} });
		case DISPLAYBOX_FIELD:
			return Object.assign({}, state, {box : action.payload});
		case UNLOADUSER_FIELD:
			return Object.assign({}, state, {input : '', box: {}} );
		default:
			return state;
	}
}



const initialStateEmailChange = {

	signInEmail:''

}

export const emailChange = (state=initialStateEmailChange, action={}) => {
	switch (action.type) {
		case EMAIL_CHANGE_FIELD:
			return Object.assign({}, state, {signInEmail : action.payload} );
		case UNLOADUSER_FIELD:
			return Object.assign({}, state, {signInEmail : action.payload.signInEmail} );
		default:
			return state;
	}
}

const initialStatePasswordChange = {

	signInPassword:''

}


export const passwordChange = (state=initialStatePasswordChange, action={}) => {
	switch (action.type) {
		case PASSOWRD_CHANGE_FIELD:
			return Object.assign({}, state, {signInPassword : action.payload} );
		case UNLOADUSER_FIELD:
			return Object.assign({}, state, {signInPassword : action.payload.signInPassword} );
		default:
			return state;
	}
}

const initialStateNameChange = {

	signInName:''

}


export const nameChange = (state=initialStateNameChange, action={}) => {
	switch (action.type) {
		case NAME_CHANGE_FIELD:
			return Object.assign({}, state, {signInName : action.payload} );
		default:
			return state;
	}
}

const initialStateLoadUser = {

        id: '',
        name:'',
        email:'',
        entries: 0,
        joined: ''

}

export const loadUser = (state=initialStateLoadUser, action={}) => {
	switch (action.type) {
		case LOADUSER_FIELD:
			return Object.assign({}, state, {id : action.payload.user.id, name : action.payload.user.name, email : action.payload.user.email, entries : action.payload.user.entries, joined : action.payload.user.joined});
		case ENTRIESCOUNT_FIELD:
			return Object.assign({}, state, { entries : action.payload});
		case UNLOADUSER_FIELD:
			return Object.assign({}, state, { id : action.payload.user.id, name : action.payload.user.name, email : action.payload.user.email, entries : action.payload.user.entries, joined : action.payload.user.joined});
		default:
			return state;
	}
}


const initialStateRouteChange = {

	route:'LoginOff'

}


export const routeChange = (state=initialStateRouteChange, action={}) => {
	switch (action.type) {
		case ROUTE_CHANGE_FIELD:
			return Object.assign({}, state, {route : action.payload});
		default:
			return state;
	}
}






// const initialStateSearch = {  
//       searchField:'',
// } // Read-Only

// export const searchRobots = (state=initialStateSearch, action={}) => {
// 	console.log('searchRobots');
// 	switch (action.type) {
// 		case CHANGE_SEARCH_FIELD:
// 			return Object.assign({}, state, {searchField : action.payload} );  //{...state, {searchField : action.payload}} Object Destructuring
// 		default:
// 			return state;
// 	}	
// }

// const initialStateRobots = {  
//       isPending:false,
//       robots: [],
//       error:''
// } // Read-Only

// export const requestRobots = (state=initialStateRobots, action={}) => {
// 	console.log('requestRobots');
// 	switch (action.type) {
// 		case REQUEST_ROBOTS_PEDNING:
// 			return Object.assign({}, state, {isPending : true} );  //{...state, {searchField : action.payload}} Object Destructuring
// 		case REQUEST_ROBOTS_SUCCESS:
// 			return Object.assign({}, state, {robots : action.payload, isPending : false} );
// 		case REQUEST_ROBOTS_FAILED:
// 			return Object.assign({}, state, {error : action.payload, isPending : false} );
// 		default:
// 			return state;
// 	}	
// }

// const initialStateStyle = {  
//       style :'set1',
// } // Read-Only


// export const styleChange = (state=initialStateStyle, action={}) => {
// 	switch (action.type) {
// 		case CHANGE_STYLE:
// 			return Object.assign({}, state, {style : action.payload});  //{...state, {searchField : action.payload}} Object Destructuring
// 		default:
// 			return state;
// 	}	
// }