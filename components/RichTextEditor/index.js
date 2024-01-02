import { useState, useEffect } from 'react'
import BlinkingCurosr from '../BlinkingCursorAtTheEnd'

import TextEditor from './TextEditor'

function RichTextEditor() {
  const [titleState, setTitleSelected] = useState({
    content: '',
    isSelected: true
  })
  const title = ''
  const [activeId, setActiveId] = useState('')
  console.log("🚀 ~ file: index.js:13 ~ RichTextEditor ~ activeId:", activeId)
  const [result, setResult] = useState([
    {
      id: 0,
      content: ''
    }
  ])


  useEffect(() => {
    const handleKeyPress = (event) => {
      // if (!activeId) return null
      const updatedActiveId = activeId
      const { key } = event
      const newResult = [...result]

      if (key === 'Backspace') {
        newResult[updatedActiveId] = {
          ...result[updatedActiveId],
          content: (result[updatedActiveId].content || '').slice(0, result[updatedActiveId].content.length - 1)
        }
      } else if (key === 'Enter') {
        newResult.push({
          id: result.length,
          content: ''
        })
        setActiveId(result.length)
      } else {
        if (!event.metaKey) {
          newResult[updatedActiveId] = {
            ...result[updatedActiveId],
            content: result[updatedActiveId].content + key
          }
        }
      }

      setResult(newResult)
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeId, result]);


  const paraSelected = (id) => {
    setActiveId(id)
  }

  useEffect(() => {
    const handleTextSelection = () => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        console.log('Selected Text:', selectedText, result);
        // Do something with the selected text
      }
    };
    document.addEventListener('selectionchange', handleTextSelection);

    return () => {
      document.removeEventListener('selectionchange', handleTextSelection);
    };
  }, [result, activeId]);


  const titleBox = () => {
    return (
      <BlinkingCurosr isBlinlking={titleState.isSelected}>
        <h3>
          {titleState.content}
        </h3>
      </BlinkingCurosr>
    )
  }
  return (
    <>
      {/* {titleBox()} */}
      {result.map(({ id, content }) => (
        <TextEditor
          key={id}
          id={id}
          isActive={id === activeId}
          content={content}
          paraSelected={paraSelected}
        />

      ))}
    </>
  )
}

export default RichTextEditor