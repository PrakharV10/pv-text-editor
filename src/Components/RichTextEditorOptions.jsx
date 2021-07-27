import AddHyperLink from './AddHyperLink';
import AddImageButton from './AddImageButton';
import AddMeme from './AddMeme';
import TextStyleButtons from './TextStyleButtons';

function RichTextEditorOptions({ editor, isWriting, setIsWriting }) {
	return (
		<div className='w-full h-12 bg-gray-100 px-2 py-2 my-8 font-logo text-lg rounded-sm border-1 flex justify-between items-center text-gray-700 border-gray-200'>
			<div className='flex items-center'>
				<span
					onClick={() => setIsWriting(true)}
					className={` ${
						isWriting ? 'text-blue-500 font-medium' : 'text-black'
					} mx-2 font-body text-sm cursor-pointer`}
				>
					Write
				</span>
				<span
					onClick={() => setIsWriting(false)}
					className={` ${
						!isWriting ? 'text-blue-500 font-medium' : 'text-black'
					} mx-2 font-body text-sm cursor-pointer`}
				>
					Guide
				</span>
			</div>
			<div className='flex items-center'>
				{isWriting && (
					<>
						<TextStyleButtons editor={editor} />
						<AddHyperLink editor={editor} />
						<AddImageButton editor={editor} />
						<AddMeme editor={editor} />
					</>
				)}
			</div>
		</div>
	);
}

export default RichTextEditorOptions;
