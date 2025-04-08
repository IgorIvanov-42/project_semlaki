import axios from "axios"
import {
  Container,
  Title,
  ServiceCard,
  CardTitle,
  CardText,
  PageBackground,
  CardContainer,
} from "./MyServices.styles"
import { useEffect, useState } from "react"
import Button from "components/Button/Button"

interface Service {
  id: number
  title: string
  description: string
  photo: string
}
const MyServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  async function fetchServices() {
    try {
      const response = await axios.get("/api/services/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      setServices(response.data)
    } catch (err) {
      setError("Error fetching services")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  async function deleteService(id: number) {
    try {
      await axios.delete(`/api/services/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      setServices(services.filter(service => service.id !== id)) // Обновление состояния
    } catch (err) {
      setError("Error deleting service")
      console.error(err)
    }
  }
  useEffect(() => {
    fetchServices()
  }, [])
  if (loading) {
    return <div>Loading...</div> // Индикатор загрузки
  }
  if (error) {
    return <div>{error}</div> // Сообщение об ошибке
  }
  return (
    <PageBackground>
      <Container>
        
        <Title>My Services</Title>
        <CardContainer>
        {services.length === 0 ? (
          <p>You have no services added yet.</p>
        ) : (
          services.map(service => (
            <ServiceCard key={service.id}>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
              <img src={service.photo} alt={service.title} />
              <Button onClick={() => deleteService(service.id)}>Delete</Button> {/* Кнопка удаления */}
            </ServiceCard>
          ))
        )}
        </CardContainer>
      </Container>
    </PageBackground>
  )
}
export default MyServices
