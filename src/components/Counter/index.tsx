import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function handleMinusClick() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  function handlePlusClick() {
    setCounter(counter + 1)
  }

  return (
    <CounterContainer>
      <Minus size={14} onClick={handleMinusClick} />
      <span>{counter}</span>
      <Plus size={14} onClick={handlePlusClick} />
    </CounterContainer>
  )
}
