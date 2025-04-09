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
} from "./ProfileUser.styles"
import Button from "components/Button/Button"
import CreateServiceForm from "components/CreateService/CreateServiceForm"
import axios from "axios"

interface User {
  email: string
  firstName: string
  lastName: string
}

const ProfileUser: React.FC = () => {
  const [user, setUser] = useState<User>()

  async function fetchUser() {
    const { data } = await axios.get("/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    })

    setUser(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <PageBackground>
      <Container>
        <Title>Profile</Title>
        <Paragraph>Welcome to your personal account!</Paragraph>
        <FlexContainer>
          <InfoCard>
            <CardTitle>My Information</CardTitle>
            <p>{user?.email}</p>
            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
            <Link to="/my-services">
          <Button> View My Services</Button>
        </Link>
          </InfoCard>
          {/* Карточка для создания услуги */}
          <ServiceCard>
            <CardTitle>
              Create Service
              <CreateServiceForm />
            </CardTitle>
          </ServiceCard>
        </FlexContainer>
       
      </Container>
    </PageBackground>
  )
}
export default ProfileUser