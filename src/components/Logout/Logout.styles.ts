import styled from "@emotion/styled"
export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  width: 60px; 
 height: 60px;
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


