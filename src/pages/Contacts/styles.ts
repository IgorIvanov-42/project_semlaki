import styled from "@emotion/styled"

export const ContactsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: url("/src/assets/3.png") no-repeat center center/cover;
  padding-top: 50px;
  padding-bottom: 40px; /* Чтобы предотвратить наложение на футер */
`

export const TeamHeading = styled.h2`
  font-size: 2.5rem;
  color: #555;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 60px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const TeamImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #aaa;
`

export const RoleText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`

export const NameText = styled.p`
  font-size: 18px;
  color: #222;
`

export const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 600px; /* Ограничиваем ширину блока контактов */
  margin-bottom: 40px;
`

export const ContactText = styled.p`
  font-size: 20px;
  color: black;
  font-weight: bold;
`

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Для адаптивности */

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
