import type { ReactNode } from "react";

interface ButtonChildrenProps {
    children: ReactNode;
    handleClick: () => void;

}

const ButtonChildren = ({children,handleClick}:ButtonChildrenProps) => {
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default ButtonChildren
