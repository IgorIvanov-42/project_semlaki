import SearchBar from "components/SearchBar/SearchBar"
import { SearchResultsContainer } from "./styles"
import {
  PageContainer,
  ContentWrapper,
  ServicesContainer,
  DescriptionText,
} from "./styles"
import FourRandomServices from "components/FourRandomServices/FourRandomServices"
import axios from "axios"
import type { Service } from "components/CardService/CardServices.types"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from "components/CardService/CardServices.styles"
import Button from "components/Button/Button"
import { SectionTitle } from "./styles"

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search service:", query)
  }
  const [query, setQuery] = useState("")
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axios.get(`/api/services/filter?term=${query}`)
        setServices(res.data)
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }
    if (query) {
      fetchServices()
    }
  }, [query])

  return (
    <PageContainer>
      <ContentWrapper>
        <DescriptionText>
          Welcome to <strong>Migrant Germany</strong>, a platform designed to
          help Russian-speaking migrants in Germany find essential services.
          Whether you need translation assistance, technical support, childcare,
          or tutoring, our community-driven service marketplace connects you
          with trusted professionals. Browse our categories and find the help
          you need today!
        </DescriptionText>

        <SearchBar onSearch={handleSearch} query={query} setQuery={setQuery} />

        <SearchResultsContainer>
  {services.map(s => (
    <Link
      key={s.id}
      to={`/category/0/services/${s.id}`}
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
</SearchResultsContainer>
<SectionTitle>Random selection of services</SectionTitle>
        <ServicesContainer>
          {/* <CardServices /> */}
          <FourRandomServices />
        </ServicesContainer>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home
