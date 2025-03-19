import MyInput from "components/MyInput/MyInput"
import { useState } from "react"
import { Container, MyForm } from "./RegistrationForm.styles"
import Button from "components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Title } from "components/Layout/styles"

export default function RegistrationForm() {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const navigate = useNavigate();
  const handleTermsChange = () => {
    setAgreeToTerms(!agreeToTerms)
  }
  const validateEmail = (email: string) => {
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@).{8,}$/
    return emailPattern.test(email)
  }
  const validatePassword = (password: string) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()?=;:,.]).{8,}$/
    console.log(`Validating password: ${password}`)
    return passwordPattern.test(password)
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
    if (!agreeToTerms) {
      alert("Please accept the terms of service.")
      return
    }
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
    alert("Registration successful!")
    navigate("/");
        
  }
  return (
    <Container>
      <Title>Registration</Title>
      <MyForm onSubmit={handleSubmit}>
        
        <MyInput
          label={"Your< Name"}
          placeholder={"Enter your name"}
          type={"text"}
          name={"name"}
        />
        <MyInput
          label={"Your Last Name"}
          placeholder={"Enter your last name"}
          type={"text"}
          name={"lastName"}
        />
        {emailError && (
          <span style={{ color: "red", display: "block", minHeight: "20px" }}>
            {" "}
            {emailError}{" "}
          </span>
        )}
        <MyInput
          label={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {passwordError && (
          <span style={{ color: "red", display: "block", minHeight: "20px" }}>
            {" "}
            {passwordError}{" "}
          </span>
        )}
        <MyInput
          label={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {confirmPasswordError && (
          <span style={{ color: "red", display: "block", minHeight: "20px" }}>
            {" "}
            {confirmPasswordError}{" "}
          </span>
        )}
        <MyInput
          label={"Confirm Password"}
          placeholder={"Confirm your password"}
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <label>
          
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={handleTermsChange}
          />
          I agree to the terms of service
        </label>
        <Button text={"Register"} type={"submit"} />
      </MyForm>
    </Container>
  )
}
