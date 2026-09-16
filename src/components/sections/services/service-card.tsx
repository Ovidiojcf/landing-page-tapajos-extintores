import Link from "next/link";

type ServiceCardProps = { slug: string; name: string; summary: string };

export default function ServiceCard({ slug, name, summary }: ServiceCardProps) {
  return (
    <Link
      href={`/servicos/${slug}`}
      className="block border border-brand-border/40 bg-brand-surface p-7 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
    >
      <h2 className="text-xl font-bold text-brand-primary">{name}</h2>
      <p className="mt-3 leading-7 text-brand-text">{summary}</p>
      <span className="mt-6 inline-block text-sm font-bold text-brand-dark">
        Conheça o serviço →
      </span>
    </Link>
  );
}
