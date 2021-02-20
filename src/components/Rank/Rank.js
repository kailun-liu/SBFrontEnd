import React from 'react';
import { connect } from 'react-redux';
import { setLoadUser } from '../../actions';

const mapStateToProps = (state) => { //send object to the props
  return {
    user: {
        id:state.loadUser.id,
        name:state.loadUser.name,
        email:state.loadUser.email,
        entries: state.loadUser.entries,
        joined: state.loadUser.joined
  		}
	}
}

const mapDispatchToProps = (dispatch) => { //send object to the props
  return {

   onLoadUser: (data) => dispatch(setLoadUser(data))

  }
}

const  Rank = ({user}) => {
	return (
		<div>
			<div className='black f2 App'>
			{`${user.name}, your current entry count is...`}
			</div>
			<div className='black f2 App'>
			{`#${user.entries}`}
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank);