
export interface ButtonProps {
  type?: "button" | "submit" | "reset"; 

   text?: string; 
    onClick?: () => void; 
    disabled?: boolean;
      variant?: "primary" | "secondary"; 
     children?: React.ReactNode;}
