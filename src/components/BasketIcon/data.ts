export interface IBasketIcon {}

export interface IBasketIconLayout extends IBasketIcon {
  count: number;
  goToBasket(): void;
}
