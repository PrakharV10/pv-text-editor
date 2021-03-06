import React, { useState } from 'react';
import { LinkIcon, UnlinkIcon } from '../../Assets';
import Modal from '../Modal';

// This Component Defines the button which adds Hyperlink
function AddHyperLink({ editor }) {
	const [openModal, setOpenModal] = useState(false);

	function hyperlinkHandler(url) {
		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	}

	return (
		<>
			<button
				onClick={() => {
					setOpenModal(true);
				}}
				className='mx-3'
			>
				<span>
					<LinkIcon />
				</span>
			</button>
			{editor !== null && editor.isActive('link') && (
				<button
					onClick={() => {
						editor.chain().focus().unsetLink().run();
					}}
					className='mx-3'
				>
					<UnlinkIcon />
				</button>
			)}
			{openModal && (
				<Modal
					modalType='Link'
					setOpenModal={setOpenModal}
					modalOutput={hyperlinkHandler}
				/>
			)}
		</>
	);
}

export default AddHyperLink;
