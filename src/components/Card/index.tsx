import { CardContainer, Info, ProductItem, Tag } from './styles'
import { ShoppingCart } from 'phosphor-react'

import american from '../../assets/american.png'
import { Counter } from '../Counter'

export function Card() {
  return (
    <CardContainer>
      <img src={american} alt="" />

      <Tag>tradicional</Tag>

      <Info>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Info>

      <ProductItem>
        <span>
          R$ <strong>9,90</strong>
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
