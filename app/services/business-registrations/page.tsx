export default function BusinessRegistrationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Business Registrations</h1>
      <p className="mt-2 text-slate-300">
        Fast and affordable CIPC business registration services.
      </p>

      <h2 className="mt-8 text-xl font-semibold">We Assist With</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• Company registration (PTY LTD)</li>
        <li>• Name reservations</li>
        <li>• Tax number registration</li>
        <li>• Director amendments</li>
        <li>• Annual returns</li>
        <li>• Compliance documents</li>
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