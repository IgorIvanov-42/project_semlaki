import SearchBar from "components/SearchBar/SearchBar"
import CardServices from "components/CardService/CardServices"
import {
  PageContainer,
  ContentWrapper,
  ServicesContainer,
  DescriptionText,
} from "./styles"

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search service:", query)
  }

  return (
    <PageContainer>
      <ContentWrapper>
        <DescriptionText>
          Welcome to <strong>German Migrants</strong>, a platform designed to
          help Russian-speaking migrants in Germany find essential services.
          Whether you need translation assistance, technical support, childcare,
          or tutoring, our community-driven service marketplace connects you
          with trusted professionals. Browse our categories and find the help
          you need today!
        </DescriptionText>

        <SearchBar onSearch={handleSearch} />

        <ServicesContainer>
          <CardServices />
        </ServicesContainer>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home
