import BlinkingCursorAtTheEnd from "@/components/BlinkingCursorAtTheEnd"

function TextEditor({
  id,
  isActive,
  content,
  handleDoubleClick,
  handleMouseUp,
  handleMouseDown,
  paraSelected
}) {

  return (
    <div
      className="w-screen"
      onClick={() => paraSelected(id)}
    >
      <BlinkingCursorAtTheEnd isBlinlking={isActive}>
        <span>
          {
            content
              ?
              <span
                // onDoubleClick={handleDoubleClick}
                // onMouseUp={handleMouseUp}
                // onMouseDown={handleMouseDown}
              >
                {content}
              </span>
              :
              <span className="text-slate-500 prevent-select">Add content here......</span>
          }
        </span>
      </BlinkingCursorAtTheEnd>
    </div>
  )
}

export default TextEditor