import * as React from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';
import {
  IProduct,
  IBasketProduct,
  IBasketContext,
  createBasketFactory,
} from '~/utils';

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

export const BasketProvider: React.FC = ({ children }) => {
  const Basket = createBasketFactory();

  const [basket, setBasket] = useState<IBasketProduct[]>(
    [] as IBasketProduct[]
  );

  function addItem(product: IProduct) {
    const basketValues = Basket.addItem(basket, product);
    setBasket(basketValues);
  }

  function removeItem(product: IBasketProduct) {
    const basketValues = Basket.removeItem(basket, product);
    setBasket(basketValues);
  }

  return (
    <BasketContext.Provider value={{ basket, setBasket, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export function useBasket(): IBasketContext {
  return useContext(BasketContext);
}
