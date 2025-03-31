import styled from "@emotion/styled"

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("/src/assets/8.jpg") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  color: white;
`
export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Гарантированно 4 колонки */
  gap: 20px;
  max-width: 1300px; /* Ограничение ширины */
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* При уменьшении экрана 2 карточки в ряд */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); /* На маленьких экранах одна карточка в ряд */
  }
`;

export const CategoryCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: black;
  height: 350px;
  //width: 320px;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`
