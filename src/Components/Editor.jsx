import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextEditOptions from './TextEditOptions';
import Underline from '@tiptap/extension-underline';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

function Editor() {
	const editor = useEditor({
		extensions: [StarterKit, Underline, Bold, Italic, Strike, Link, Placeholder],
	});

	return (
		<>
			<TextEditOptions editor={editor} />
			<EditorContent editor={editor} />
		</>
	);
}

export default Editor;
