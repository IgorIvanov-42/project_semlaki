import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
// Обёртка для всей страницы
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  // минимальная высота экрана
`
// Хедер
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(120, 120, 0, 0.8);
  color: white;
  width: 100%;
`

// Логотип
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
export const ContentContainer = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  //padding: 20px;
  width: 100%;
`

// Футер
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(120, 120, 0, 0.8);
  color: black;
  width: 100%;
  margin-top: auto;
  flex-wrap: wrap;
  //position: relative;
`
// Текст футера
export const FooterText = styled.p`
  font-size: 18px;
  color: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
// Контейнер для иконок
export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

//  иконки ФБ и Телеграм
export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
