export interface IBasketIcon {
  route: string;
}

export interface IBasketIconLayout extends IBasketIcon {
  count: number;
  total: number;
  goToBasket(): void;
}
