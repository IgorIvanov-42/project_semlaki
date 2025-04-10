import { useState } from "react"
import { Container } from "./RegistrationForm.styles"
import Button from "components/Button/Button"
import { Link, useNavigate } from "react-router-dom"
import { Title } from "components/RegistrationForm/RegistrationForm.styles"
import { FormWrapper } from "components/MyForm/MyForm.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

import axios from "axios"

import {
  ErrorMessage,
  InputContainer,
  PasswordToggleButton,
} from "components/MyInput/MyInput.styles"
import MyInput from "components/MyInput/MyInput"

export default function RegistrationForm() {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [firstNameError, setFirstNameError] = useState<string>("")
  const [lastNameError, setLastNameError] = useState<string>("")

  const [alreadyRegisteredError, setAlreadyRegisteredError] =
    useState<string>("")
  const navigate = useNavigate()

  const handleTermsChange = () => {
    setAgreeToTerms(!agreeToTerms)
  }
  const validateEmail = (email: string) => {
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@).{8,}$/
    return emailPattern.test(email)
  }
  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()?=;:,.]).{8,}$/
    console.log(`Validating password: ${password}`)
    return passwordPattern.test(password)
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
    setFirstNameError("")
    setLastNameError("")
    setEmailError("")
    setAlreadyRegisteredError("")
    if (!agreeToTerms) {
      alert("Please accept the terms of service.")
      return
    }
    if (!firstName) {
      setFirstNameError("First Name is required.")
      return
    }
    if (!lastName) {
      setLastNameError("Last Name is required.")
      return
    }
    setEmailError("")

    if (!validateEmail(email)) {
      setEmailError(
        "Email must contain '@', at least one letter, and be at least 8 characters long.",
      )
      return
    }
    console.log(`Password entered: ${password}`)
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.",
      )
      return
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.")
      return
    }

    try {
      await axios.post("/api/register", {
        email,
        password,
        firstName,
        lastName,
      })
      alert("Registration successful!")
      navigate("/")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          setAlreadyRegisteredError("This email is already registered.")
        } else {
          alert("Registration failed. Please try again.")
        }
      } else {
        console.error("Registration error:", error)
        alert("An unexpected error occurred. Please try again.")
      }
    }
  }

  return (
    <>
      <Container>
        <Title>Registration</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <MyInput
            label={"Enter your First Name"}
            placeholder={"e.g. First Name"}
            type={"text"}
            name={"name"}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          {firstNameError && <ErrorMessage>{firstNameError}</ErrorMessage>}
          <MyInput
            label={"Enter your Last Name"}
            placeholder={"e.g. Last Name"}
            type={"text"}
            name={"lastName"}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          {lastNameError && <ErrorMessage>{lastNameError}</ErrorMessage>}
          {alreadyRegisteredError && (
            <ErrorMessage>{alreadyRegisteredError}</ErrorMessage>
          )}
          <MyInput
            label={"Enter your Email"}
            placeholder={"e.g. user@example.com"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputContainer>
            <MyInput
              label={"Password"}
              placeholder={"The password does not meet security requirements."}
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
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </PasswordToggleButton>{" "}
          </InputContainer>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

          <InputContainer>
            <MyInput
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
              type={showConfirmPassword ? "text" : "password"}
              name={"confirmPassword"}
              value={confirmPassword}
              onChange={e => {
                setConfirmPassword(e.target.value)
                setConfirmPasswordError("")
              }}
            />
            <PasswordToggleButton
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </PasswordToggleButton>
            {confirmPasswordError && (
              <ErrorMessage>{confirmPasswordError}</ErrorMessage>
            )}
          </InputContainer>

          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleTermsChange}
            />
            <Link
              to="/terms"
              style={{
                marginLeft: "5px",
                color: "black",
                textDecoration: "none",
              }}
            >
              I agree to the terms of service
            </Link>
          </label>
          <Button text={"Register"} type={"submit"} />
        </FormWrapper>
      </Container>
    </>
  )
}
