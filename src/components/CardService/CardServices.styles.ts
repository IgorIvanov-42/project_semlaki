import styled from "@emotion/styled"

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
 
  //background: url("/src/assets/3.png") no-repeat center center/cover;
`

export const Card = styled.div`
  width: 250px;
  height: 300px; /* Фиксированная высота карточки */
  //background: white;
  background: rgba(255, 255, 255, 0.8); /* полупрозрачный фон */
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
  height: 130px;
  border-radius: 10px;
`

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  color: #333;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #667;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
