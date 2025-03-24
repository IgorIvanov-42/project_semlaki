import { Link } from "react-router-dom"
import {
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  MoreDetails,
  CardImage,
} from "./CardServices.styles"

const services = [
  {
    title: "Translation services",
    description: "Find a translator for your documents and communication needs.",
    path: "/translation-service",
    text: "More details",
    image: "/src/assets/background.jpg",
  },
  {
    title: "Technical services",
    description: "Need tech support? Find a specialist for repairs and setups.",
    path: "/technical-service",
    text: "More details",
    image: "/src/assets/services.webp",
  },
  {
    title: "Childcare",
    description: "Qualified professionals to take care of your children.",
    path: "/childcare",
    text: "More details",
    image: "/src/assets/Children1.jpg",
  },
  {
    title: "Tutoring",
    description: "Find a tutor to help with studies and educational needs.",
    path: "/tutoring",
    text: "More details",
    image: "/src/assets/images.jpg",
  },
]

const CardServices: React.FC = () => {
  return (
    <CardContainer>
      {services.slice(0, 4).map((service, index) => (
        <Link key={index} to={service.path} style={{ textDecoration: "none", color: "inherit" }}>
          <Card>
            <CardImage src={service.image} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <MoreDetails>{service.text}</MoreDetails>
          </Card>
        </Link>
      ))}
    </CardContainer>
  )
}

export default CardServices


