import styled from "@emotion/styled"
export const InputContainer = styled.div`
 width: 100%;
  max-width: 600px;
  margin-bottom: 15px;

`

export const InputField = styled.input`
 width: 100%;

padding: 7px;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
background-color: white;
  transition:
    border-color 0.3s,
    background-color 0.3s;
  font-family: Arial, sans-serif;
  &:focus {
    border-color: #ccc;
    outline: none;
    background-color: #e0e0e0;
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 100px; 
  max-height: 150px;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition:
    border-color 0.3s,
    background-color 0.3s;
  font-family: Arial, sans-serif;
  &:focus {
    border-color: #ccc;
    outline: none;
    background-color: #e0e0e0;
  }
`