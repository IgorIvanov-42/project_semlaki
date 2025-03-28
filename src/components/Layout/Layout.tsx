import type React from "react"
import {
  LayoutWrapper,
  Header,
  Footer,
  Title,
  NavContainer,
  AuthNav,
  FooterText,
  IconNavContainer,
} from "./styles"
import logoImage from "../../assets/1.png"
import { NavLink } from "react-router-dom"
import { useAuth } from "../AuthProvider/AuthProvider"
import Logout from "components/Logout/Logout"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth()
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
        <IconNavContainer>
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
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile-user"
                  style={{ textAlign: "center", marginRight: "0px" }}
                >
                  <span>Profile</span>
                </NavLink>
                <Logout />
              </>
            ) : (
              <>
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
              </>
            )}
          </AuthNav>
        </IconNavContainer>
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
