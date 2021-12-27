import * as React from 'react';
import { Home } from './';
import { render, fireEvent } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockProducts } from '~/utils';

const mockNAVFN = jest.fn();
const mockADDFN = jest.fn();
const mockSETFN = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNAVFN,
    }),
  };
});

jest.mock('../../context/List', () => {
  return {
    useList: () => ({
      search: '',
      listType: 'grid',
    }),
  };
});

jest.mock('../../context/Basket', () => {
  return {
    useBasket: () => ({
      addItem: mockADDFN,
    }),
  };
});

jest.mock('../../context/Item', () => {
  return {
    useItem: () => ({
      setSelected: mockSETFN,
    }),
  };
});

const queryClient = new QueryClient();

const Component = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

describe('Render Home', () => {
  it('Should be Home exist', () => {
    const { getByTestId } = render(<Component />);
    const currentElement = getByTestId(`Home`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be HomeList exist', () => {
    const { getByTestId } = render(<Component />);
    const currentElement = getByTestId('List');
    expect(currentElement).toBeTruthy();
  });

  it('Validate List length', async () => {
    const { getAllByTestId } = render(<Component />);
    const listElements = getAllByTestId('Item');
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(20);
  });

  it('Validate Full Item press', async () => {
    const { getAllByTestId } = render(<Component />);
    const listElements = getAllByTestId('HomeItem');
    fireEvent.press(listElements[0]);
    expect(mockNAVFN).toBeCalled();
    expect(mockNAVFN).toHaveBeenCalledWith('Details');
  });
  it('Validate Button Item press', async () => {
    const { getAllByTestId } = render(<Component />);
    const listElements = getAllByTestId('Button');
    fireEvent.press(listElements[0]);
    expect(mockSETFN).toBeCalled();
    expect(mockSETFN).toHaveBeenCalledWith(mockProducts[0]);
    expect(mockADDFN).toBeCalled();
    expect(mockADDFN).toHaveBeenCalledWith(mockProducts[0]);
  });
});
