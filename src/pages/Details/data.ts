import { IProduct } from '~/utils';

export interface IDetails {}

export interface IDetailsLayout extends IDetails {
  item: IProduct;
}
