import {
  ServiceContainer,
  ServiceTitle,
  ServiceDescription,
} from "./TechnicalService.styles"

const TechnicalService: React.FC = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>Technical Services</ServiceTitle>
      <ServiceDescription>
        Looking for a Specialist in Your City? Our service offers you the
        opportunity to find an experienced technician to address your technical
        problems. We understand how important it is to have reliable support
        when technical difficulties arise. Our specialists are available for
        on-site assistance to help you with repairs, installation, and setup of
        equipment, as well as any other technology-related inquiries. Simply
        specify your city, and we'll help you find the right expert who can
        quickly and effectively resolve your issue.
      </ServiceDescription>
    </ServiceContainer>
  )
}
export default TechnicalService
