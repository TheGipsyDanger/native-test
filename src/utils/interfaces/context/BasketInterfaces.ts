import { IProduct } from '~/utils';

export interface IBasketContext {
  basket: IProduct[];
  setBasket(products: IProduct[]): void;
}
