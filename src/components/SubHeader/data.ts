import { ListViewType } from '~/utils';

export interface ISubHeader {}

export interface ISubHeaderLayout extends ISubHeader {
  search: string;
  onChange(value: string): void;
  listType: ListViewType;
  setListType(value: ListViewType): void;
}
