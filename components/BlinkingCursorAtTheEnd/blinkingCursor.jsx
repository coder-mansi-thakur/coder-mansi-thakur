const BlinkingCursor = ({ isBlinlking, children }) => {

  return (
    <>
      {children}
      {isBlinlking ?
        <div className="blinking-cursor prevent-select">|</div>
        : null
      }
    </>
  )

}

export default BlinkingCursor