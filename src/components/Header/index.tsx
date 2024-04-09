import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { HeaderContainer, LocationButton } from './styles'

import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div className="actions">
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <Cart />
      </div>
    </HeaderContainer>
  )
}
