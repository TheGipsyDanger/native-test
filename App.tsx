import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Store } from './src/components';
import Routes from './src/routes/Routes';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Store>
        <Routes />
      </Store>
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
