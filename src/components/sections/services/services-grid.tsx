import ServiceCard from "./service-card";

type Service = { slug: string; name: string; summary: string };

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.slug} {...service} />
      ))}
    </div>
  );
}
