export type Highlight = {
  title: string;
  text: string;
};

export type SectionPageData = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  highlights: Highlight[];
  ctaLabel: string;
  ctaHref: string;
};