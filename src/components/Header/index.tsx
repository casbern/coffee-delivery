import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { HeaderContainer, LocationButton } from './styles'

import { Cart } from '../Cart'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>

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
