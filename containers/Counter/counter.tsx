import React from "react"

function Counter(props) {
  console.log("🚀 ~ Counter ~ props:", props)
  const counter = 0
  return (
    <div>
      {counter}
      <button>Decrement</button>
      <button>Increment</button>
    </div>
  )
}

export default Counter


