import { ButtonWrapper } from "./Button.styles"
import type { ButtonProps } from "./ButtonProps"

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text = "click!",
  func = () => {},
  disabled = false,
  variant = "primary",
}) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={func}
      disabled={disabled}
      variant={variant}
    >
      {" "}
      {text}
    </ButtonWrapper>
  )
}
export default Button
