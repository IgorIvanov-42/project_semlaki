import styled from "@emotion/styled"

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 100%;
`

export const Card = styled.div`
  width: 250px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8); 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  color: #333;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`