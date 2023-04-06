import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/style/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Home } from './src/pages/Home';

import AppLoading from 'expo-app-loading';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
