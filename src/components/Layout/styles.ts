import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

// Обёртка для всей страницы
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// Хедер
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;
  color: white;
  width: 100%;
`

// Логотип (увеличен)
export const Logo = styled(NavLink)`
  font-size: 36px; /* размер логотип */
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
`

// Название сайта (слева, рядом с логотипом)
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`

// Контейнер для логотипа и названия
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

// Навигация (Home, Categories, Services, Login, Register)
export const AuthNav = styled.nav`
  display: flex;
  gap: 20px;

  & a {
    color: white;
    font-size: 18px;
    text-decoration: none;
  }

  & a.active {
    text-decoration: underline;
  }
`

// Футер
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: yellow;
  color: black;
  width: 100%;
  margin-top: auto;
`

// Текст футера
export const FooterText = styled.p`
  font-size: 18px;
  color: black;
`
