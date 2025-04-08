import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: url("/src/assets/3.png") no-repeat center center/cover;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  overflow: hidden;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`

export const Description = styled.p`
  font-size: 18px;
  color: #333;
`
