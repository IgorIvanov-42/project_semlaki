import styled from "@emotion/styled"
export const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f0f0f0;
  background-image: url("/src/assets/3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 40px;
  overflow: hidden;
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 0;
  width: 100%;
  padding: 100px;
  max-width: 100%;
  margin: auto;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Title = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 20px 0 10px 0px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
`
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical; /* Ограничение изменения размера по горизонтали */

  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`
export const Card = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const InfoCard = styled(Card)`
  background-color: rgba(250, 250, 250, 0.7);
`
export const ServiceCard = styled(Card)`
  background-color: rgba(250, 250, 250, 0.7);
`
export const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.25rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const CardText = styled.p`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #555;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const Paragraph = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.4;
  text-align: center;
  margin: 20px auto;
  max-width: 600px;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 14px; 
  }
  @media (max-width: 480px) {
    font-size: 12px; 
  }
`
