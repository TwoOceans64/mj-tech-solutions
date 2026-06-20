"use client";
import { createContext, useContext, useState } from "react";

type CartItem = {
  title: string;
  qty: number;
  price: number; // ✅ each item carries its own price
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (title: string, qty: number, price: number) => void; // ✅ now accepts price
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  popupMessage: string | null;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const addToCart = (title: string, qty: number, price: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === title);
      if (existing) {
        return prev.map((item) =>
          item.title === title
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { title, qty, price }];
    });

    // ✅ Show popup message like Takealot
    setPopupMessage(`${title} (x${qty}) added to cart`);
    setTimeout(() => setPopupMessage(null), 3000); // auto-hide after 3 seconds
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, setCartItems, popupMessage }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}