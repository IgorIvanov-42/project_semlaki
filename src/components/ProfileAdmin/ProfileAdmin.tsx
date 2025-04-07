
import { Container, Title } from "./ProfileAdmin.style"
import { Link } from "react-router-dom"
const AdminProfile: React.FC = () => {
  return (
    <Container>
      {" "}
      <Title>Администраторский Кабинет</Title>{" "}
      <p>Добро пожаловать, Администратор!</p>{" "}
      <Link to="/create-service">
        {" "}
        <button>Добавить Услугу</button>{" "}
      </Link>{" "}
      <Link to="/view-services">
        {" "}
        <button>Просмотреть Все Услуги</button>{" "}
      </Link>{" "}
    </Container>
  )
}
export default AdminProfile
