import React, { useState } from 'react';
import ImageIcon from '../Assets/Svg/ImageIcon';
import Modal from './Modal';

function AddImageButton({ editor }) {
	const [openModal, setOpenModal] = useState(false);

	function imageUploadHandler(url) {
		console.log(url);
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
