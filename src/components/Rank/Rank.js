import React from 'react';

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
export default Rank;