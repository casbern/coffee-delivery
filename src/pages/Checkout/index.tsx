import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { MainContainer, OrderDetails, OrderSummary } from "./styles";

import american from "../../assets/american.png"
import { Counter } from "../../components/Counter";


export function Checkout() {
  return (
    <MainContainer>
      <OrderDetails>
        <h1>Complete seu pedido</h1>

        <div className="order-address">
          <header>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <form>
            <input type="number" placeholder="CEP"/>
            <input type="text" placeholder="Rua"/>
            <div>
              <input type="number" placeholder="Número"/>
              <input type="text" placeholder="Complemento"/>
            </div>

            <div>
              <input type="text" placeholder="Bairro"/>
              <input type="text" placeholder="Cidade"/>
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div className="order-payment">
          <header>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

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
          <div className="summary-order">
            <img src={american} alt="" />
            <div className="summary-info">
              <p>Expresso Tradicional</p>
              <div className="summary-action">
                <Counter />
                <button>
                  <Trash size={16} />
                  remover
                </button>
              </div>
            </div>
              <span><strong>R$ 9,90</strong></span>
          </div>

          <div className="summary-order">
            <img src={american} alt="" />
            <div className="summary-info">
              <p>Expresso Tradicional</p>
              <div className="summary-action">
                <Counter />
                <button>
                  <Trash size={16} />
                  remover
                </button>
              </div>
            </div>
              <span><strong>R$ 9,90</strong></span>
          </div>

          <div className="summary-payment">
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </div>

          <button>confirmar pedido</button>
        </div>
      </OrderSummary>
    </MainContainer>
  )
}