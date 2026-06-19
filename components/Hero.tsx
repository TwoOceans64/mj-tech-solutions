import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-slate-800 bg-linear-to-b from-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
            MJ Tech Solutions
          </p>

          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Fast, reliable tech solutions for your devices and your business.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300">
            We specialise in cellphone & laptop repairs, computer repairs, software installation,
            camera setups, business registrations and graphic design.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Get a quote
            </Link>

            <a
              href="https://wa.me/27640775100"
              className="rounded border border-slate-600 px-4 py-2 text-sm"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}