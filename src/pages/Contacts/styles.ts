import styled from "@emotion/styled"

export const ContactsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: url("/src/assets/leuchtturm.jpg") no-repeat center center/cover;
  padding-top: 50px;
`

export const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`

export const ContactText = styled.p`
  font-size: 20px;
  color: black;
  font-weight: bold;
`
