import { InputContainer, InputField, TextArea } from "./MyInput.styles"

interface IMyInputProps {
  name: string
  placeholder: string
  label: string
  type: "password" | "email" | "text" | "number" | "url" | "textarea"
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string
  required?: boolean
}
export default function MyInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
  required,
}: IMyInputProps): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? ( 
        <TextArea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
        
          required={required}
          id={name}
         aria-invalid={!!error}
        />
      ) : (
        <InputField
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          id={name}
        />
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}

      {/* Отображение ошибки */}
    </InputContainer>
  )
}
