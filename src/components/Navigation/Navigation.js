import React from 'react';
import { connect } from 'react-redux';
import { setRouteChange, setUnloadUser } from '../../actions';

const mapStateToProps = (state) => { //send object to the props
  return {
    route: state.routeChange.route,
  }
}

const mapDispatchToProps = (dispatch) => { //send object to the props
  return {

   onRouteChange: (route)=>dispatch(setRouteChange(route)),
   onUnloadUser: ()=>dispatch(setUnloadUser())

  }
}

const Navigation = ({onRouteChange, onUnloadUser}) => {
	return (
		<nav style={{display:'flex', justifyContent: 'flex-end'}}>
			<a onClick={()=> { onRouteChange('LoginOff');  onUnloadUser()} } name='LoginOff' className='f3 link dim black underline pa3 pointer'>Sign Out</a>
		</nav>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);