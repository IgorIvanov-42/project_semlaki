import type React from "react"
import {
  LayoutWrapper,
  Header,
  Footer,
  ContentContainer,
  Title,
  NavContainer,
  AuthNav,
  FooterText,
  SocialIconsContainer,
  SocialIcon,
} from "./styles"
import logoImage from "../../assets/1.png"
import facebookIcon from "../../assets/facebook94.png"
import telegramIcon from "../../assets/telegram94.png"
import { NavLink } from "react-router-dom"
import type { LayoutProps } from "./types"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <NavContainer>
          <NavLink to="/">
            <img
              src={logoImage}
              alt="MigrantsGermany Logo"
              style={{ height: "60px", cursor: "pointer" }}
            />
          </NavLink>
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

      <ContentContainer>{children}</ContentContainer>

      <Footer>
        <NavLink to="/">
          <img
            src={logoImage}
            alt="MigrantsGermany Logo"
            style={{ height: "60px", cursor: "pointer" }}
          />
        </NavLink>

        <FooterText>2025</FooterText>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <NavLink
            to="/contacts"
            style={{ whiteSpace: "nowrap", color: "black" }}
          >
            Contacts
          </NavLink>

          <SocialIconsContainer>
            <a
              href="https://www.facebook.com/share/14rHMG9y6F/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {" "}
              {/* Позже заменим ссылку для Telegram */}
              <SocialIcon src={telegramIcon} alt="Telegram" />
            </a>
          </SocialIconsContainer>
        </div>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
