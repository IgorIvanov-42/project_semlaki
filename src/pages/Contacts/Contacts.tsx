import React from "react"
import {
  ContactsPage,
  ContactContainer,
  ContactText,
  TeamHeading,
  TeamGrid,
  TeamCard,
  TeamImage,
  RoleText,
  NameText,
} from "./styles"

const teamMembers = [
  {
    role: "Fullstack Developer",
    name: "Ivanov Igor",
    image: "/src/assets/ivanov.jpeg",
  },
  {
    role: "Fullstack Developer",
    name: "Held Svitlana",
    image: "/src/assets/held.jpeg",
  },
  {
    role: "Fullstack Developer",
    name: "Karpenko Anastasiia",
    image: "/src/assets/karpenko.jpeg",
  },
  {
    role: "QA Tester",
    name: "Kaluhina Olena",
    image: "/src/assets/kaluhina.jpeg",
  },
  {
    role: "QA Tester",
    name: "Versiackiene Diana",
    image: "/src/assets/versiackiene.jpeg",
  },
  {
    role: "QA Tester",
    name: "Vikatto Iryna",
    image: "/src/assets/vikatto.jpeg",
  },
]

const Contacts: React.FC = () => {
  return (
    <ContactsPage>
      <TeamHeading>Our Team</TeamHeading>

      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <TeamImage src={member.image} alt={member.name} />
            <RoleText>{member.role}</RoleText>
            <NameText>{member.name}</NameText>
          </TeamCard>
        ))}
      </TeamGrid>

      <TeamHeading>Our Contacts</TeamHeading>

      <ContactContainer>
        <ContactText style={{ marginBottom: "15px" }}>
          Email: info@germanmigrants.de
        </ContactText>
        <ContactText>Phone: +49 123 456 789</ContactText>
      </ContactContainer>
    </ContactsPage>
  )
}

export default Contacts
