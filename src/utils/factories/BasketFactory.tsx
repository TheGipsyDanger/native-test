import { IBasketProduct, IProduct } from '~/utils';

interface IBasketFactory {
  addItem(products: IBasketProduct[], product: IProduct): IBasketProduct[];
}

export function createBasketFactory(): IBasketFactory {
  function addItem(
    products: IBasketProduct[],
    product: IProduct
  ): IBasketProduct[] {
    const isAlreadyInBasket = checkIsProductExistInBasket(products, product);

    const productToUse = isAlreadyInBasket
      ? getProductInBasket(products, product)
      : product;

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

  function checkIsProductExistInBasket(
    products: IBasketProduct[],
    product: IProduct
  ): boolean {
    const termToSearch = product.title;
    return products.some(product => product.title === termToSearch);
  }

  function getProductInBasket(
    products: IBasketProduct[],
    product: IProduct
  ): IBasketProduct {
    const termToSearch = product.title;
    const productOnBasket = products.find(
      product => product.title === termToSearch
    );
    return productOnBasket ? productOnBasket : ({} as IBasketProduct);
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
  };
}
