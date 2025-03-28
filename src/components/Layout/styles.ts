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
  padding: 10px;
  background: rgb(120, 120, 0);
  color: white;
  width: 100%;
`
export const Logo = styled(NavLink)`
  font-size: 36px; /* размер логотип */
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const IconNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ProfileIconContainer = styled(NavLink)`
  display: flex;
  flex-direction: column; /* Вертикальное выравнивание */
  align-items: center; /* Центрируем по горизонтали */
  text-decoration: none; /* Убираем подчеркивание */
`
export const ProfileText = styled.span`
  font-size: 14px; /* Размер текста */
  text-align: center;
  color: white;
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
  padding: 0px;
  background: rgb(120, 120, 0);
  color: black;
  width: 100%;
  margin-top: auto;
`
// Текст футера
export const FooterText = styled.p`
  font-size: 18px;
  color: black;
`
