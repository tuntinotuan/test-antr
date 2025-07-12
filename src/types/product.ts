type KindOfProduct = "course" | "curriculum" | "documentation";
export type Id = string | number;

export type ProductTypes = {
  id: Id;
  kind: KindOfProduct;
  name: string;
  price: number;
  des: string;
  image: string;
  liked: boolean;
};
