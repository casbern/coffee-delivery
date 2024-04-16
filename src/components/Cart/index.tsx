import { ShoppingCart } from 'phosphor-react'
import { CartButton, CartContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems)

  const totalCartItems = cartItems.reduce((acc, cv) => {
    return acc + cv.quantity
  }, 0)

  return (
    <CartContainer>
      {totalCartItems >= 1 && <span>{totalCartItems}</span>}

      <CartButton>
        <ShoppingCart size={22} weight="fill" />
      </CartButton>
    </CartContainer>
  )
}
