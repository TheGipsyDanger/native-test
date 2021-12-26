import { IProduct, ListViewType, IBasketProduct } from '~/utils';

export interface IHome {}

export interface IHomeLayout extends IHome {
  products: IProduct[];
  listType: ListViewType;
  addItem(product: IProduct): void;
  openDetails(item: IProduct): void;
}
