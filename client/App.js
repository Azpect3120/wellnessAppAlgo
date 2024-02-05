import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from './components/Navigation';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue',
      background:'white'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation>

      </Navigation>
    </NavigationContainer>
  );
}
