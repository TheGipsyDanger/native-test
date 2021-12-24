import { IProduct } from '~/utils';

export interface IItemContext {
  selected: IProduct;
  setSelected(value: IProduct): void;
}
