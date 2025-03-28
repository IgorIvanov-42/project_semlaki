import { ButtonWrapper } from "./Button.styles"
import type { ButtonProps } from "./ButtonProps"
const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick = () => {},
  disabled = false,
  variant = "primary",

  children,
}) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={"primary"}
    >
      {text || children}
      {/* Используем text или children */}
    </ButtonWrapper>
  )
}
export default Button
