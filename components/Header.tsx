import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-emerald-400">
          MJ Tech Solutions
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-emerald-400">
            Home
          </Link>
          <Link href="/services" className="hover:text-emerald-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-emerald-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}