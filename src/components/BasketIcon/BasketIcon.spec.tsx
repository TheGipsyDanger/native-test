import * as React from 'react';
import { BasketIcon }from './';
import { render } from '@testing-library/react-native';

describe('Render BasketIcon', () => {
  it('Should be BasketIcon exist', () => {
    const { getByTestId } = render(<BasketIcon />);
    const currentElement = getByTestId(`BasketIcon`);
    expect(currentElement).toBeTruthy();
  });
});