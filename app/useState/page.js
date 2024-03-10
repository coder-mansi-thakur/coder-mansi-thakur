'use client'

class React {
  constructor() {
    this.index = -1
    this.statesInTree = []
    this.allUseEffectObserving = {}
  }
  useEffect(func, observbles) {
    observbles.forEach((obs) => {

    })
  }
  useState(initial) {
    const placedAt = this.index++
    this.statesInTree[placedAt] = [initial]
    const dispatch = (newVal) => {
      this.statesInTree[placedAt] = newVal
    }
    return [this.statesInTree[placedAt], dispatch]
  }

  createElement(type, props, ...children) {
    return 
    // (document.createTextNode(type))
  }
}

const react = new React()


function Page() {
  const [count, setCount] = react.useState(0)

  react.useEffect(() => {
    console.log("Page effect")
  }, [])

  return (
      react.createElement('h1', {}, count)
  )
}

export default Page