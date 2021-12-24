import { ListViewType } from '~/utils';

export interface IListContext {
  search: string;
  setSearch(value: string): void;
  listType: ListViewType;
  setListType(value: ListViewType): void;
}
