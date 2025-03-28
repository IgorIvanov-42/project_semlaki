import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Title,
  Card,
  InfoCard,  
  ServiceCard,
  CardTitle,
  TextArea,
  PageBackground,
  Paragraph,
  FlexContainer,
} from "./ProfileUser.styles"
import Button from "components/Button/Button"
import CreateServiceForm from "components/CreateService/CreateServiceForm"
const ProfileUser: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [aboutMe, setAboutMe] = useState<string>("")
  const [isCreatingService, setIsCreatingService] = useState<boolean>(false)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0])
    }
  }
  const handleAboutMeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutMe(e.target.value)
  }
  const handleSubmit = (serviceData: any) => {
    console.log("Service Data: ", serviceData)
    setIsCreatingService(false)
  }
  const handleSaveProfile = () => {
    console.log("Profile saved:", { profileImage, aboutMe })
  }
  return (
    <PageBackground>
    
      <Container>
       
        <Title>User Profile</Title>

        <Paragraph>Welcome to your personal account!</Paragraph>
      
        <FlexContainer>
          
        
          <InfoCard>
            
            <CardTitle>My Information</CardTitle>
            <label>
              
              <Paragraph> Upload Profile Photo:</Paragraph>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <label>
              
              <Paragraph>About Me:</Paragraph>
              <TextArea
                placeholder="Tell us about yourself"
                value={aboutMe}
                onChange={handleAboutMeChange}
              />
            </label>
            <Button onClick={handleSaveProfile}>Save</Button>
            </InfoCard>
          {/* Карточка для создания услуги */}
          <ServiceCard>
            
            <CardTitle>Create a Service</CardTitle>
            <Button onClick={() => setIsCreatingService(!isCreatingService)}>
          
              {isCreatingService ? "Cancel" : "Add Service"}
            </Button>
            {isCreatingService && (
              <CreateServiceForm onSubmit={handleSubmit} />
            )}
          </ServiceCard>
        </FlexContainer>
        <Link to="/services">
       
          <Button> View All Services</Button>
        </Link>
      </Container>
    </PageBackground>
  )
}
export default ProfileUser
