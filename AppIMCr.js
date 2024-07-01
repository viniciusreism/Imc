import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Peso from './Imc/componentes/peso';
import Altura from './Imc/componentes/altura';
import BtnCalcular from './Imc/componentes/btnCalcular';
import Resultado from './Imc/componentes/resultado';
import Tabela from './Imc/componentes/tabela';
import Tela1 from './Imc/screens/Tela1';
import Tela3 from './Imc/screens/Tela3';
import Nome from './Imc/componentes/nome';
import ImcProvider from './Imc/Context/ImcContext';

const Stack = createStackNavigator();

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [nome, setNome] = useState(0);

  const calcImc = () => {
    if (peso === 0 || !peso) {
      alert('Informe o seu peso');
      return;
    }
    if (altura === 0 || !altura) {
      alert('Informe a sua altura');
      return;
    }
    const r = peso / (altura * altura);
    setResultado(r.toFixed(1));
  };

  return (
    <NavigationContainer>
      <ImcProvider>
        <Stack.Navigator initialRouteName="IMC">
          <Stack.Screen name="IMC">
            {(props) => (
              <IMCScreen
                {...props}
                setNome={setNome}
                setPeso={setPeso}
                setAltura={setAltura}
                calcImc={calcImc}
                resultado={resultado}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Tela1" component={Tela1} />
          <Stack.Screen name="Tela3">
            {(props) => <Tela3 {...props} resultado={resultado} />}
          </Stack.Screen>
        </Stack.Navigator>
      </ImcProvider>
    </NavigationContainer>
  );
}

function IMCScreen({ navigation, setNome, setPeso, setAltura, calcImc, resultado }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        <Text>Calculadora de IMC</Text>
      </View>
      <Nome aoModificar={setNome}/>
      <Peso aoModificar={(text) => setPeso(Number(text))} />
      <Altura aoModificar={(text) => setAltura(Number(text))} />
      <BtnCalcular aoClicar={calcImc} />
      <Resultado resultado={resultado} />
      <Tabela />
      <View style={styles.buttonContainer}>
        <Button
          title="Tela 1"
          onPress={() => navigation.navigate('Tela1')}
        />
        <Button
          title="Tela 3"
          onPress={() => navigation.navigate('Tela3')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});


