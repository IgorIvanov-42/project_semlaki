import { FormWrapper } from "./MyForm.styles"
import { InputContainer, InputField } from "components/MyInput/MyInput.styles"
import { ButtonWrapper } from "components/Button/Button.styles"
import type { ReactNode } from "react"
interface MyFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}
const MyForm: React.FC<MyFormProps> = ({ onSubmit, children }) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputContainer>
     
      </InputContainer>
      <ButtonWrapper variant="primary" disabled={false}>
        Send
      </ButtonWrapper>
      {children} 
    </FormWrapper>
  )
}
export default MyForm
