import { useState } from "react"

import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"
import { Title } from "components/Layout/styles"
import { Container } from "./LoginForm.styles"
import { MyForm } from "components/RegistrationForm/RegistrationForm.styles"
import { Link, useNavigate } from "react-router-dom"
export default function LoginForm() {
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const navigate = useNavigate();
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@).{8,}$/
    return emailPattern.test(email)
  }
  const validatePassword = (password: string): boolean => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,;:?/]).{8,}$/
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
    alert("Login successful!"); 
       navigate("/");
        };
  return (
    <>
      
      
      <Container >
      <Title>Login Form</Title>
        <MyForm onSubmit={handleSubmit}>
          
          <MyInput
            label={"Your Login Name"}
            placeholder={"Login"}
            type={"text"}
            name={"login"}
          />
          <MyInput
            label={"Type Unique Email"}
            placeholder={"Email"}
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
            label={"Secret Password"}
            placeholder={"Password"}
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
        </MyForm>
        <Link to="/forgot-password"><Button text={"Forgot your password? Reset it here."} />   </Link>
      </Container>
    </>
  )
}
