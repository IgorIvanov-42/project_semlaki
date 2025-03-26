import styled from "@emotion/styled"

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //height: 100%;
  min-height: 100vh;
  width: 100vw;
  background-image: url("/src/assets/leuchtturm.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 80%;
  max-width: 1200px;
  padding-bottom: 20px
`
export const DescriptionText = styled.p`
  text-align: center;
  font-size: 30px;
  color: black;
  //background: rgba(222, 216, 216, 0.6);
  padding: 15px;
  border-radius: 8px;
  margin: 30px 0 20px;
  width: 100%;
  max-width: 1000px;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100%;
  //margin-bottom: 40px;
`
