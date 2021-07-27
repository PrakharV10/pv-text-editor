import React from 'react';

// This Component Defines the button which adds Bold, Italics, Underline and Strike in the respective order
function TextStyleButtons({ editor }) {
	return (
		<>
			<button
				onClick={() => {
					editor.chain().focus().toggleBold().run();
				}}
				className='mx-2 font-medium'
			>
				<b>B</b>
			</button>

			<button
				onClick={() => {
					editor.chain().focus().toggleItalic().run();
				}}
				className='mx-3'
			>
				<em>I</em>
			</button>

			<button
				onClick={() => {
					editor.chain().focus().toggleUnderline().run();
				}}
				className='mx-3'
			>
				<span>U</span>
			</button>

			<button
				onClick={() => {
					editor.chain().focus().toggleStrike().run();
				}}
				className='mx-3 line-through'
			>
				<span>abc</span>
			</button>
		</>
	);
}

export default TextStyleButtons;
