
import ForgotPasswordForm from "components/ForgotPasswordForm/ForgotPasswordForm"
import { PageContainer } from "./styles"
import LoginForm from "components/LoginForm/LoginForm"

const Login: React.FC = () => {
  return (
    <PageContainer>
      <LoginForm />
      <ForgotPasswordForm/>
    </PageContainer>
    
  )
}

export default Login
