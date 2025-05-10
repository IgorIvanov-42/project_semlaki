import styled from "@emotion/styled"

export const PageBackground = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #f0f0f0;
  background-image: url("/src/assets/3.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 70px;
`

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: "Raleway", sans-serif;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`
export const Title = styled.h1`
  margin: 0 0 20px;
  padding: 10px;
  text-align: center;
  color: #555;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`
export const StyledParagraph = styled.p`
  margin: 0 0 20px;
  padding: 10px;
  text-align: left;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`
