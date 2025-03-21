import { ButtonWrapper } from "./Button.styles"
import type { ButtonProps } from "./ButtonProps"

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text = "click!",
  onClick = () => {},
  disabled = false,
  variant = "primary" 
  
}) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      
    >
      
      {text}
    </ButtonWrapper>
  )
}
export default Button