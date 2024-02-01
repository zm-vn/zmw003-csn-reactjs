import { Button, Stack } from "@mui/material"
import JoditEditor, { IJoditEditorProps } from "jodit-react"
import { useState } from "react"

export const RichTextEditor = () => {
  const [content, setContent] = useState('')
  const editorProps: IJoditEditorProps = {
    value: content,
    config: {
      extraButtons: ['Save'],
      readonly: false,
      height: 400,
      theme: 'dark',
      editHTMLDocumentMode: true,
      defaultActionOnPaste: 'insert_as_html',
    },
    onBlur: newContent => setContent(newContent),
  }
  const save = () => {
    console.log(content)
  }
  return <Stack>
    <JoditEditor {...editorProps}/>
    <Button onClick={save}>SAVE</Button>
  </Stack>
}
