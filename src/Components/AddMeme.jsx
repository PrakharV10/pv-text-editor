import axios from 'axios';
import React from 'react';
import MemeIcon from '../Assets/Svg/MemeIcon';

function AddMeme({ editor }) {
	const API_KEY = process.env.REACT_APP_API_KEY;

	async function getCatImage(searchWord) {
		try {
			const {
				data: { data },
			} = await axios.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchWord}`
			);
			return data[0].images.original.webp;
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	async function searchEditorContent() {
		let editorContent = editor.getHTML();
		let regexPattern = /\{\{(.+?)_meme\}\}/;
		let newUrl = await addMemetoHTML(editorContent.match(regexPattern));

		let newContent = await editorContent.replace(regexPattern, '');

		newContent += newUrl;

		editor.commands.setContent(newContent);
	}

	async function addMemetoHTML(searchWord) {
		const url = await getCatImage(searchWord);

		if (url) {
			return `<img src=${`"${url}"`} />`;
		} else {
			alert('No Such Image Found');
			return '';
		}
	}

	return (
		<>
			<button onClick={searchEditorContent} className='flex justify-center items-center mx-2'>
				<MemeIcon />
			</button>
		</>
	);
}

export default AddMeme;
