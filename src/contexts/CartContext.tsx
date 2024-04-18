import { ReactNode, createContext, useState } from 'react'

export interface CartItemProps {
  id: number
  image: string
  name: string
  price: number
  value: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItemProps[]
  setCartItems: (
    callback: (prevItems: CartItemProps[]) => CartItemProps[],
  ) => void
  decreaseItemQuantity: (id: number) => void
  increaseItemQuantity: (id: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  function updateTotalItems() {}

  function decreaseItemQuantity(id: number) {
    const cartItemsUpdated = cartItems.map((item) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity -= 1
        item.value = item.price * item.quantity
      } else {
        console.log(`Item with id ${id} not found or quantity is already 0`)
      }
      return item
    })

    setCartItems(cartItemsUpdated)
  }

  function increaseItemQuantity(id: number) {
    console.log(id)
    console.log('increase')
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        decreaseItemQuantity,
        increaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
