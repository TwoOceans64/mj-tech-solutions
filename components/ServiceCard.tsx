import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function ServiceCard({ title, description, href, image }: Props) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-emerald-500"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-40 w-full object-cover"
      />

      <div className="p-4 text-sm">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-slate-300">{description}</p>
        <span className="mt-4 inline-block text-xs text-emerald-400">
          View details →
        </span>
      </div>
    </Link>
  );
}