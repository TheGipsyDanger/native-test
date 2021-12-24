import { IProduct, withChildren } from '~/utils';
export interface IItem extends IProduct {
  type: 'grid' | 'list';
}

export interface IItemLayout extends IItem {}

export interface IItemButton extends withChildren {
  title: String;
}
