"use client";
import { useCart } from "../../components/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-slate-300">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between rounded border border-slate-800 bg-slate-900/60 p-4"
            >
              <span className="text-slate-200">{item.title}</span>
              <span className="text-slate-300">Qty: {item.qty}</span>
            </div>
          ))}

          <button className="mt-6 w-full rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-600 transition">
            Proceed to Payment
          </button>
        </div>
      )}
    </section>
  );
}