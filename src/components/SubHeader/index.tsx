import * as React from 'react';
import { useState } from 'react';

import { useList } from '~/context';

import { ISubHeader } from '~/components/SubHeader/data';
import { SubHeader as Layout } from './Layout';

export const SubHeader = (props: ISubHeader) => {
  const [search, setSearch] = useState<string>('');
  const { setSearch: setSearchContext, listType, setListType } = useList();

  function onChange(value: string) {
    setSearch(value);
    setSearchContext(value);
  }

  const layoutProps = {
    ...props,
    search,
    onChange,
    listType,
    setListType,
  };

  return <Layout {...layoutProps} />;
};
