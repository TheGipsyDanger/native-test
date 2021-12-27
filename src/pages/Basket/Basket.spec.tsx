import * as React from 'react';
import { Basket } from './';
import { render, fireEvent } from '@testing-library/react-native';
import { mockBasket } from '~/utils';

const mockFN = jest.fn();

jest.mock('../../context/Basket', () => {
  return {
    useBasket: () => ({
      basket: mockBasket,
      removeItem: mockFN,
    }),
  };
});

describe('Render Basket', () => {
  it('Should be Basket exist', () => {
    const { getByTestId } = render(<Basket />);
    const currentElement = getByTestId(`Basket`);
    expect(currentElement).toBeTruthy();
  });
  it('Validate List length', () => {
    const { getAllByTestId } = render(<Basket />);
    const listElements = getAllByTestId('BasketItem');
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(2);
  });
  it('Validate item infos', () => {
    const { getAllByTestId } = render(<Basket />);
    const titleListElements = getAllByTestId('BasketItemTitle');
    expect(titleListElements).toHaveLength(2);

    expect(titleListElements[0].props).toBeTruthy();
    expect(titleListElements[0].props.children).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(titleListElements[1].props).toBeTruthy();
    expect(titleListElements[1].props.children).toBe(
      'Mens Casual Premium Slim Fit T-Shirts '
    );

    const qtdListElements = getAllByTestId('BasketItemQtd');
    expect(qtdListElements).toHaveLength(2);

    expect(qtdListElements[0].props).toBeTruthy();
    expect(qtdListElements[0].props.children).toBe('Qtd: 2');

    expect(qtdListElements[1].props).toBeTruthy();
    expect(qtdListElements[1].props.children).toBe('Qtd: 5');

    const priceListElements = getAllByTestId('BasketItemPrice');
    expect(priceListElements).toHaveLength(2);

    expect(priceListElements[0].props).toBeTruthy();
    expect(priceListElements[0].props.children).toBe('R$219.90');

    expect(priceListElements[1].props).toBeTruthy();
    expect(priceListElements[1].props.children).toBe('R$111.50');
  });

  it('Validate press', () => {
    const { getAllByTestId } = render(<Basket />);
    const listElements = getAllByTestId('Button');
    fireEvent.press(listElements[0]);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith(mockBasket[0]);
  });
});
