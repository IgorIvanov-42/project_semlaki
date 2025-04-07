import { PageContainer, StyledParagraph } from "./Terms.styles"
import { Title } from "components/Terms/Terms.styles"
const Terms: React.FC = () => {
  return (
    
         
    <PageContainer>
      <Title>Terms of Service</Title>
      <StyledParagraph>
       
        Welcome to our platform! By using our services, you agree to the
        following terms:
      
      <h2>1. Acceptance of Terms</h2>
   
      
        By accessing and using our services, you accept and agree to be bound by
        these terms.
      
      <h2>2. User Responsibilities</h2>
     
        
        You are responsible for maintaining the confidentiality of your account
        information and for all activities that occur under your account.
    
      <h2>3. Prohibited Activities</h2>
      
       
        You agree not to engage in any prohibited activities, including but not
        limited to:
      
      <ul>
        
        <li>Using the services for any illegal purpose.</li>
        <li>Harassing or harming other users.</li>
        <li>Distributing spam or unsolicited communications.</li>
      </ul>
      <h2>4. Changes to Terms</h2>
    
        
        We reserve the right to modify these terms at any time. Changes will be
        effective immediately upon posting on this page.
    
      <h2>5. Contact Information</h2>
      
        If you have any questions about these terms, please contact us at
        support@german-migrants.com.
      
       Thank you for using our services!
       </StyledParagraph>
    </PageContainer>
  
  )
}
export default Terms
