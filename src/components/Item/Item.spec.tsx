import * as React from 'react';
import { Item }from './';
import { render } from '@testing-library/react-native';

describe('Render Item', () => {
  it('Should be Item exist', () => {
    const { getByTestId } = render(<Item />);
    const currentElement = getByTestId(`Item`);
    expect(currentElement).toBeTruthy();
  });
});