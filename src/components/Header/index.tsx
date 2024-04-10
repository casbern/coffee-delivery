import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { HeaderContainer, Location } from './styles'

import { Cart } from '../Cart'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

export function Header() {
  const [userCity, setUserCity] = useState(null)
  const [userCountryCode, setUserCountryCode] = useState(null)

  async function getUserLocation() {
    const response = await api.get(
      'https://extreme-ip-lookup.com/json/?key=ea4mJ2WK8IUoNBO4PxK8',
    )

    setUserCountryCode(response.data.countryCode)
    setUserCity(response.data.city)
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>

      <div className="actions">
        <Location>
          <MapPin size={22} weight="fill" />
          <span>{`${userCity}, ${userCountryCode}`}</span>
        </Location>

        <Cart />
      </div>
    </HeaderContainer>
  )
}
