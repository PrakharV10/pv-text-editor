import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import RichTextEditorOptions from './RichTextEditor/RichTextEditorOptions';
import Underline from '@tiptap/extension-underline';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Typography from '@tiptap/extension-typography';
import Highlight from '@tiptap/extension-highlight';
import Text from '@tiptap/extension-text';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import Guide from './Guide';

const extensions = [
	StarterKit,
	Underline,
	Bold,
	Italic,
	Strike,
	Link,
	Placeholder,
	Typography,
	Highlight,
	Text,
	Image,
	Dropcursor,
];

// This creates the Writing (Editor Component).
function Editor() {
	const editor = useEditor({
		extensions,
	});

	// State to switch between Guide and preview
	const [isWriting, setIsWriting] = useState(true);

	return (
		<>
			<RichTextEditorOptions
				editor={editor}
				isWriting={isWriting}
				setIsWriting={setIsWriting}
			/>
			{isWriting && <EditorContent editor={editor} />}
			{!isWriting && <Guide />}
		</>
	);
}

export default Editor;
