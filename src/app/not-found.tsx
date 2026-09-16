import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-brand-surface px-6 text-center text-brand-dark">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
          404
        </p>
        <h1 className="mt-4 text-5xl font-bold">Página não encontrada</h1>
        <p className="mt-5 text-brand-text">
          O endereço acessado não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-brand-primary px-6 py-4 font-bold text-white"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
