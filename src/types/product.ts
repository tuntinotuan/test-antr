type KindOfProduct = "course" | "curriculum" | "documentation";

export type ProductTypes = {
  kind: KindOfProduct;
  name: string;
  price: number;
  des: string;
  image: string;
}[];
