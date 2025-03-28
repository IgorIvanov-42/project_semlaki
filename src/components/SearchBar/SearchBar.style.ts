import styled from "@emotion/styled"

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px; 
`;

export const SearchInput = styled.input`
  padding: 12px;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 350px;
  background: rgba(255, 255, 255, 0.6); 
`;

export const SearchButton = styled.button`
  padding: 12px;
  font-size: 18px;
  margin-left: 10px;
  border: none;
  background-color: rgb(120, 120, 0);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: rgb(90, 90, 0);
  }
`
