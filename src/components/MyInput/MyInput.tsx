import { InputContainer, InputField } from "./MyInput.styles"
interface IMyInputProps {
  name: string
  placeholder: string
  label: string
  type: "password" | "email" | "text" | "number" | "url"
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}
export default function MyInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
}: IMyInputProps): JSX.Element {
  return (
    <InputContainer>
      {" "}
      <label>{label}</label>{" "}
      <InputField
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />{" "}
      {error && <span style={{ color: "red" }}>{error}</span>}{" "}
      {/* Отображение ошибки */}{" "}
    </InputContainer>
  )
}
