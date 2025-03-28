import { useState } from "react"
import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"
import { Container } from "./LoginForm.styles"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "components/AuthProvider/AuthProvider"
import { FormWrapper } from "components/MyForm/MyForm.styles"
import { Title } from "components/LoginForm/LoginForm.styles"

export default function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@).{8,}$/
    return emailPattern.test(email)
  }

  const validatePassword = (password: string): boolean => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,;:?/]).{8,}$/
    return passwordPattern.test(password)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setEmailError("")
    setPasswordError("")

    if (!validateEmail(email)) {
      setEmailError(
        "Email must contain '@' and at least one letter, and be at least 8 characters long.",
      )
      return
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.",
      )
      return
    }

    login()
    alert("Login successful!")
    navigate("/")
  }
  return (
    <>
      <Container>
        <Title>Login Form</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <MyInput
            label={"Enter your Email"}
            placeholder={"e.g. example@mail.com"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && (
            <span style={{ color: "red", display: "block", minHeight: "20px" }}>
              {" "}
              {emailError}{" "}
            </span>
          )}
          <MyInput
            label={"Enter your  Password"}
            placeholder={
              "At least 8 characters, 1 uppercase, 1 number, 1 special character"
            }
            type={"password"}
            name={"password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && (
            <span style={{ color: "red", display: "block", minHeight: "20px" }}>
              {" "}
              {passwordError}{" "}
            </span>
          )}
          <Button text={"Send Form"} type={"submit"} />
        </FormWrapper>
        <Link to="/forgot-password">
          <Button text={"Forgot your password? Reset it here."} />{" "}
        </Link>
      </Container>
    </>
  )
}
