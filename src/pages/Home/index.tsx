import { HeroContainer, HeroTag, MainContainer } from './styles'
import heroImage from '../../assets/heroImage.png'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'

import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

export interface ProductProps {
  id?: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Home() {
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <HeroContainer>
        <div className="hero-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="hero-tags">
            <HeroTag variant="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </HeroTag>

            <HeroTag variant="base-text">
              <Package size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </HeroTag>

            <HeroTag variant="yellow">
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </HeroTag>

            <HeroTag variant="purple">
              <Coffee size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </HeroTag>
          </div>
        </div>
        <img src={heroImage} alt="" />
      </HeroContainer>

      <MainContainer>
        <h2>Nossos Cafés</h2>

        <div className="coffee-list">
          {products.map((product: ProductProps) => (
            <Card
              key={product.id}
              image={product.image}
              tags={product.tags}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </MainContainer>
    </>
  )
}
