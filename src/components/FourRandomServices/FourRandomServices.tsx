import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "./FourRandomServices.styles"

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
      {services.map((s) => (
        <Card key={s.id}>
          <CardImage src={s.photo} alt={s.title} />
          <CardTitle>{s.title}</CardTitle>
          <CardDescription>{s.description}</CardDescription>
        </Card>
      ))}
    </CardContainer>
  )
}
