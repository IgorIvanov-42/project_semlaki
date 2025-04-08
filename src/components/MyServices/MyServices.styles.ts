import styled from "@emotion/styled"
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Позволяет элементам переходить на новую строку */
  justify-content: flex-start; /* Выравнивание карточек по левому краю */
  gap: 20px; /* Отступ между карточками */
  margin: 0 auto; /* Центрирование контейнера */
`
export const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f0f0f0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 70px;
  background-image: url("/src/assets/3.png");
  background-size: cover;
  background-repeat: no-repeat;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 40px;
  max-width: 500px;
  border-radius: 12px;
`
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #222;
`
export const ServiceCard = styled.div`
  width: calc(25% - 25px); /* 4 карточки в строке с учетом отступов */
  min-width: 200px; /* Минимальная ширина для маленьких экранов */
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
  img {
    max-width: 100%; /* Ограничение ширины изображения */
    height: auto; /* Автоматическое изменение высоты */
    border-radius: 4px; /* Скругление углов изображения */
  }
`

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
`
export const CardText = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
`
