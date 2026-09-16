import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & { href: string };

export default function Button({ className = "", ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex bg-brand-primary px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary ${className}`}
      {...props}
    />
  );
}
