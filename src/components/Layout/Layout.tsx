import React from "react";
import {
  LayoutWrapper,
  Header,
  Footer,
  Logo,
  Title,
  NavContainer,
  AuthNav,
  FooterText,
} from "./styles";
import { LayoutProps } from "./types";
import { NavLink } from "react-router-dom";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <NavContainer>
          <Logo to="/">🌍</Logo>
          <Title>MigrantsGermany</Title>
        </NavContainer>
        <AuthNav>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
            Categories
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
            Register
          </NavLink>
        </AuthNav>
      </Header>

      {children}

      <Footer>
        <Logo to="/">🌍</Logo>
        <FooterText>2025</FooterText>
        <NavLink to="/contacts">Contacts: itmasterlina@gmail.com</NavLink>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;


