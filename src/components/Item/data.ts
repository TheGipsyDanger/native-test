import { IProduct, withChildren } from '~/utils';
export interface IItem {
  item: IProduct;
  type: 'grid' | 'list';
  addItemOnBasket(product: IProduct): void;
}

export interface IItemLayout extends IItem {}

export interface IItemButton extends withChildren {
  title: String;
}
