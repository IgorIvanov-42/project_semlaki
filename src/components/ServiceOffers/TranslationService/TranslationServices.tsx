import Button from "components/Button/Button"
import {
  ServiceContainer,
  ServiceTitle,
  ServiceDescription,
  ServiceImage,


} from "./TranslationService.styles"

const TranslationService: React.FC = () => {
  return (
    <ServiceContainer>
      
      <ServiceTitle>Translation Services</ServiceTitle>
      <ServiceDescription>
      Find a Translator in Your City: Our platform provides a quick and convenient way to locate an experienced translator that meets your requirements. We understand how important it is to have a reliable specialist for document translations and communication with foreigners. You can choose a translator who can assist you with any tasks—from translating personal documents to providing interpretation services in various situations. Simply specify your city, and we will help you find the right professional who ensures quality and accurate translation.
      </ServiceDescription>
 
    </ServiceContainer>
  )
}
export default TranslationService
