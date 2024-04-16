import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  setQuantity: (value: number) => void
}

export function Counter({ quantity, setQuantity }: CounterProps) {
  function handleMinusClick() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function handlePlusClick() {
    setQuantity(quantity + 1)
  }

  return (
    <CounterContainer>
      <Minus size={14} onClick={handleMinusClick} />
      <span>{quantity}</span>
      <Plus size={14} onClick={handlePlusClick} />
    </CounterContainer>
  )
}
