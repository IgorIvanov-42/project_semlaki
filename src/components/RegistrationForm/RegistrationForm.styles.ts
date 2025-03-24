import styled from "@emotion/styled"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/src/assets/leuchtturm.jpg") no-repeat center center/cover;
  height: 100vh; /* Высота на всю высоту окна */
  width: 100%; /* Ширина на всю ширину окна */
  margin: 0; /* Убираем все внешние отступы */
  padding: 0; /* Убираем паддинг */
  border: 0; /* Устанавливаем рамку */
  border-radius: 8px; /* Закругление углов рамки */
  transition: background-image 0.5s ease; /* Плавный переход при смене фона */
  overflow: hidden; /* Убираем прокрутку для всего body */
  background-size: cover;
  background-position: center;
`
export const MyForm = styled.form`
  background-color: rgba(190, 181, 181, 0.8); /* Полупрозрачный фон формы */
  padding: 15px; /* Добавьте отступы для формы */
  border-radius: 8px; /* Закругление углов */
  transition: transform 0.1s;
  margin: 0;

  &:hover {
    transform: translateY(-5px); /* Поднимаем карточку вверх при наведении */
  }
  > input {
    margin-top: 4px;
  }
  @media (max-width: 600px) {
    max-width: 90%; /* Уменьшение максимальной ширины на маленьких экранах */
  }
`
export const Title = styled.h2`
margin: 50px;
padding: 50px;
  text-align: center; /* Центрируем текст */
  /* Отступ снизу */
  color: #333; /* Цвет заголовка */
`;
