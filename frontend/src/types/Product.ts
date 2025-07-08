export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: { [color: string]: string }; // Example: { "Yellow Gold": "https://..." }
  price: number;
  popularityOutOf5: number;
}
