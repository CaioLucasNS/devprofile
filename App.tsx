import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/style/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Home } from './src/pages/Home';
import { SignIn } from './src/pages/SignIn';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <SignIn />
    </ThemeProvider>
  );
};

export default App;
