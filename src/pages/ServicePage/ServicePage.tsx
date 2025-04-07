import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { PageContainer, Title, Description, Image, Container } from "./styles"

interface Service {
  id: number
  title: string
  description: string
  photo: string
}

const ServicePage: React.FC = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(`/api/services/${serviceId}`)
        setService(data)
      } catch (err) {
        setError("Failed to load service details.")
      } finally {
        setLoading(false)
      }
    }

    fetchService()
  }, [serviceId])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!service) return <p>Service not found</p>

  return (
    <Container>
    <PageContainer>
      <Title>{service.title}</Title>
      <Image src={service.photo} alt={service.title} />
      <Description>{service.description}</Description>
    </PageContainer>
    </Container>
  )
}

export default ServicePage
