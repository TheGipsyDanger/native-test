import * as React from 'react';
import { Details } from './';
import { render, fireEvent } from '@testing-library/react-native';
import { mockProducts } from '~/utils';

const mockFN = jest.fn();

jest.mock('../../context/Basket', () => {
  return {
    useBasket: () => ({
      addItem: mockFN,
    }),
  };
});

jest.mock('../../context/Item', () => {
  return {
    useItem: () => ({
      selected: mockProducts[0],
    }),
  };
});

describe('Render Details', () => {
  it('Should be Details exist', () => {
    const { getByTestId } = render(<Details />);
    const currentElement = getByTestId(`Details`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be Render a correct infos', () => {
    const { getByTestId } = render(<Details />);
    const currentElement = getByTestId(`Details`);
    const titleElement = getByTestId(`DetailsTitle`);
    const descriptionElement = getByTestId(`DetailsDescription`);
    const priceElement = getByTestId(`DetailsPrice`);

    expect(currentElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(priceElement).toBeTruthy();

    expect(titleElement.props.children).toBe(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(descriptionElement.props.children).toBe(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    );
    expect(priceElement.props.children).toBe('R$109.95');
  });
  it('Validate press', () => {
    const { getByTestId } = render(<Details />);
    const currentElement = getByTestId('Button');
    fireEvent.press(currentElement);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith(mockProducts[0]);
  });
});
