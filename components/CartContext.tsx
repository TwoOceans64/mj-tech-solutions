"use client";
import { createContext, useContext, useState } from "react";

type CartItem = {
  title: string;
  qty: number;
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (title: string, qty: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (title: string, qty: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === title);
      if (existing) {
        return prev.map((item) =>
          item.title === title ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { title, qty }];
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}