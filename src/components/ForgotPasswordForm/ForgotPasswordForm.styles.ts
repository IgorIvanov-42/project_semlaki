import styled from "@emotion/styled"
export const Container = styled.div`
  background-size: cover; /* Масштабирует изображение, чтобы оно заполнило контейнер */
  background-position: center; /* Центрирует изображение */
  background-repeat: no-repeat; /* Не повторяет изображение */
  height: 100vh; /* Задает высоту контейнера на весь экран */
  width: 100%;

  background-image: url("/src/assets/3.png");
`
export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`
export const Title = styled.h2`
margin-bottom: 10px;
padding: 40px;
  margin: auto;
  text-align: center;
  margin-bottom: 0px;
`
export const Message = styled.p`
  color: green;
  text-align: center;
  margin-top: 20px;
`
