import * as React from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';
import { IItemContext, IProduct } from '~/utils';

export const ItemContext = createContext<IItemContext>({} as IItemContext);

export const ItemProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState<IProduct>({} as IProduct);

  return (
    <ItemContext.Provider value={{ selected, setSelected }}>
      {children}
    </ItemContext.Provider>
  );
};

export function useItem(): IItemContext {
  return useContext(ItemContext);
}
