import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { MainContainer, OrderDetails } from './styles'

import image from '../../assets/confirmation-order-image.png'

export function Success() {
  return (
    <MainContainer>
      <div className="order-confirmation">
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <div className="order-info">
          <OrderDetails variant="purple">
            <MapPinLine size={16} weight="fill" />
            <div>
              <p>
                Entrega em <strong>Rua Jõao Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderDetails>

          <OrderDetails variant="yellow">
            <CurrencyDollar size={16} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </OrderDetails>

          <OrderDetails variant="yellow-dark">
            <Timer size={16} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </OrderDetails>
        </div>
      </div>

      <img src={image} alt="A deliver guy on a motorcycle" />
    </MainContainer>
  )
}
