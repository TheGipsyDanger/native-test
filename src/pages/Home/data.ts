import { IProduct, ListViewType, IBasketProduct } from '~/utils';

export interface IHome {}

export interface IHomeLayout extends IHome {
  products: IProduct[];
  listType: ListViewType;
  addItemOnBasket(product: IProduct): void;
  openDetails(item: IProduct): void;
}
