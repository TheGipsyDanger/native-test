import { IProduct, IBasketProduct } from '~/utils';

export interface IBasketContext {
  basket: IBasketProduct[];
  setBasket(products: IBasketProduct[]): void;
}
