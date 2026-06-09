export default function LaptopRepairsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Laptop Repairs</h1>
      <p className="mt-2 text-slate-300">
        Professional laptop repairs for all brands and models.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• Hardware repairs</li>
        <li>• Software installation</li>
        <li>• Virus removal</li>
        <li>• RAM & SSD upgrades</li>
        <li>• Overheating fixes</li>
        <li>• Keyboard & trackpad repairs</li>
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