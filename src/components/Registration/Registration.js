import React from 'react';
import './Registration.css';

class Registration extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			name:''
		}
	}

	onNameChange = (event) => {
		this.setState({name:event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email:event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password:event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://https://stark-chamber-11079.herokuapp.com/register', {
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				name: this.state.name
			})
		})
		 .then(resp=>resp.json())
		 .then(data=>{
		 	if (data==='InValidEmail')
		 	{
		 		alert("The Email Has Been Registered");
		 		
		 	} else if (data==='incorrect form submission'){

		 		alert("incorrect form submission");

		 	} else if (data==='incorrect email and password format'){

		 		alert("incorrect email and password format");

		 	} else if (data==='incorrect email format'){

		 		alert("incorrect email format");

		 	} else if (data==='incorrect password format'){

		 		alert("incorrect password format");

		 	} else {
		 		this.props.loadUser(data[0]);
		 		this.props.onRouteChange('SignIn');
		 	}
		 })
	}


	render() {
	const {onRouteChange} = this.props
	return (
		<div>
			<nav style={{display:'flex', justifyContent: 'flex-end'}}>
				<a onClick={()=>onRouteChange('LoginOff')} name='LoginOff' className='f3 link dim black underline pa3 pointer'>Back</a>
			</nav>
			<article className="center br6 ba3 dark-gray b--black-10 mv4 w5 w-200 w-100-m shadow-5 w-25-l mw10">
				<main className="pa4 black-80">
				  <div className="measure center">
				    <fieldset id="registration_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Registration</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="registration-username">Username</label>
				        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="registration-username"  id="registration-username"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="registration-email-address">Email</label>
				        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="registration-email-address"  id="registration-email-address"/>
				      </div>
				      <div className="mv3 tooltip">
				        <label className="db fw6 lh-copy f6" htmlFor="registration-password">Password</label>				        
				        <input onChange={this.onPasswordChange} className="checkformat b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="registration-password"  id="registration-password"/>
				      	<span className='tooltiptext'>Password needs between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character</span>
				      </div>		      
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitRegister} name="SignIn" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
				    </div>
				  </div>
				</main>
			</article>
		</div>
	);
  }
}

export default Registration;