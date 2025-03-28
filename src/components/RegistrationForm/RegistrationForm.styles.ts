

import styled from "@emotion/styled"
export const Container = styled.div`
flex-direction: column;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #f0f0f0;
  background-image: url("/src/assets/фонРегистр.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 70px;
`
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
  border: 1px solid #ccc;
  border-radius: 12px; 
  background-color: rgba(255, 255, 255, 0.8); 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
  margin: 20px auto;
  max-width: 400px; 
  width: 100%;
  transition: box-shadow 0.3s; 
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
  @media (max-width: 600px) {
    padding: 20px; 
    max-width: 90%; 
  }
` // Заголовок формы

export const Title = styled.h2`
  margin:20px 0;
  padding: 10px;
  text-align: center;
  color: #555;
  font-size: 2rem; 
  font-weight: 600; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
  @media (max-width: 600px) {
    font-size: 1.5rem; /* Меняем размер шрифта на маленьких экранах */
  }
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1.8rem; /* Меняем размер шрифта для средних экранов */
  }
  @media (min-width: 901px) {
    font-size: 2.5rem; /* Меняем размер шрифта для больших экранов */
  }
`

