import styled from "@emotion/styled"

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
`

export const Card = styled.div`
  width: 250px;
  background: white;
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

export const MoreDetails = styled.button`
  background-color: rgb(120, 120, 0);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(100, 100, 0);
  }
`



