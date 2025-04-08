import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "./FourRandomServices.styles"
import { Link } from "react-router-dom"
import Button from "components/Button/Button"

interface Service {
  id: number
  title: string
  description: string
  photo: string
}

export default function FourRandomServices() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axios.get(`/api/services/random?service_counter=4`)
        setServices(res.data)
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    fetchServices()
  }, [])

  return (
    <CardContainer>
      {services.map(s => (
        <Link
          key={s.id}
          to={`/category/0/services/${s.id}`} // Временно ставим categoryId = 0 (если точно неизвестен)
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card>
          <CardTitle>{s.title}</CardTitle>
            <CardImage src={s.photo} alt={s.title} />
            
            <CardDescription>
              {s.description.length > 120
                ? `${s.description.slice(0, 120)}...`
                : s.description}
            </CardDescription>
            <Button text="More Details" />
          </Card>
        </Link>
      ))}
    </CardContainer>
  )
}
