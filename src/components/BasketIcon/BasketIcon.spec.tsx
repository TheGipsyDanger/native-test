import * as React from 'react';
import { BasketIcon } from './';
import { render, fireEvent } from '@testing-library/react-native';
import { mockBasket } from '~/utils';

const mockFN = jest.fn();

jest.mock('../../context/Basket', () => {
  return {
    useBasket: () => ({
      basket: mockBasket,
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockFN,
    }),
  };
});

describe('Render BasketIcon', () => {
  it('Should be BasketIcon exist', () => {
    const { getByTestId } = render(<BasketIcon route={'Home'} />);
    const currentElement = getByTestId(`BasketIcon`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be Render a basket count', () => {
    const { getByTestId } = render(<BasketIcon route={'Home'} />);
    const currentElement = getByTestId(`BasketIcon`);
    expect(currentElement).toBeTruthy();

    const textCurrentElement = getByTestId(`BasketIconText`);
    expect(textCurrentElement).toBeTruthy();
    expect(textCurrentElement.props.children).toBe(7);
  });
  it('Validate press', () => {
    const { getByTestId } = render(<BasketIcon route={'Home'} />);
    const currentElement = getByTestId('BasketIconPress');
    fireEvent.press(currentElement);
    expect(mockFN).toBeCalled();
  });
  it('Should be Render a basket total', () => {
    const { getByTestId } = render(<BasketIcon route={'Basket'} />);
    const currentElement = getByTestId(`BasketIcon`);
    expect(currentElement).toBeTruthy();

    const textCurrentElement = getByTestId(`BasketIconText`);
    expect(textCurrentElement).toBeTruthy();
    expect(textCurrentElement.props.children).toBe('R$331.40');
  });
});
