import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  MainContainer,
  OrderDetails,
  OrderDetailsHeader,
  OrderSummary,
  Payment,
  PaymentButton,
} from './styles'

import { Counter } from '../../components/Counter'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { numberFormatter } from '../../utils/formatter'
import { zodResolver } from '@hookform/resolvers/zod'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Checkout() {
  const { cartItems, decreaseItemQuantity, increaseItemQuantity, removeItem } =
    useContext(CartContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  function handleDecreaseQuantity(itemId: number) {
    decreaseItemQuantity(itemId)
  }

  function handleIncreaseQuantity(itemId: number) {
    increaseItemQuantity(itemId)
  }

  function handleItemRemove(itemId: number) {
    removeItem(itemId)
  }

  const handleCreateNewOrder: SubmitHandler<FormInputs> = async (data) => {
    console.log(data)

    if (cartItems.length === 0) {
      toast.error('É preciso ter pelo menos um item no carrinho')
    }

    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const totalItemsPrice = cartItems.reduce((acc, cv) => {
    return (acc += cv.price * cv.quantity)
  }, 0)
  const shippingPrice = totalItemsPrice * (5 / 100)

  return (
    <MainContainer>
      <OrderDetails>
        <h1>Complete seu pedido</h1>
        <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
          <div className="order-address">
            <OrderDetailsHeader>
              <MapPinLine size={22} />
              <div className="order-payment-header">
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </OrderDetailsHeader>

            <input
              type="number"
              placeholder="CEP"
              {...register('cep', { valueAsNumber: true })}
              required
            />
            <input
              type="text"
              placeholder="Rua"
              {...register('street')}
              required
            />
            <div>
              <input
                type="number"
                placeholder="Número"
                {...register('number')}
                required
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('fullAddress')}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                required
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register('city')}
                required
              />
              <input
                type="text"
                placeholder="UF"
                {...register('state')}
                required
              />
            </div>
          </div>

          <div className="order-payment">
            <OrderDetailsHeader>
              <CurrencyDollar size={22} />
              <div className="order-payment-header">
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </OrderDetailsHeader>

            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <Payment onValueChange={field.onChange} value={field.value}>
                    <PaymentButton value="credit">
                      <CreditCard size={16} />
                      cartão de crédito
                    </PaymentButton>

                    <PaymentButton value="debit">
                      <Bank size={16} />
                      cartão de débito
                    </PaymentButton>

                    <PaymentButton value="cash">
                      <Money size={16} />
                      dinheiro
                    </PaymentButton>
                  </Payment>
                )
              }}
            />
          </div>
        </form>
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
                  <Counter
                    decreaseQuantity={() => handleDecreaseQuantity(item.id)}
                    increaseQuantity={() => handleIncreaseQuantity(item.id)}
                    quantity={item.quantity}
                  />
                  <button onClick={() => handleItemRemove(item.id)}>
                    <Trash size={16} />
                    remover
                  </button>
                </div>
              </div>
              <span>
                <strong>R$ {numberFormatter.format(item.value)}</strong>
              </span>
            </div>
          ))}

          <div className="summary-payment">
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </div>

          <button type="submit" form="order" disabled={isSubmitting}>
            confirmar pedido
          </button>
        </div>
      </OrderSummary>
    </MainContainer>
  )
}
