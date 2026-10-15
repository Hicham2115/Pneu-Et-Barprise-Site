export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  image: string;
  alt: string;
  description: string;
};

export const catalogCategories = ["Pneus", "Barres de toit", "Accessoires auto"];

export const catalogProducts: Product[] = [
  {
    id: "pneu-ete-205-55-r16",
    name: "Pneu été 205/55 R16",
    category: "Pneus",
    price: 890,
    inStock: true,
    image: "/products/tire.svg",
    alt: "Pneu été noir, vue de trois quarts",
    description: "Un pneu polyvalent pour vos trajets du quotidien.",
  },
  {
    id: "pneu-4-saisons-195-65-r15",
    name: "Pneu 4 saisons 195/65 R15",
    category: "Pneus",
    price: 820,
    inStock: true,
    image: "/products/tire.svg",
    alt: "Pneu toutes saisons noir, vue de trois quarts",
    description: "Une adhérence équilibrée tout au long de l’année.",
  },
  {
    id: "barres-de-toit-universelles",
    name: "Barres de toit universelles",
    category: "Barres de toit",
    price: 1490,
    inStock: true,
    image: "/products/roof-bars.svg",
    alt: "Paire de barres de toit noires",
    description: "Une solution pratique pour transporter vos équipements.",
  },
  {
    id: "kit-entretien-auto",
    name: "Kit d’entretien auto",
    category: "Accessoires auto",
    price: 290,
    inStock: true,
    image: "/products/car-care.svg",
    alt: "Kit d’entretien auto avec accessoires",
    description: "Les essentiels pour garder votre voiture propre.",
  },
];
