import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;
  color: white;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const Logo = styled(NavLink)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`

export const NavItem = styled(NavLink)`
  color: black;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  & .active {
    text-decoration: underline;
  }
`

export const Main = styled.main`
  flex: 1;
  background: red;
  //background: url("/assets/background.JPG") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
 
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: yellow;
  color: black;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const FooterText = styled.p`
  font-size: 18px;
  color: black;
`
export const FooterNav = styled.p`
  font-size: 18px;
  color: black;
  cursor: pointer;
`
