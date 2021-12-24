import * as React from 'react';
import { useState } from 'react';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppLoading from 'expo-app-loading';

import { Store } from './src/components';
import Routes from './src/routes/Routes';

const queryClient = new QueryClient();

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  async function loadResourcesAsync() {
    try {
      await loadAsync({
        Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Italic: require('./assets/fonts/Roboto-Italic.ttf'),
        Light: require('./assets/fonts/Roboto-Light.ttf'),
        Black: require('./assets/fonts/Roboto-Black.ttf'),
        Bold: require('./assets/fonts/Roboto-Bold.ttf'),
        Medium: require('./assets/fonts/Roboto-Medium.ttf'),
        Thin: require('./assets/fonts/Roboto-Thin.ttf'),
        'Black-Italic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
        'Bold-Italic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
        'Light-Italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
        'Medium-Italic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
        'Thin-Italic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
      });
    } catch (error) {
      console.log('Erro no carregamento do app', error);
    }
  }

  function handleFinishLoading() {
    setLoadingComplete(true);
  }

  function handleLoadingError(error: any) {
    console.warn(error);
  }

  if (!isLoadingComplete)
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Store>
          <Routes />
        </Store>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
