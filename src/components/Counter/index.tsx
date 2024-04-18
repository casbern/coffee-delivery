import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  decreaseQuantity: () => void
  increaseQuantity: () => void
  quantity: number
}

export function Counter({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <Minus size={14} onClick={decreaseQuantity} />
      <span>{quantity}</span>
      <Plus size={14} onClick={increaseQuantity} />
    </CounterContainer>
  )
}
