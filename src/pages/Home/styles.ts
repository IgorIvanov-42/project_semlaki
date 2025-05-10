import styled from "@emotion/styled"

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //height: 100%;
  width: 100%; 
  min-height: 100vh;
  
  background-image: url("/src/assets/3.png");
  background-size: cover ;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 80%;
  max-width: 1200px;
  padding-bottom: 20px;
`
export const DescriptionText = styled.p`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 20px 0 10px 0px;

  // text-align: center;
  //font-size: 30px;
  //color: black;
  //background: rgba(222, 216, 216, 0.6);
  //padding: 15px;
  //border-radius: 8px;
  //margin: 30px 0 20px;
  //width: 100%;
  //max-width: 1000px;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100%;
  //margin-bottom: 40px;
`
export const SearchResultsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  max-width: 100%;
`
export const SectionTitle = styled.h3`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  color: #555;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 20px 0 10px 0px;

  // font-size: 22px;
  // color: black;
  //text-align: center;
  //margin-top: 40px;
`
