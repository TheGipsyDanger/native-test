import * as React from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';
import { IBasketContext, IProduct } from '~/utils';

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<IProduct[]>([] as IProduct[]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export function useBasket(): IBasketContext {
  return useContext(BasketContext);
}
