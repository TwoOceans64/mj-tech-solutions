import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* AI Background Wrapper */}
      <div className="ai-bg">
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
              image="/portfolio/cellphone-repairs.jpg"
            />
            <ServiceCard
              title="Laptop Repairs"
              description="Hardware repairs, software installation, virus removal, upgrades and more."
              href="/services/laptop-repairs"
              image="/portfolio/laptop-repairs.jpg"
            />
            <ServiceCard
              title="Computer Repairs"
              description="Desktop repairs, hardware upgrades, OS installs, troubleshooting and more."
              href="/services/computer-repairs"
              image="/portfolio/computer-repairs.jpg"
            />
            <ServiceCard
              title="Camera Setup"
              description="CCTV installation, configuration, remote viewing setup and maintenance."
              href="/services/camera-setup"
              image="/portfolio/camera-setup.jpg"
            />
            <ServiceCard
              title="Business Registrations"
              description="CIPC company registration, amendments, tax numbers and compliance."
              href="/services/business-registrations"
              image="/portfolio/business-registrations.jpg"
            />
            <ServiceCard
              title="Graphic Design"
              description="Logos, posters, business cards, flyers, social media designs and more."
              href="/services/graphic-design"
              image="/portfolio/graphic-design.jpg"
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
              <p className="mt-4 text-sm text-emerald-400">— Tshireletso.</p>
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
            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">T‑Shirt Printing</h3>
              <p className="mt-2 text-slate-300">R60 per shirt</p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">Business Registration</h3>
              <p className="mt-2 text-slate-300">R750</p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">Software Installation</h3>
              <p className="mt-2 text-slate-300">R250</p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">Business Logo Design</h3>
              <p className="mt-2 text-slate-300">R300</p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">Example Repair</h3>
              <p className="mt-2 text-slate-300">R550 parts + R150 labour = R700 total</p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">Variable Repairs</h3>
              <p className="mt-2 text-slate-300">Price depends on model and parts</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}