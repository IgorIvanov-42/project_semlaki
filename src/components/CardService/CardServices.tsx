import { Link, useParams } from "react-router-dom"
import {
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  CardImage,
} from "./CardServices.styles"
import { useEffect, useState } from "react"
import axios from "axios"

interface Service {
  id: number
  title: string
  description: string
  photo: string
}

const CardServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const { categoryId } = useParams() // Получаем categoryId из URL

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axios.get(`/api/services/category/${categoryId}`)
        setServices(res.data)
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    fetchServices()
  }, [categoryId]) // Перезапуск запроса при изменении categoryId

  return (
    <CardContainer>
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/category/${categoryId}/services/${service.id}`} // путь
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card>
            <CardImage src={service.photo} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </CardContainer>
  )
}

export default CardServices

