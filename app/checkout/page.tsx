"use client";
import { useCart } from "../../components/CartContext";

export default function CheckoutPage() {
  const { cartItems, setCartItems } = useCart();

  const removeItem = (title: string) => {
    setCartItems((prev: any) => prev.filter((item: any) => item.title !== title));
  };

  const updateQty = (title: string, qty: number) => {
    setCartItems((prev: any) =>
      prev.map((item: any) =>
        item.title === title ? { ...item, qty: qty } : item
      )
    );
  };

  // ✅ Subtotal calculation using item.price
  const subtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

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
              className="flex justify-between items-center rounded border border-slate-800 bg-slate-900/60 p-4"
            >
              <div className="flex flex-col">
                <span className="text-slate-200 font-medium">{item.title}</span>
                <span className="text-slate-400 text-sm">
                  R{item.price} × {item.qty} = R{item.price * item.qty}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQty(item.title, parseInt(e.target.value))}
                  className="w-16 rounded border border-slate-700 bg-slate-800 text-slate-200 px-2 py-1 text-sm"
                />
                <button
                  onClick={() => removeItem(item.title)}
                  className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Subtotal display */}
          <div className="flex justify-between items-center border-t border-slate-700 pt-4 mt-6">
            <span className="text-lg font-semibold text-slate-200">Subtotal</span>
            <span className="text-lg font-bold text-emerald-400">R{subtotal}</span>
          </div>

          <button className="mt-6 w-full rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-600 transition">
            Proceed to Payment
          </button>
        </div>
      )}
    </section>
  );
}