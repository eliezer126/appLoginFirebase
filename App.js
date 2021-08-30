import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Rotas from './components/RotaStack';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas/> 
    </NavigationContainer>
  );
}
