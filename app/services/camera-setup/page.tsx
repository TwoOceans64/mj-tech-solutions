export default function CameraSetupPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Camera Setup & CCTV Installation</h1>
      <p className="mt-2 text-slate-300">
        Secure your home or business with professional CCTV installation.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Our Services</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li>• CCTV installation</li>
        <li>• Remote viewing setup</li>
        <li>• Camera configuration</li>
        <li>• System maintenance</li>
        <li>• Network setup</li>
        <li>• DVR/NVR installation</li>
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