import React from 'react';
import './SignIn.css'
import { connect } from 'react-redux';
import { setEmailChange, setPasswordChange, setSubmitSignIn, setLoadUser, setRouteChange } from '../../actions';

const mapStateToProps = (state) => { //send object to the props
  return {
    route: state.routeChange.route,
	signInEmail:state.emailChange.signInEmail,
	signInPassword:state.passwordChange.signInPassword,
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

   onEmailChange: (event) => dispatch(setEmailChange(event.target.value)),
   onPasswordChange: (event) => dispatch(setPasswordChange(event.target.value)),
   onLoadUser: (data) => dispatch(setLoadUser(data)),
   onRouteChange: (route)=>dispatch(setRouteChange(route))

  }
}


class SignIn extends React.Component {


	onSubmitSignIn = () => {
		this.props.onRouteChange('Loading')
		fetch('https://stark-chamber-11079.herokuapp.com/signin', {
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.props.signInEmail,
				password:this.props.signInPassword
			})
		})
		 .then(resp=>resp.json())
		 .then(user=>{
		 	if(user.id)
		 	{
		 		this.props.onLoadUser(user);
			 	this.props.onRouteChange('SignIn');	
		 	}
		 	else
		 	{
			 	this.props.onRouteChange('LoginOff');
			 	alert("Wrong Password Or Email");		 		
		 	}
		 })	
	}

	render() {
	const { onRouteChange } = this.props;
	return (
		<div>
			<nav style={{display:'flex', justifyContent: 'flex-end'}}>
				<a onClick={()=>onRouteChange('Registration')} name='Registration' className='f3 link dim black underline pa3 pointer'>Registration</a>
			</nav>
			<article className="center r6 ba3 dark-gray b--black-10 mv4 w5 w-200 w-100-m shadow-5 w-25-l mw10">
				<main className="pa4 black-80">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange={this.props.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange={this.props.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				      </div>		      
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" name="SignIn" value="Sign In"/>
				    </div>
				    <div className="lh-copy mt3">
				      <a href="#0" onClick={()=>onRouteChange('Registration')} className="f6 link dim black db" name="Registration" value="Registration">Registration</a>
				    </div>
				</main>
			</article>
		</div>
	);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);