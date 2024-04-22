import { CardContainer, Info, ProductItem, Tag } from './styles'
import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../Counter'
import { ProductProps } from '../../pages/Home'
import { numberFormatter } from '../../utils/formatter'
import { useContext, useState } from 'react'
import { CartContext, CartItemProps } from '../../contexts/CartContext'

export function Card({
  id,
  image,
  tags,
  name,
  description,
  price,
}: ProductProps) {
  const { addItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleDecreaseQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleAddItem() {
    const cartItem: CartItemProps = {
      id,
      image,
      name,
      price,
      value: price * quantity,
      quantity,
    }

    addItem(cartItem)
  }

  return (
    <CardContainer>
      <img src={image} alt="" />

      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}

      <Info>
        <h3>{name}</h3>
        <p>{description}</p>
      </Info>

      <ProductItem>
        <span>
          R$ <strong>{numberFormatter.format(price)}</strong>
        </span>

        <div className="actions">
          <Counter
            quantity={quantity}
            decreaseQuantity={handleDecreaseQuantity}
            increaseQuantity={handleIncreaseQuantity}
          />
          <button onClick={handleAddItem} disabled={quantity === 0}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ProductItem>
    </CardContainer>
  )
}
