import { useAuth } from "../AuthProvider/AuthProvider"
import { LogoutButton } from "./Logout.styles"
import logoutIcon from "../../assets/логаут икон.png"
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
        style={{ width: "35px", height: "35px" }}
      />
    </LogoutButton>
  )
}
export default Logout
