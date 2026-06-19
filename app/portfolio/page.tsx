import Image from "next/image";

const projects = [
  {
    title: "Cellphone Repairs",
    image: "/portfolio/cellphone-repairs.jpg",
  },
  {
    title: "Laptop Repairs",
    image: "/portfolio/laptop-repairs.jpg",
  },
  {
    title: "Computer Repairs",
    image: "/portfolio/computer-repairs.jpg",
  },
  {
    title: "Camera Setup",
    image: "/portfolio/camera-setup.jpg",
  },
  {
    title: "Business Registrations",
    image: "/portfolio/business-registrations.jpg",
  },
  {
    title: "Graphic Design",
    image: "/portfolio/graphic-design.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Portfolio</h1>
      <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
        A showcase of our recent work — repairs, installations, designs, and
        business services delivered across South Africa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}