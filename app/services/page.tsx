import { ServiceCard } from "../../components/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Our Services</h1>
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
  );
}