import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display:'flex', justifyContent: 'flex-end'}}>
			<a onClick={()=>onRouteChange('LoginOff')} name='LoginOff' className='f3 link dim black underline pa3 pointer'>Sign Out</a>
		</nav>
	);
}

export default Navigation;