import * as React from 'react';
import { SubHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render SubHeader', () => {
  it('Should be SubHeader exist', () => {
    const { getByTestId } = render(<SubHeader />);
    const currentElement = getByTestId(`SubHeader`);
    expect(currentElement).toBeTruthy();
  });
});