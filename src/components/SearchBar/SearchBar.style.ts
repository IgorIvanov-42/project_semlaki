import styled from "@emotion/styled"

interface ButtonProps {  variant?: "primary" | "danger"; 
  
   disabled?: boolean  ; 
  }

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

export const SearchButton = styled.button<ButtonProps>`
  padding: 12px;
  font-size: 18px;
  margin-left: 10px;
  border: none;
 // background: linear-gradient(135deg, #f9efef 0%, #e1b0b0 100%);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  background-color: ${props => 
     props.disabled   
        ? "#ccc" /* Серый фон для отключенной кнопки */  
      : props.variant === "primary"      ? "linear-gradient(135deg, #f9efef 0%, #e1b0b0 100%)" /* Градиент для основной кнопки */      : "linear-gradient(135deg, #dbd9d8 0%, #b0a8a8 100%)"}; /* Градиент для кнопки "danger" */  /* Цвет текста в зависимости от состояния кнопки */  color: ${props =>    props.disabled      ? "rgb(215, 203, 203)"      : "black"};



  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #a9a9a9 0%, #f9efef 100%);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`
