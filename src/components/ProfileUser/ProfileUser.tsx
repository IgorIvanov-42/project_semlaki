import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Title,
  InfoCard,
  ServiceCard,
  CardTitle,
  PageBackground,
  Paragraph,
  FlexContainer,
  UserInfo,
  UserDetail,
} from "./ProfileUser.styles"
import Button from "components/Button/Button"
import CreateServiceForm from "components/CreateService/CreateServiceForm"
import axios from "axios"

interface User {
  email: string
  firstName: string
  lastName: string
  role: string
}

const ProfileUser: React.FC = () => {
  const [user, setUser] = useState<User>()
  const [isAdmin, setIsAdmin] = useState(false)

  async function fetchUser() {
    try {
      const { data } = await axios.get("/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      console.log(data)
      setUser(data)
      if (data.role === "admin") {
        setIsAdmin(true)
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <PageBackground>
      <Container>
        <Title>Profile</Title>
        <Paragraph>
          Welcome to your personal account! Here You can create a service and
          use the services of other users!
        </Paragraph>
        <FlexContainer>
          <InfoCard>
            <CardTitle>My Information:</CardTitle>
            <UserInfo>
              <UserDetail>{user?.firstName}</UserDetail>
              <UserDetail>{user?.lastName}</UserDetail>
            </UserInfo>
            <UserDetail>{user?.email}</UserDetail>
            {isAdmin && (
              <Link to="/services">
                <Button> View All Services</Button>
              </Link>
            )}
            <Link to="/my-services">
              <Button>View My Services</Button>
            </Link>
          </InfoCard>
          {/* Карточка для создания услуги */}
          <ServiceCard>
            <CardTitle>Create Service:</CardTitle>
            <CreateServiceForm />
          </ServiceCard>
        </FlexContainer>
      </Container>
    </PageBackground>
  )
}
export default ProfileUser
