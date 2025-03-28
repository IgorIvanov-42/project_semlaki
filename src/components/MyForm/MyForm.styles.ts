import styled from "@emotion/styled"
export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #f0f0f0;
  background-image: url("/src/assets/маякФонЛогин.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 900px) {
    padding: 0;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: (255, 255, 255, 0.8); /* Полупрозрачный белый фон */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Более заметная тень */

  margin: 20px auto;
  transition: box-shadow 0.3s; /* Плавный переход для тени */
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Увеличение тени при наведении */
  }
  @media (max-width: 600px) {
    max-width: 90%; /* Уменьшение максимальной ширины на маленьких экранах */
  }
  > input {
    margin-top: 8px;
    width: 100%;
  }
`
export const Title = styled.h2`
  margin: 0 0 20px;
  padding: 10px;
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.5rem; /* Меняем размер шрифта на маленьких экранах */
  }
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 2rem; /* Меняем размер шрифта для средних экранов */
  }
  @media (min-width: 901px) {
    font-size: 2.5rem; /* Меняем размер шрифта для больших экранов */
  }
`
