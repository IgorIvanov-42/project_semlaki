import { useState } from "react"
import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"
import { Container, PasswordResetButton } from "./LoginForm.styles"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "components/AuthProvider/AuthProvider"
import { FormWrapper } from "components/MyForm/MyForm.styles"
import { Title } from "components/LoginForm/LoginForm.styles"
import {
  ErrorMessage,
  PasswordToggleButton,
} from "components/MyInput/MyInput.styles"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
export default function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loginError, setLoginError] = useState("")
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@).{8,}$/
    return emailPattern.test(email)
  }
  const validatePassword = (password: string): boolean => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,;:?/]).{8,}$/
    return passwordPattern.test(password)
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setEmailError("")
    setPasswordError("")
    setLoginError("")
    if (!validateEmail(email)) {
      setEmailError(
        "Incorrect Email",
      )
      return
    }
    if (!validatePassword(password)) {
      setPasswordError("Incorrect Password")
      return
    }
    try {
      const res = await axios.post("/api/auth/login", { email, password })
      localStorage.setItem("accessToken", res.data.accessToken)
      login()
      navigate("/")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401 || error.response.status === 404) {
          setLoginError("User not fond")
        } else {
          setLoginError("An error occurred. Please try again.")
        }
      } else {
        setLoginError("An unexpected error occurred.")
      }
    }
  }
  return (
    <>
      <Container>
        <Title>Welcome back! Please log in to continue.</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <MyInput
            label={"Enter your Email"}
            placeholder={"e.g. example@mail.com"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              setEmailError("")
            }}
            error={emailError}
          />
          <div style={{ position: "relative", width: "100%" }}>
            <MyInput
              label={"Enter your Password"}
              placeholder={"e.g. Password123.! "}
              type={showPassword ? "text" : "password"}
              name={"password"}
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setPasswordError("")
              }}
              
            />
            <PasswordToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                zIndex: 1,
              }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </PasswordToggleButton>
          </div>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          <Button text={"Send Form"} type={"submit"} />
        </FormWrapper>
        <Link to="/forgot-password">
          <PasswordResetButton variant="primary" disabled={false}>
            Forgot your password? Reset it here.
          </PasswordResetButton>
        </Link>
      </Container>
    </>
  )
}
