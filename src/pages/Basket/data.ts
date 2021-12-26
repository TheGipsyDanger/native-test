import { IBasketProduct } from '~/utils';

export interface IBasket {}

export interface IBasketLayout extends IBasket {
  basket: IBasketProduct[];
  removeItem(product: IBasketProduct): void;
}
export interface IBasketItem extends Pick<IBasketLayout, 'removeItem'> {
  item: IBasketProduct;
  removeItem(product: IBasketProduct): void;
}
