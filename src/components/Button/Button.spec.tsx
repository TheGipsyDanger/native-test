import * as React from 'react';
import { Button } from './';
import { render, fireEvent } from '@testing-library/react-native';

const mockFN = jest.fn();

describe('Render Button', () => {
  it('Should be Button exist', () => {
    const { getByTestId } = render(
      <Button
        py={0}
        bg="YELLOW"
        font="medium"
        fontSize="xsmall"
        textColor="TEXT"
        onPress={mockFN}
        title="Adicionar"
      />
    );

    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(mockFN).toBeCalled();

    const titleCurrentElement = getByTestId(`ButtonTitle`);
    expect(titleCurrentElement).toBeTruthy();
    expect(titleCurrentElement.props.children).toBe('Adicionar');
  });
});
