export default function ComputerRepairsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Computer Repairs</h1>
      <p className="mt-2 text-slate-300">
        Reliable desktop computer repairs for home and business users.
      </p>

      <h2 className="mt-8 text-xl font-semibold">We Handle</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• Hardware diagnostics</li>
        <li>• Operating system installation</li>
        <li>• Performance optimization</li>
        <li>• Power supply issues</li>
        <li>• Motherboard repairs</li>
        <li>• Data recovery</li>
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