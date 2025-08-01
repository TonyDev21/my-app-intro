import React, { createContext, useState, type ReactNode } from "react";
import type { ProductCardProps } from "../types/product";

interface CartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: ProductCardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
  removeFromCart: (id: number) => void; // <--- Nueva función
  incrementItem?: (id: number) => void;
  decrementItem?: (id: number) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  count: 0,
  setCount: () => {},
  cartItems: [],
  setCartItems: () => {},
  removeFromCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  clearCart: () => {}
});

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);

  // Lógica para eliminar un producto del carrito
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
      if (itemToRemove) {
        setCount((prevCount) =>
          Math.max(0, prevCount - (itemToRemove.quantity || 1))
        );
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  // Lógica para aumentar la cantidad de un ítem
  const incrementItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
    setCount((prevCount) => prevCount + 1);
  };

  // Lógica para disminuir la cantidad de un ítem
  const decrementItem = (id: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, (item.quantity || 1) - 1) }
          : item
      );
      // Filtra el array para eliminar items con cantidad 0
      const filteredItems = updatedItems.filter(
        (item) => (item.quantity || 0) > 0
      );
      return filteredItems;
    });
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  //
  const clearCart = () => {
    setCartItems([]);
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{ count, setCount, cartItems, setCartItems, removeFromCart, incrementItem, decrementItem, clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
