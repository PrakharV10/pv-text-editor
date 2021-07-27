import React from 'react';
import AddHyperLink from './AddHyperLink';
import AddImageButton from './AddImageButton';
import AddMeme from './AddMeme';
import TextStyleButtons from './TextStyleButtons';

function RichTextEditorOptions({ editor }) {
	return (
		<div className='w-full bg-gray-100 px-2 py-2 my-8 font-logo text-lg rounded-sm border-1 flex justify-between items-center text-gray-700 border-gray-200'>
			<div className='flex items-center'>
				<TextStyleButtons editor={editor} />
				<AddHyperLink editor={editor} />
			</div>
			<div className='flex items-center'>
				<AddImageButton editor={editor} />
				<AddMeme />
			</div>
		</div>
	);
}

export default RichTextEditorOptions;
