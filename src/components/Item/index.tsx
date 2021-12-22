import * as React from 'react';

import { IItem } from '~/components/Item/data';
import { Item as Layout } from './Layout';

export const Item = (props: IItem ) => <Layout {...props} />;