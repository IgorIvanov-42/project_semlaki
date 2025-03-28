import { Link } from "react-router-dom"
import {
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  MoreDetails,
  CardImage,
} from "./CardServices.styles"
import { useEffect, useState } from "react"


interface Service{
  id: number;
  title: string;
  description: string;
  photo: string;
}

const CardServices: React.FC = () => {
  const [services, setServices] =useState<Service[]>([])
  async function fetchServices(){
    const res = await fetch("/api/services");
    const arr =await res.json();
    setServices(arr)
  }

  useEffect(()=>{
    fetchServices()
  },[])

  


  return (
    <CardContainer>
      {services.slice(0, 4).map((service, index) => (
        <Link key={service.id} to={String(service.id)} style={{ textDecoration: "none", color: "inherit" }}>
          <Card>
            <CardImage src={service.photo} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
      {/*       <MoreDetails>{service.text}</MoreDetails> */}
          </Card>
        </Link>
      ))}
    </CardContainer>
  )
}

export default CardServices


