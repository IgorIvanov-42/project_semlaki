import styled from "@emotion/styled"
interface ButtonProps {
  variant: "primary" | "danger"
  disabled: boolean
}

export const ButtonWrapper = styled.button<ButtonProps>`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${props =>
    props.disabled
      ? "#ccc"
      : props.variant === "primary"
        ? "#f9efef"
        : "#dbd9d8"};
  color: ${props => (props.disabled ? "rgb(215, 203, 203)" : "black")};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s,
    transform 0.2s;
  &:hover {
    ${props =>
      !props.disabled &&
      `      transform: translateY(+3px);      background-color: ${props.variant === "primary" ? "#736455" : "#8e8785"};    `}
  }
`
