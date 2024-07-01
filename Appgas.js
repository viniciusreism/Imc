import * as React from 'react'; //Importa todas as exportações do módulo react.
import { NavigationContainer } from '@react-navigation/native'; //Importa NavigationContainer para envolver a navegação.
import { createStackNavigator } from '@react-navigation/stack'; //Importa função para criar um stack navigator.
import HomePage from './Gso/Pages/HomePage';
import FuelCalculator from './Gso/Pages/FuelCalculator';
import FuelChoice from './Gso/Pages/FuelChoice';
//Importa os componentes de página.

const Stack = createStackNavigator(); //Stack navigator para gerenciar a navegação entre as telas.

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="FuelCalculator" component={FuelCalculator} />
                <Stack.Screen name="FuelChoice" component={FuelChoice} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
//Definição das telas de aplicação utilizando o Stack.Navigator. 
