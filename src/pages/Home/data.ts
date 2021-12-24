import { IProduct, ListViewType } from '~/utils';

export interface IHome {}

export interface IHomeLayout extends IHome {
  products: IProduct[];
  listType: ListViewType;
}
