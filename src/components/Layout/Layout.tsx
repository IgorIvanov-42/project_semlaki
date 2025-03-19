import React from "react"
import {
  LayoutWrapper,
  Header,
  Footer,
  Logo,
  Title,
  NavContainer,
  NavItem,
  FooterText,
} from "./styles"

import { NavLink } from "react-router-dom"
import { LayoutProps } from "./types"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Logo to="/">🌍</Logo>
        <Title>MigrantsGermany</Title>
        <NavContainer>
          <NavItem to={""}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem to={""}>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Categories
            </NavLink>
          </NavItem>
        </NavContainer>
      </Header>
      {children}
      <Footer>
        <Logo to="/">🌍</Logo>
        <FooterText>2025</FooterText>
        <NavItem to={""}>Contacts</NavItem>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
