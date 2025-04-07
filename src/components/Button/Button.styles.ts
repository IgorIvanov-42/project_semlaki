import styled from "@emotion/styled"
interface ButtonProps {
  variant: "primary" | "danger"
  disabled: boolean
}
export const ButtonWrapper = styled.button<ButtonProps>`
  margin: 10px;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  /* Фон кнопки с градиентом в зависимости от состояния */
  background-color: ${props =>
    props.disabled
      ? "#ccc" /* Серый фон для отключенной кнопки */
      : props.variant === "primary"
        ? "linear-gradient(135deg, ##f9efef 0%, #e1b0b0 100%)" /* Градиент для основной кнопки */
        : "linear-gradient(135deg, #dbd9d8 0%, #b0a8a8 100%)"}; /* Градиент для кнопки "danger" */

  /* Цвет текста в зависимости от состояния кнопки */
  color: ${props =>
    props.disabled
      ? "rgb(215, 203, 203)"
      : "black"}; /* Курсор в зависимости от состояния кнопки */
  cursor: ${props =>
    props.disabled
      ? "not-allowed"
      : "pointer"}; /* Плавные переходы для фона, трансформации и тени */
  transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.2s; /* Эффекты при наведении */
  &:hover {
    ${props =>
      !props.disabled &&
      `      transform: translateY(-3px); /* Поднимаем кнопку вверх */ 
           box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Увеличиваем тень */    
        background: ${props.variant === "primary" ? "linear-gradient(135deg, #a9a9a9 0%, #f9efef 100%)" : ""};        `}
  } /* Эффекты при нажатии */
  &:active {
    ${props =>
      !props.disabled &&
      `      transform: translateY(1px); 
        
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
         `}
  }
`
