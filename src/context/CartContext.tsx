import React, { createContext, useState, type ReactNode } from "react";
import type { ProductCardProps } from "../types/product";

interface CartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: ProductCardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
  removeFromCart: (id: number) => void; // <--- Nueva función
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);

  // Nueva función para eliminar item por id
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <CartContext.Provider
      value={{ count, setCount, cartItems, setCartItems, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
