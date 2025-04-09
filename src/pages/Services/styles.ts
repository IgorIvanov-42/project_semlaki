import styled from "@emotion/styled"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: url("/src/assets/3.png") no-repeat center center/cover;

  min-height: 100vh;
  padding-top: 100px; /* отступ от фиксированного хедера */
  padding-bottom: 80px; /* отступ от футера */
  box-sizing: border-box;
`
