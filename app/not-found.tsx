"use client";

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold text-red-500">404 - Page Not Found</h2>
      <p className="mt-4 text-slate-300">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
    </section>
  );
}