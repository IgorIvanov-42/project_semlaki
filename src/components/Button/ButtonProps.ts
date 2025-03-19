import type { ReactNode } from "react"
export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  text?: string
  func?: () => void
  disabled?: boolean
  variant?: "primary" | "danger"
}
