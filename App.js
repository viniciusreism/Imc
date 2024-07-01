import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './Leilao/screens/Tela1';
import Tela2 from './Leilao/screens/Tela2';
import Tela3 from './Leilao/screens/Tela3';
import LeilaoProvider from './Leilao/context/LeilaoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LeilaoProvider>
        <Stack.Navigator initialRouteName="Tela1">
          <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Bem-vindo' }} />

          <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Leilão de Carros' }} />
          <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Detalhes do Carro' }} />
        </Stack.Navigator>
      </LeilaoProvider>
    </NavigationContainer>
  );
}