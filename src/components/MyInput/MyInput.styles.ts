import styled from "@emotion/styled"
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px; /* Добавляем отступ между полями ввода */
`
export const InputField = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff; /* Цвет границы при фокусе */
    outline: none; /* Убираем обводку */
  }
`
