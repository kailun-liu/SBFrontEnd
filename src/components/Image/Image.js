import React from 'react';
import './Image.css'
import { connect } from 'react-redux';
import { setInputField, setDisplayFaceBox } from '../../actions';

const mapStateToProps = (state) => { //send object to the props
  return {

    input: state.inputChange.input,
    box: state.inputChange.box,

  }
}


const mapDispatchToProps = (dispatch) => { //send object to the props
  return {

   onInputChange: (event) => dispatch(setInputField(event.target.value)),
   onDisplaFaceBox: (box) => dispatch(setDisplayFaceBox(box)),

  }
}


const Image = ({input, box}) => {
	return (
		<div className='newcenter ma'>
			<div className='absolute mt2'>
				<img id='image' alt='' src={input} width='600px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);


