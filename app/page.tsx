import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="mt-2 text-slate-300 max-w-xl">
          Fast, reliable and affordable tech services across South Africa.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Cellphone Repairs"
            description="Screen replacements, battery issues, charging ports, software fixes and more."
            href="/services/cellphone-repairs"
            image="/services/cellphone-repairs.jpg"
          />

          <ServiceCard
            title="Laptop Repairs"
            description="Hardware repairs, software installation, virus removal, upgrades and more."
            href="/services/laptop-repairs"
            image="/services/laptop-repairs.jpg"
          />

          <ServiceCard
            title="Computer Repairs"
            description="Desktop repairs, hardware upgrades, OS installs, troubleshooting and more."
            href="/services/computer-repairs"
            image="/services/computer-repairs.jpg"
          />

          <ServiceCard
            title="Camera Setup"
            description="CCTV installation, configuration, remote viewing setup and maintenance."
            href="/services/camera-setup"
            image="/services/camera-setup.jpg"
          />

          <ServiceCard
            title="Business Registrations"
            description="CIPC company registration, amendments, tax numbers and compliance."
            href="/services/business-registrations"
            image="/services/business-registrations.jpg"
          />

          <ServiceCard
            title="Graphic Design"
            description="Logos, posters, business cards, flyers, social media designs and more."
            href="/services/graphic-design"
            image="/services/graphic-design.jpg"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">What Our Clients Say</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-300">
              “Fast and reliable service! My phone was fixed the same day.”
            </p>
            <p className="mt-4 text-sm text-emerald-400">— Tshireletso .</p>
          </div>

          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-300">
              “Professional and friendly. They set up my CCTV perfectly.”
            </p>
            <p className="mt-4 text-sm text-emerald-400">— Mr P.</p>
          </div>

          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-300">
              “Great prices and excellent service. Highly recommended.”
            </p>
            <p className="mt-4 text-sm text-emerald-400">— Jason.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="mt-2 text-slate-300 max-w-xl">
          Transparent pricing for common services. Some repairs vary depending on model and parts cost.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* T‑Shirt Sample */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">T‑Shirt Sample</h3>
            <p className="mt-2 text-slate-300">
              We create high‑quality sample prints so you can see the design before printing your own shirts.
            </p>

            <p className="mt-6 text-3xl font-bold text-emerald-400">R60</p>
            <p className="text-sm text-slate-400">per sample</p>

            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Single‑side sample print</li>
              <li>• Perfect for testing designs</li>
              <li>• You can print the final shirts yourself</li>
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Order Sample
            </a>
          </div>

          {/* Business Registration */}
          <div className="rounded border border-emerald-500 bg-slate-900 p-6 shadow-lg shadow-emerald-500/20">
            <h3 className="text-xl font-semibold">Business Registration</h3>
            <p className="mt-2 text-slate-300">CIPC registration and full setup.</p>

            <p className="mt-6 text-3xl font-bold text-emerald-400">R750</p>
            <p className="text-sm text-slate-400">once‑off</p>

            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Company registration</li>
              <li>• Name reservation</li>
              <li>• Tax number setup</li>
              <li>• Compliance documents</li>
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Register Now
            </a>
          </div>

          {/* Software Installation */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">Software Installation</h3>
            <p className="mt-2 text-slate-300">Windows, Office, drivers, utilities and more.</p>

            <p className="mt-6 text-3xl font-bold text-emerald-400">R250</p>
            <p className="text-sm text-slate-400">per device</p>

            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Clean installation</li>
              <li>• Activation included</li>
              <li>• Driver updates</li>
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Book Now
            </a>
          </div>

          {/* Business Logo Design */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">Business Logo Design</h3>
            <p className="mt-2 text-slate-300">
              Custom professional logo design for your brand or business.
            </p>

            <p className="mt-6 text-3xl font-bold text-emerald-400">R300</p>
            <p className="text-sm text-slate-400">per logo</p>

            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• High‑quality custom design</li>
              <li>• Multiple concepts</li>
              <li>• Final files for print & digital use</li>
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Get a Logo
            </a>
          </div>

          {/* Variable Pricing Notice */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-6 sm:col-span-2 lg:col-span-3">
            <h3 className="text-xl font-semibold">Repairs With Variable Pricing</h3>
            <p className="mt-4 text-slate-300">
              Some repairs depend on the device model and the cost of replacement parts.
            </p>

            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Cellphone screen replacements (varies by model)</li>
              <li>• Laptop hardware replacements (keyboards, screens, batteries)</li>
              <li>• Desktop hardware replacements (PSU, motherboard, RAM, SSD)</li>
            </ul>

            <p className="mt-4 text-slate-400 text-sm">
              Example: A phone screen that costs R350 for parts + R150 labour = R500 total.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
            >
              Request a Quote
            </a>
          </div>

        </div>
      </section>
    </>
  );
}