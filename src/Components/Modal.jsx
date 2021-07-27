import React, { useState } from 'react';
import CloseIcon from '../Assets/Svg/CloseIcon';

// Modal for adding Image and Hyper links.
function Modal({ modalType, setOpenModal, modalOutput }) {
	const [url, setUrl] = useState('');

	function submitHandler() {
		if (url.trim().length === 0) return;

		modalOutput(url);
		setOpenModal(false);
	}

	return (
		<div className='w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center fixed top-0 left-0 z-10 font-body'>
			<div className='w-96 h-40 bg-white rounded-sm shadow-sm px-3'>
				<div className='flex justify-between items-center p-3 mb-3 -mx-3 border-gray-200 border-b-1'>
					<span className='font-body font-medium text-sm'>Add {modalType}</span>
					<button onClick={() => setOpenModal(false)}>
						<CloseIcon />
					</button>
				</div>
				<div>
					<input
						className='outline-none border-1 border-gray-400 p-2 rounded-sm w-full text-sm'
						placeholder={`Enter ${modalType} Url here..`}
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
				</div>
				<div className=' flex justify-end'>
					<button
						onClick={submitHandler}
						className='py-2 px-3 rounded text-sm bg-pink-500 text-white mt-4'
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
