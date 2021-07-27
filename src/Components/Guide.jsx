import React from 'react';

function Guide() {
	return (
		<div className='text-base pb-4 border-b-1 border-gray-200 mb-6'>
			<p className='mb-10'>
				Follow through the guide, in order to start writing, using the amazing Sparrow
				Editor!!
			</p>
			<div className='mb-8'>
				<div className='text-lg font-black font-logo mb-2'>Bold, Italics, & Underline</div>
				<p>
					Sparrow Editor Supports Bold, Italic, Underlined, and Striked-Through Text. To
					use, click the respective button given in the Rich Editor options.
				</p>
			</div>

			<div className='mb-8'>
				<div className='text-lg font-black font-logo mb-2'>Links</div>
				<p>
					Sparrow Editor Supports Adding Hyperlinks to text pieces. Select the text, click
					on the hyperlink button to add a link.
					<br /> In order to remove a hyperlink, select the text, and click on the unlink
					icon.
				</p>
			</div>

			<div className='mb-8'>
				<div className='text-lg font-black font-logo mb-2'>Images</div>
				<p>
					Sparrow Editor Supports Adding Images in between texts. You can also drag the
					images to reorder. Click on the image button, and add the url of the image, you
					want to add.
				</p>
			</div>

			<div className='mb-8'>
				<div className='text-lg font-black font-logo mb-2'>Memes</div>
				<p>
					In order to auto add a meme, Type{' '}
					<code className='bg-gray-200 rounded-md p-1'>name_meme</code> in the editor, and
					click on the little chicken icon. The Meme will automatically be added in the
					editor. Drag to reorder.
					<br />
					<br />
					<strong>Note: </strong> Replace name with whichever choice you prefer.
					<br />
				</p>
			</div>
		</div>
	);
}

export default Guide;
