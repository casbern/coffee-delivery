import { ReactNode, createContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { OrderInfo } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'

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
  order: OrderInfo | undefined
  decreaseItemQuantity: (id: number) => void
  increaseItemQuantity: (id: number) => void
  addItem: (item: CartItemProps) => void
  removeItem: (id: number) => void
  checkout: (data: OrderInfo) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])
  const [order, setOrder] = useState<OrderInfo | undefined>(undefined)

  useEffect(() => {
    const cartState = { cartItems, order }
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state', stateJSON)
  }, [cartItems, order])

  const navigate = useNavigate()

  function decreaseItemQuantity(id: number) {
    const cartItemsUpdated = cartItems.map((item) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity -= 1
        item.value = item.price * item.quantity
      } else {
        toast.error('Café não encontrado e/ou igual a zero no carrinho')
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
        toast.error('Café não encontrado e/ou igual a zero no carrinho')
      }
      return item
    })

    setCartItems(cartItemsUpdated)
  }

  function removeItem(id: number) {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    toast.success('Café removido')
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

    toast.success('Café adicionado ao carrinho')
  }

  function checkout(data: OrderInfo) {
    console.log(data)

    setOrder(data)
    setCartItems([])
    navigate('/success')
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        order,
        decreaseItemQuantity,
        increaseItemQuantity,
        removeItem,
        addItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
