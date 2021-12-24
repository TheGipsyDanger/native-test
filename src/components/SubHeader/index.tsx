import * as React from 'react';

import { ISubHeader } from '~/components/SubHeader/data';
import { SubHeader as Layout } from './Layout';

export const SubHeader = (props: ISubHeader ) => <Layout {...props} />;