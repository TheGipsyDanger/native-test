export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: IRating;
}

export interface IRating {
  count: number;
  rate: number;
}
