import { HeroContainer } from "./styles"
import heroImage from "../../assets/heroImage.png"

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export function Home() {
  return (
    <>
    <HeroContainer>
      <div className="hero-info">
        <h1>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde 
          estiver, a qualquer hora
        </p>

        <div className="hero-tags">
          <div className="hero-tag">
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </div>

          <div className="hero-tag">
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </div> 

          <div className="hero-tag">
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </div>

          <div className="hero-tag">
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src={heroImage} alt="" />
    </HeroContainer>
    </>
  )
}