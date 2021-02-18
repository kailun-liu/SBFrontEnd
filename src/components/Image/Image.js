import React from 'react';
import './Image.css'

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

export default Image;


