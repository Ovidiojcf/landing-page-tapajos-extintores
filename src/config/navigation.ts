export const navigation = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/qualidade", label: "Qualidade" },
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
] as const;

export type NavigationItem = (typeof navigation)[number];