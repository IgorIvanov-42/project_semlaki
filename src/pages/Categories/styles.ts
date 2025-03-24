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
  grid-template-columns: repeat(4, 320px);
  gap: 20px;
  max-width: calc(4 * 320px + 3 * 20px);
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`

export const CategoryCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: black;
  height: 350px;
  width: 320px;
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
