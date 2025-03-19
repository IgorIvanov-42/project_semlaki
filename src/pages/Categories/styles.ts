import styled from "@emotion/styled"

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/src/assets/MG.JPG") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: white;
`

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
`

export const CategoryCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: black;
  height: 350px;

  img {
    width: 200px;
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
