import Link from "next/link";

export default function WhatsAppCta() {
  return (
    <Link
      href="/contato"
      className="inline-flex bg-brand-primary px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
    >
      Fale com nossa equipe
    </Link>
  );
}
