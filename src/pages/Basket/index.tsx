import * as React from 'react';
import { IBasket } from '~/pages/Basket/data';
import { Basket as Layout } from './Layout';

export const Basket = (props: IBasket) => <Layout {...props} />;