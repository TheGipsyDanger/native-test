import { API } from './API';
import { useQuery } from 'react-query';
import { IProduct, mockProducts } from '~/utils';

export const getProducts = async (): Promise<any> => {
  try {
    const { data } = await API.get<IProduct[]>('/products');
    return data;
  } catch (error) {
    console.log('Error on getProducts');
  }
};

export const useFetchProducts = () => {
  return useQuery<IProduct[]>('getProducts', getProducts, {
    initialData: mockProducts,
  });
};
