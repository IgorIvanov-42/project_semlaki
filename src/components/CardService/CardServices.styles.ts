import styled from "@emotion/styled"
export const CardContainer = styled.div`
  margin: 5%;
  padding: 0px;
  background-color: #f9f9f9;
`
export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 15px;
  width: 900px;
  max-width: 700px;
  height: 200px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`
export const CardTitle = styled.h2`

  font-size: 1.5rem;
  margin: 15px;
  color: #333;
`
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
`
export const MoreDetails = styled.p`
align-self: flex-end;
  color: #666; 
  font-weight: bold; 
  cursor: pointer; 
  padding: 10px;
  margin-top: auto;
   font-size: 0.875rem;
`
