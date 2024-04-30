import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { MainContainer, OrderDetails } from './styles'

import image from '../../../public/images/confirmation-order-image.png'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { order } = useContext(CartContext)

  console.log('order', order)

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
                Entrega em{' '}
                <strong>{`${order!.street}, ${order!.number}`}</strong>
              </p>
              <p>{`${order!.neighborhood} - ${order!.city}, ${order!.state}`}</p>
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
                <strong>{order!.paymentMethod}</strong>
              </p>
            </div>
          </OrderDetails>
        </div>
      </div>

      <img src={image} alt="A deliver guy on a motorcycle" />
    </MainContainer>
  )
}
