import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
// Обёртка для всей страницы
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  color: black;
  padding-top: 80px; /* отступ равный высоте хедера */
`
// Хедер
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  background-color: white;
  color: black;
  width: 100%;
  position: fixed; /* фиксируем */
  top: 0;
  left: 0;
  z-index: 1000;
  height: 80px; /* добавим фиксированную высоту */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* тень для видимости */
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
export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  transition: transform 0.3s;
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.1); /* Увеличение иконки при наведении */
  }
`
export const IconNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ProfileIconContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`
export const ProfileText = styled.span`
  font-size: 14px; /* Размер текста */
  text-align: center;
  color: gray;
`
// Навигация (Home, Categories, Login, Register)
export const AuthNav = styled.nav`
  margin: 10px 0;
  padding: 5px;
  display: flex;
  gap: 20px;
  & a {
    color: black;
    font-size: 20px;
    text-decoration: none;
    padding: 0px 5px; /* Добавляем вертикальные отступы */
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
  padding: 0px;
  background: white;
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
