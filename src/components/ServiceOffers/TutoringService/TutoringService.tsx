import Button from "components/Button/Button"
import {
  ServiceContainer,
  ServiceTitle,
  ServiceDescription,
  ServiceImage,
} from "./TutoringService.style"

const TutoringService: React.FC = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>Tutoring Services</ServiceTitle>
      <ServiceDescription>
        Find a Tutor in Your City: Our platform provides a quick and convenient
        way to locate an experienced tutor that meets your educational needs. We
        understand how important it is to have a reliable mentor for studying
        different subjects. You can choose a tutor for math, languages,
        sciences, and many other disciplines. Simply specify your city, and we
        will help you find the right specialist who ensures quality teaching and
        support in the learning process
      </ServiceDescription>
    </ServiceContainer>
  )
}
export default TutoringService
