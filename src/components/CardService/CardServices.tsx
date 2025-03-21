import { Link } from "react-router-dom"
import {
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  MoreDetails,
} from "./CardServices.styles"

const CardServices: React.FC = () => {
  const services = [
    {
      title: "Translation services",
      description:
        "Looking for a Translator in Your City? Here you can easily find a qualified translator for your needs. We offer a platform to connect you with professionals ready to assist you with document translations and communication in a foreign language Tel:+49 453 456 987",
      path: "/translation-service",
      text: "More details",
    },
    {
      title: "Technical services",
      description:
        "Find a Specialist in Your City: Here you can easily find a qualified technician for technical support. Whether you need help with appliance repairs, computer setup, or other technical issues, our 'handyman' is ready to assist you!",
      path: "/technical-service",
      text: "More details",
    },
    {
      title: "Childcare",
      description:
        "Looking for Childcare Services in Your City? Here you can easily find a qualified professional to care for your children. We offer services from experts ready to ensure the safety and comfort of your little ones.",
      path: "/childcare",
      text: "More details",
    },
    {
      title: "Tutoring",
      description:
        "Looking for Tutoring Sessions in Your City? Here you can easily find a qualified professional for various educational subjects. We offer services from experts ready to help you or your children with their studies.Detailed Description:",
      path: "/tutoring",
      text: "More details",
    },
  ]
  return (
    <>
      <h1 style={{ textAlign: "center", width: "100%" }}>Services</h1>
      <CardContainer>
        {" "}
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <Card>
              {" "}
              <CardTitle>{service.title}</CardTitle>{" "}
              <CardDescription>{service.description}</CardDescription>{" "}
              <MoreDetails>{service.text}</MoreDetails>
            </Card>{" "}
          </Link>
        ))}{" "}
      </CardContainer>
    </>
  )
}
export default CardServices
