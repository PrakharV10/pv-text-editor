import React from 'react';
import LinkIcon from '../Assets/Svg/LinkIcon';

function AddHyperLink({ editor }) {
	return (
		<>
			<button
				onClick={() => {
					editor
						.chain()
						.focus()
						.extendMarkRange('link')
						.setLink({ href: 'prakharvarshney.tech' })
						.run();
				}}
				className='mx-3'
			>
				<span>
					<LinkIcon />
				</span>
			</button>
		</>
	);
}

export default AddHyperLink;
