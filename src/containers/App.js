import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Image from '../components/Image/Image';
import SignIn from '../components/SignIn/SignIn';
import Loading from '../components/Loading/Loading';
import Registration from '../components/Registration/Registration';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import { setInputField, setDisplayFaceBox, setEntriesCount } from '../actions' 
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//  apiKey: '8bdb3c7879654567b5bb3f5b92b4ea06'
// });  //the apiKey would show up in the front-end, so we call API in backend.


const mapStateToProps = (state) => { //send object to the props
  return {
    input: state.inputChange.input,
    url: state.inputChange.input,
    box: state.inputChange.box,
    route: state.routeChange.route,
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

   onInputChange: (event) => dispatch(setInputField(event.target.value)),
   onDisplaFaceBox: (box) => dispatch(setDisplayFaceBox(box)),
   onEntriesCount: (count) => dispatch(setEntriesCount(count))

  }
}


const particlesOptions = {
    particles: {
    	number: {
    		value:150,
    		density: {
    			enable:true,
    			value_area:800
    		}
    	},
      color : '#f5f5f5',
      size: {
        value: 7
      },
      shape: {
            type: 'polygon',
            image: [
                {src: 'path/to/first/image.svg', height: 100, width: 100},
                {src: 'path/to/second/image.jpg', height: 100, width: 100},
            ]
        }
    }, 
    interactivity: {
      onhover: {
        enable:true,
        mode: 'repulse'
      }
    },
    retina_detect: true
} //https://vincentgarreau.com/particles.js/


class App extends Component {


calculateFaceLocation=(data)=>{
   
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('image')
   const width = Number(image.width);
   const height = Number(image.height);
   return {
    leftCol: clarifaiFace.left_col*width,
    topRow: clarifaiFace.top_row*height,
    rightCol:width-(clarifaiFace.right_col*width),
    bottomRow: height-(clarifaiFace.bottom_row*height)
   }
 } 


 onButtonSubmit = () => {
    this.setState({url:this.props.input},  ()=> { fetch('https://stark-chamber-11079.herokuapp.com/clarifai', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
               url:this.props.input
             })
          })   //the apiKey would show up in the front-end, so we call API in backend.
          .then(resp => resp.json())
          .then(data => this.calculateFaceLocation(data))
          .then(box => { 
            if(box) {
              fetch('https://stark-chamber-11079.herokuapp.com/image', {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  id:this.props.user.id
                })
              })
              .then(resp=> resp.json())
              .then(count=>{
               this.props.onEntriesCount(count);
               this.props.onDisplaFaceBox(box)
             }).catch(err=> console.log(err))
           }
          })
          .catch((err) => {
            alert("Please, Type In Valid URL LINK", err)
          })});
    }//setState(updater, callback)  




  render() {
    return this.props.route === 'LoginOff'? 
    (
      <div>
        <Particles className ='particles' params={particlesOptions}/> 
        <SignIn /> 
      </div>
    )
    :
    (this.props.route === 'Loading'?
      (
        <div>
          <Particles className ='particles' params={particlesOptions}/> 
          <Loading />  
        </div>
      ) 
    :
    (this.props.route === 'Registration'?
      (
         <div>
          <Particles className ='particles' params={particlesOptions}/>
          <Registration />
         </div>
      )
    :
      (
        <div>
          <Particles className ='particles' params={particlesOptions}/>
          <Navigation />
          <Logo / >
          <Rank user={this.props.user}/>
          <ImageLinkForm onInputChange={this.props.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <Image />
        </div>
      )
    )
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//subcribe any state changes in the Redux Store
//mapStateToProps, what state App should listen to
//mapDispatchToProps, what action App should listen to


// https://upload.wikimedia.org/wikipedia/commons/e/e1/Baby_Face.JPG