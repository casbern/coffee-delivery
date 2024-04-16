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
  const { setCartItems } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(0)

  function handleAddToCart() {
    const cartItem: CartItemProps = {
      id,
      image,
      name,
      price,
      quantity,
    }

    setCartItems((prevState) => [...prevState, cartItem])
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
          <Counter setQuantity={setQuantity} quantity={quantity} />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ProductItem>
    </CardContainer>
  )
}
