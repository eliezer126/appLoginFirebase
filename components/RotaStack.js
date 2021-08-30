import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Lugares from './Pages/Lugares';
import Imagens from './Pages/Imagens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Rotas(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false, title: 'Login'}}/>
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false, title: 'Cadastro'}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false, title: 'Home'}}/>
      <Stack.Screen name="Lugares" component={Lugares} options={{headerShown: false, title: 'Lugares'}}/>
      <Stack.Screen name="Imagens" component={Imagens} options={{headerShown: false, title: 'Imagens'}}/>
    </Stack.Navigator>
  )
}