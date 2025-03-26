import styled from "@emotion/styled"
export const ServiceContainer = styled.div`
  padding: 20px;
  //background-color: #f9f9f9;
  background: rgba(255, 255, 255, 0.8); /* полупрозрачный фон */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const ServiceImage = styled.img`
  width: 100%; /* Устанавливаем ширину изображения на 100% */
  max-width: 400px; /* Максимальная ширина изображения */
  border-radius: 8px; /* Скругляем углы изображения */
  margin-bottom: 15px; /* Отступ снизу для разделения с текстом */
`
export const ServiceTitle = styled.h1`
  margin: 50px;
  color: #333;
`
export const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
`
export const MoreInfoText = styled.span`
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
`
