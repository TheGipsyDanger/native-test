import * as React from 'react';
import { Image }from './';
import { render } from '@testing-library/react-native';

describe('Render Image', () => {
  it('Should be Image exist', () => {
    const { getByTestId } = render(<Image />);
    const currentElement = getByTestId(`Image`);
    expect(currentElement).toBeTruthy();
  });
});