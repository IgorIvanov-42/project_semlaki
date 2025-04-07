import React from "react"
import { ContactsPage, ContactContainer, ContactText } from "./styles"

const Contacts: React.FC = () => {
  return (
    <ContactsPage>
      <ContactContainer>
        <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "black" }}>
          Our Contacts
        </h1>
        <ContactText style={{ marginBottom: "15px" }}>
          Email: info@germanmigrants.de
        </ContactText>
        <ContactText>Phone: +49 123 456 789</ContactText>
      </ContactContainer>
    </ContactsPage>
  )
}

export default Contacts
