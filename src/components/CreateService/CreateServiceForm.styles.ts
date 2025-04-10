import styled from "@emotion/styled"

export const Card = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px;
  margin: 10px auto;

 
`
export const CardTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
`
export const CardText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  //margin-bottom: 10px;
  //font-size: 16px;
  //color: #555;
`
