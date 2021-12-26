import { IBasketProduct, IProduct } from '~/utils';

interface IBasketFactory {
  addItem(products: IBasketProduct[], product: IProduct): IBasketProduct[];
  removeItem(products: IBasketProduct[], product: IProduct): IBasketProduct[];
}

export function createBasketFactory(): IBasketFactory {
  function addItem(
    products: IBasketProduct[],
    product: IProduct
  ): IBasketProduct[] {
    const isAlreadyInBasket = checkIsProductExistInBasket(products, product);

    return isAlreadyInBasket
      ? updateProductQtd(products, product)
      : [
          ...products,
          {
            ...product,
            qtd: 1,
          },
        ];
  }
  function removeItem(
    products: IBasketProduct[],
    productToRemove: IProduct
  ): IBasketProduct[] {
    return products.filter(product => product.title !== productToRemove.title);
  }

  function checkIsProductExistInBasket(
    products: IBasketProduct[],
    product: IProduct
  ): boolean {
    const termToSearch = product.title;
    return products.some(product => product.title === termToSearch);
  }

  function updateProductQtd(
    products: IBasketProduct[],
    productToUpdate: IProduct
  ): IBasketProduct[] {
    return products.map(product => ({
      ...product,
      qtd:
        productToUpdate.title === product.title
          ? (product.qtd += 1)
          : product.qtd,
    }));
  }

  return {
    addItem,
    removeItem,
  };
}
