import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  MainContainer,
  OrderDetails,
  OrderDetailsHeader,
  OrderSummary,
} from './styles'

import { Counter } from '../../components/Counter'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { numberFormatter } from '../../utils/formatter'

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  return (
    <MainContainer>
      <OrderDetails>
        <h1>Complete seu pedido</h1>

        <div className="order-address">
          <OrderDetailsHeader>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </OrderDetailsHeader>

          <form>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div className="order-payment">
          <OrderDetailsHeader>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </OrderDetailsHeader>

          <div className="payment-buttons">
            <button type="submit">
              <CreditCard size={16} />
              cartão de crédito
            </button>

            <button type="submit">
              <Bank size={16} />
              cartão de débito
            </button>

            <button type="submit">
              <Money size={16} />
              dinheiro
            </button>
          </div>
        </div>
      </OrderDetails>

      <OrderSummary>
        <h1>Cafés selecionados</h1>

        <div className="summary">
          {cartItems.map((item) => (
            <div key={item.id} className="summary-order">
              <img src={item.image} alt="" />
              <div className="summary-info">
                <p>{item.name}</p>
                <div className="summary-action">
                  <Counter quantity={item.quantity} />
                  <button>
                    <Trash size={16} />
                    remover
                  </button>
                </div>
              </div>
              <span>
                <strong>R$ {numberFormatter.format(item.price)}</strong>
              </span>
            </div>
          ))}

          <div className="summary-payment">
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>

          <button>confirmar pedido</button>
        </div>
      </OrderSummary>
    </MainContainer>
  )
}
