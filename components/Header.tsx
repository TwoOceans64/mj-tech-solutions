"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-emerald-400">
          MJ Tech Solutions
        </Link>

        <nav className="flex gap-6 text-sm items-center">
          <Link href="/" className="hover:text-emerald-400">
            Home
          </Link>
          <Link href="/services" className="hover:text-emerald-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-emerald-400">
            Contact
          </Link>
          <Link href="/checkout" className="relative hover:text-emerald-400">
            🛒 View Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-emerald-500 text-slate-950 text-xs font-bold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}