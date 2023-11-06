import { useState } from "react"

function getInitialValue() {
  console.log("obtendo o valor inicial")
  return 1 + 1
}

export default function useCounter() {
  const [count, setCount] = useState(() => getInitialValue()) // "() => " faz com que a funcção getInitialValue seja executada apenas uma vez
  
  const increment = () => {
    setCount((currentState) => currentState + 1)
    setCount((currentState) => currentState + 1)
  }

  return { count, increment}
}