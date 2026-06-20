"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-red-500">404 - Page Not Found</h2>
      <p className="mt-4 text-slate-300">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-600 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}