import * as React from 'react';

import { IButton } from '~/components/Button/data';
import { Button as Layout } from './Layout';

export const Button = (props: IButton ) => <Layout {...props} />;