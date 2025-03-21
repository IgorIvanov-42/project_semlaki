
export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  text?: string
  disabled?: boolean
  variant?: "primary" | "danger"
  onClick?: () => void; 
 
}
