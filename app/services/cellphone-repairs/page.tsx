export default function CellphoneRepairsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Cellphone Repairs</h1>
      <p className="mt-2 text-slate-300">
        Fast and affordable cellphone repairs for all major brands.
      </p>

      <h2 className="mt-8 text-xl font-semibold">What We Fix</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• Screen replacements</li>
        <li>• Battery replacements</li>
        <li>• Charging port repairs</li>
        <li>• Software issues</li>
        <li>• Camera repairs</li>
        <li>• Speaker & microphone issues</li>
      </ul>

      <a
        href="/contact"
        className="mt-10 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
      >
        Contact Us
      </a>
    </section>
  );
}