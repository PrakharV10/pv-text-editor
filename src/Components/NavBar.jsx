import React from 'react';

function NavBar() {
	return (
		<div className='w-full px-4 md:px-0 md:w-10/12 h-16 m-auto flex justify-between items-center border-b-2 border-gray-100'>
			<span className='font-semibold text-lg'>PV</span>
			<button className='px-2 py-1 border-1 border-pink-500 rounded-lg text-pink-600'>
				Settings
			</button>
		</div>
	);
}

export default NavBar;
