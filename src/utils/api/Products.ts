import { API } from './API';
import { IProduct } from '~/utils';

export const getProducts = async (): Promise<any> => {
  try {
    const { data } = await API.get<IProduct[]>('/products');
    return data;
  } catch (error) {
    console.log('Error on getProducts');
  }
};
