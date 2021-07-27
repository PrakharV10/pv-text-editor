import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import RichTextEditorOptions from './RichTextEditorOptions';
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

function Editor() {
	const editor = useEditor({
		extensions: [
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
		],
	});

	return (
		<>
			<RichTextEditorOptions editor={editor} />
			<EditorContent editor={editor} />
		</>
	);
}

export default Editor;
