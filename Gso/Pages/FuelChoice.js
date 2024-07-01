import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import PrecoCombustivel from '../componts/PrecoCombustivel';
import BtnCalcular from '../componts/BtnCalcular';
import ResultadoComparacao from '../componts/ResultadoComparacao';

//PrecoCombustivel, BtnCalcular, ResultadoComparacao: Importa componentes 
//personalizados.
//precoEtanol, setPrecoEtanol: Estado para armazenar o preço do etanol.
//precoGasolina, setPrecoGasolina: Estado para armazenar o preço da gasolina.
//resultado, setResultado: Estado para armazenar o resultado da comparação.

export default props => {
  const [precoEtanol, setPrecoEtanol] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');

//Verifica se os valores de precoEtanol e precoGasolina são válidos.
//Calcula a relação entre os preços.
//Atualiza o estado resultado com a recomendação de combustível mais vantajoso.
  
const calcMelhorCombustivel = () => {
    if (precoEtanol === 0 || !precoEtanol) {
      alert('Informe o preço do etanol');
      return;
    }
    if (precoGasolina === 0 || !precoGasolina) {
      alert('Informe o preço da gasolina');
      return;
    }
    const relacao = precoEtanol / precoGasolina;
    if (relacao > 0.7) {
      setResultado('É mais vantajoso abastecer com Gasolina');
    } else {
      setResultado('É mais vantajoso abastecer com Etanol');
    }
  };

  return (
    <SafeAreaView style={styles.corpo}>
      <View style={styles.bloco}>
        <Text>Comparar Combustíveis</Text>
      </View>
      <PrecoCombustivel tipo="Etanol" aoModificar={setPrecoEtanol} />
      <PrecoCombustivel tipo="Gasolina" aoModificar={setPrecoGasolina} />
      <BtnCalcular aoClicar={calcMelhorCombustivel} />
      <ResultadoComparacao resultado={resultado} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  corpo: {
    padding: 10,
  },
  bloco: {
    marginBottom: 20,
    width: '100%',
  },
});
