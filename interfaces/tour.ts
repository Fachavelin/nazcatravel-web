export interface ITour {
  title: string;
  slug: string;
  shortDescription: string;
  body?: string;
  images?: string[];
  price?: number;
  inStock?: number;
  isVisible?: boolean;
  lang: 'es' | 'en';
}
