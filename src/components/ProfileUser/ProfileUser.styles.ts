// ProfileUser.styles.ts
import styled from "@emotion/styled"
export const PageBackground = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f0f0f0;
  background-image: url("/src/assets/маяк 3.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 70px;
`
export const Container = styled.div`
  margin-left: 0;
  width: 100%;
  padding: 30px;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute; 
  left: 200px;
  top: 100px; 
  background-color: (255, 255, 255, 0.10); /* Полупрозрачный белый фон */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
`
export const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
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
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`
export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: vertical; /* Ограничение изменения размера по горизонтали */
`
export const Card = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`
export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`
export const CardText = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
` // Добавляем стили для текста на странице
export const Paragraph = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.4;
  /* Межстрочный интервал для лучшей читабельности */
`
export const SmallText = styled.span`
  font-size: 12px;
  color: #777; /* Более светлый цвет для вспомогательного текста */
`
