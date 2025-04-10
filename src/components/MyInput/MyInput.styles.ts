import styled from "@emotion/styled"

export const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 15px;
  position: relative;
  padding: 0;
`

export const InputField = styled.input`
  width: 100%;
  padding: 7px 40px 7px 7px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 40px;
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
  height: auto;
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
export const PasswordToggleButton = styled.button`
  position: absolute; /* Абсолютное позиционирование */
  right: 10px; /* Отступ от правого края */
  top: 50%; /* Центрируем по вертикали */
  transform: translateY(-50%); /* Корректируем положение по вертикали */
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: gray; /* Измените цвет при наведении */
  }
  &:focus {
    outline: none; /* Убираем обводку при фокусе */
  }
`
export const ErrorMessage = styled.span`
  color: red; /* Цвет текста ошибки */
`
