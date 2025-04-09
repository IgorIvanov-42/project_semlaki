import styled from "@emotion/styled"
import Button from "components/Button/Button"
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  overflow: hidden;
  max-width: 1100px;
  @media (max-width: 1200px) {
    flex-direction: row;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f0f0f0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 70px;
  background-image: url("/src/assets/3.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`
export const Container = styled.div`
margin:5px 0px 30px 3px;


`
export const Title = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 10px 0px 10px 0px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
export const ServiceCard = styled.div`
  flex: 1 1 calc(25% - 20px);
  max-width: calc(25% - 20px);
  //min-width: 200px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  height: auto;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  @media (max-width: 900px) {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`
export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardText = styled.p`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 60px;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const ButtonContainer = styled.div`
  padding: 0px 0 0px 0;
  margin: 0 5px;
  border: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`
export const BackButton = styled(Button)`
  position: absolute;
  top: 0px;
  left: 5px;
  z-index: 10;
`
