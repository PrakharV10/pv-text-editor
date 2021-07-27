import React, { useState } from 'react';
import { ImageIcon } from '../../Assets';
import Modal from '../Modal';

// This Component Defines the button which adds Images
function AddImageButton({ editor }) {
	const [openModal, setOpenModal] = useState(false);

	// Function to handle Image upload
	function imageUploadHandler(url) {
		editor.chain().focus().setImage({ src: url }).run();
	}

	return (
		<>
			<button
				onClick={() => setOpenModal(true)}
				className='flex justify-center items-center mx-2'
			>
				<ImageIcon />
			</button>
			{openModal && (
				<Modal
					modalType={'Image'}
					setOpenModal={setOpenModal}
					modalOutput={imageUploadHandler}
				/>
			)}
		</>
	);
}

export default AddImageButton;
