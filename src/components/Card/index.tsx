import { CardContainer, Info, ProductItem, Tag } from './styles'
import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../Counter'
import { ProductProps } from '../../pages/Home'
import { numberFormatter } from '../../utils/formatter'

export function Card({ image, tags, name, description, price }: ProductProps) {
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
          <Counter />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ProductItem>
    </CardContainer>
  )
}
