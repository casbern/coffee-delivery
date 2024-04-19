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
  removeItem: (id: number) => void
  addItem: (item: CartItemProps) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

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
    const cartItemsUpdated = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1
        item.value = item.price * item.quantity
      } else {
        console.log(`Item with id ${id} not found`)
      }
      return item
    })

    setCartItems(cartItemsUpdated)
  }

  function removeItem(id: number) {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
  }

  function addItem(item: CartItemProps) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem,
      )
      setCartItems(updatedCartItems)
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        decreaseItemQuantity,
        increaseItemQuantity,
        removeItem,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
