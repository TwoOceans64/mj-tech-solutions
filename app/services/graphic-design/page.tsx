export default function GraphicDesignPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Graphic Design</h1>
      <p className="mt-2 text-slate-300">
        Professional designs for your brand, business, and marketing.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Design Services</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• Logo design</li>
        <li>• Posters & flyers</li>
        <li>• Business cards</li>
        <li>• Social media graphics</li>
        <li>• Branding kits</li>
        <li>• Custom artwork</li>
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