import * as React from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';
import { IListContext, ListViewType } from '~/utils';

export const ListContext = createContext<IListContext>({} as IListContext);

export const ListProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');
  const [listType, setListType] = useState<ListViewType>('grid');

  return (
    <ListContext.Provider
      value={{
        search,
        listType,
        setSearch,
        setListType,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export function useList(): IListContext {
  return useContext(ListContext);
}
