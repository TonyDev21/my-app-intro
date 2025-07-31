import React, { createContext, useState, type ReactNode } from "react";
import type { ProductCardProps } from "../types/product";

interface CartContextProps{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: ProductCardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);

  return (
    <CartContext.Provider value={{ count, setCount, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
