import { useAuth } from "../AuthProvider/AuthProvider"
import { LogoutButton } from "./Logout.styles"
import logoutIcon from "../../assets/иконка выхода.png"
const Logout: React.FC = () => {
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  return (
    <LogoutButton onClick={handleLogout}>
      <img
        src={logoutIcon}
        alt="Logout"
        style={{ width: "60px", height: "60px" }}
      />
    </LogoutButton>
  )
}
export default Logout
