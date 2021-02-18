import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Image from '../components/Image/Image';
import SignIn from '../components/SignIn/SignIn';
import Registration from '../components/Registration/Registration';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//  apiKey: '8bdb3c7879654567b5bb3f5b92b4ea06'
// });  //the apiKey would show up in the front-end, so we call API in backend.

const particlesOptions = 
{
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

const initialState = {
      input:'',
      url:'',
      box:{},
      route:'LoginOff',
      user:   {
        id:'',
        name:'',
        email:'',
        entries: 0,
        joined: ''
      }
    }


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

loadUser = (data) => {
  this.setState({user:{
        id: data.id,
        name:data.name,
        email:data.email,
        entries: data.entries,
        joined: data.joined
  }})
}

// componentDidMount() {
//   if(document.querySelector('#image')) {
//     this.setState({imgCache:false}, document.querySelector('#image').remove());
//   } 
//   console.log('done')
// }

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

 displaFaceBox=(box)=>{
    this.setState({box:box});
 }

  onInputChange = (event) => {
    this.setState({input:event.target.value}, ()=>{
      this.setState({box:{}});
    })
  }


  onButtonSubmit = () => {
    this.setState({url:this.state.input},  ()=> { fetch('https://stark-chamber-11079.herokuapp.com/clarifai', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
               url:this.state.input
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
                  id:this.state.user.id
                })
              })
              .then(resp=> resp.json())
              .then(count=>{
               Object.assign(this.state.user, {entries:count})
               this.displaFaceBox(box)
             }).catch(err=> console.log(err))
           }
          })
          .catch((err) => {
            alert("Please, Type In Valid URL LINK", err)
          })});
    }//setState(updater, callback)  

//https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Baby_Face.JPG/1200px-Baby_Face.JPG
  onRouteChange = (route) => {
    this.setState({route:route});
    if (route==='LoginOff')
    {
      this.setState(initialState);
    }
  }

  render() {
    return this.state.route === 'LoginOff'? 
    (
      <div>
        <Particles className ='particles' params={particlesOptions}/>
        <SignIn removeImg={this.removeImg} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      </div>
    )
    :
    (this.state.route === 'Registration'?
    (
       <div>
        <Particles className ='particles' params={particlesOptions}/>
        <Registration loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
       </div>
    )
    :
    (
      <div>
        <Particles className ='particles' params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} />
        <Logo / >
        <Rank user={this.state.user}/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Image input={this.state.input} box={this.state.box}/>
      </div>
    ))
  }
}

export default App;

// https://upload.wikimedia.org/wikipedia/commons/e/e1/Baby_Face.JPG