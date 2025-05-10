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
import Button from "components/Button/Button"

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
      {services.map(service => (
        <Link
          key={service.id}
          to={`/category/${categoryId}/services/${service.id}`} // путь
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card>
            <CardTitle>{service.title}</CardTitle>
            <CardImage src={service.photo} alt={service.title} />

            <CardDescription>
              {service.description.length > 120
                ? `${service.description.slice(0, 120)}...`
                : service.description}
            </CardDescription>
            <Button text="More Details" />
          </Card>
        </Link>
      ))}
    </CardContainer>
  )
}

export default CardServices
