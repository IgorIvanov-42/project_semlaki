import styled from "@emotion/styled"

export const Container = styled.div`
flex-direction: column;
//background: url("/src/assets/leuchtturm.jpg") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Заполняет всю высоту экрана */
 
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 10px; /* Уменьшение отступов на маленьких экранах */
  }
`
export const MyForm = styled.form`
  background-color: #ffffff;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 90%; /* Уменьшение максимальной ширины на маленьких экранах */
  }
  &:hover {
    transform: translateY(-5px); /* Поднимаем карточку вверх при наведении */
  }
  > input {
    margin-top: 8px;
  }
`;
export const Title = styled.h2`
margin: 50px;
padding: 50px;
  text-align: center; /* Центрируем текст */
  /* Отступ снизу */
  color: #333; /* Цвет заголовка */
`;