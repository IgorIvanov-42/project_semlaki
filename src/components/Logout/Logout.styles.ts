import styled from "@emotion/styled"
export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  width: 25px; 
 height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  > img {
    width: 100%;
    height: auto;
  }

`


