import { HeaderContainer } from './styles'
import igniteLogo from '../../assets/ignite-logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="Logo Ignite dois triangulos verdes" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={22} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
