import styled from "@emotion/styled"
interface PasswordResetButtonProps {
  variant?: "primary" | "danger"
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-image: url("/src/assets/loginForm.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 50px 0px 100px 550px;
  overflow: hidden;
  

  @media (max-width: 900px) {
    padding: 50px 20px 100px;
    background-image: url("/src/assets/3.png");
  }
  @media (max-width: 600px) {
    padding: 20px 0;
    background-image: url("/src/assets/3.png");
  }
`

// Обертка для формы

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  transition: box-shadow 0.3s;
  width: 50%;
  margin: 20px 20px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    padding: 20px;
    margin: 20px 0;
    width: 90%;
  }
` // Заголовок формы
export const Title = styled.h2`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 20px 0 10px 0px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media (min-width: 901px) {
    font-size: 2.5rem;
  }
`
// Стили для кнопки восстановления пароля
export const PasswordResetButton = styled.button<PasswordResetButtonProps>`
  margin: 20px 50px 0px 35px;
  padding: 12px 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 300px;
  line-height: 1.5;
  background-color: ${props =>
    props.disabled
      ? "#ccc" /* Серый фон для отключенной кнопки */
      : props.variant === "primary"
        ? "linear-gradient(135deg, #f9efef 0%, #e1b0b0 100%)" /* Градиент для основной кнопки */
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
        background: ${props.variant === "primary" ? "linear-gradient(135deg, #a9a9a9 0%, #f9efef 100%)" : ""};      
          `}
  } /* Эффекты при нажатии */
  &:active {
    ${props =>
      !props.disabled &&
      `      transform: translateY(1px); 
        
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
         `}
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
    margin: 10px 0;
  }
`
