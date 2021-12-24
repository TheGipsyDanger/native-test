import * as React from 'react';
import { Basket } from './';
import { render } from '@testing-library/react-native';

describe('Render Basket', () => {
  it('Should be Basket exist', () => {
    const { getByTestId } = render(<Basket />);
    const currentElement = getByTestId(`Basket`);
    expect(currentElement).toBeTruthy();
  });
});