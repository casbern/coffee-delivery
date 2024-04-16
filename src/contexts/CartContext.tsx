import { ReactNode, createContext, useState } from 'react'

export interface CartItemProps {
  id?: number
  image: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItemProps[]
  setCartItems: (
    callback: (prevItems: CartItemProps[]) => CartItemProps[],
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
