import MyInput from "components/MyInput/MyInput"
import Button from "components/Button/Button"
import { useState } from "react"
import { Container, Title } from "./ForgotPasswordForm.styles"
export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) {
      setMessage("Please enter your email.")
      return
    }
    console.log(`Sending reset link to: ${email}`)
    setMessage(
      "If this email exists in our database, you will receive a link to reset your password.",
    )
  }

  return (
    <>
      <Title>Password Recovery</Title>
      <Container>
       

        <form onSubmit={handleSubmit}>
          <MyInput
            label={"Enter your email."}
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            name={""}
          />
          <Button text={"Send"} type={"submit"} />
          {message && <p>{message}</p>}
        </form>
      </Container>
    </>
  )
}
