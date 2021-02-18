import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3 App'>
			 {'This Magic Brain will detect faces in your pictures. give it a try'}
			</p>
			<div>
				<div className='pa4 br3 shadow-5 form center'>
					<input onChange = {onInputChange} className='f4 pa2 w-70 ' type='text' />
					<button onClick = {onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue pointer'>Detect</button>
				</div> 
			</div> 
		</div>
	);
}

export default ImageLinkForm;