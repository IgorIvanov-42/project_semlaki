import type React from "react"
import {
  LayoutWrapper,
  Header,
  Footer,
  Logo,
  Title,
  NavContainer,
  AuthNav,
  FooterText,
} from "./styles"
import logoImage from "../../assets/1.png"
import { NavLink } from "react-router-dom"
import type { LayoutProps } from "./types"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <NavContainer>
          <img
            src={logoImage}
            alt="MigrantsGermany Logo"
            style={{ height: "60px" }}
          />
          <Title>German Migrants</Title>
        </NavContainer>
        <AuthNav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Categories
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Register
          </NavLink>
        </AuthNav>
      </Header>

      {children}

      <Footer>
        <img
          src={logoImage}
          alt="MigrantsGermany Logo"
          style={{ height: "60px" }}
        />
        <FooterText>2025</FooterText>
        <NavLink to="/contacts">Contacts: itmasterlina@gmail.com</NavLink>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
