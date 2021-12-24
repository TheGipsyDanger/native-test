import * as React from 'react';
import { Details } from './';
import { render } from '@testing-library/react-native';

describe('Render Details', () => {
  it('Should be Details exist', () => {
    const { getByTestId } = render(<Details />);
    const currentElement = getByTestId(`Details`);
    expect(currentElement).toBeTruthy();
  });
});