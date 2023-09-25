export interface IService {
  title: string;
  slug: string;
  description: string;
  images?: string[];
  price?: number;
  inStock: number;
  isVisible: boolean;
  lang: 'es' | 'en';
}
