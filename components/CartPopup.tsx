"use client";
import { useCart } from "./CartContext";

export default function CartPopup() {
  const { popupMessage } = useCart();
  if (!popupMessage) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg animate-slide-in">
      {popupMessage}
    </div>
  );
}