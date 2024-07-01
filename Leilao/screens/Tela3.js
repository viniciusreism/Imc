import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';
import CarDetail from '../componentes/CarDetail';
import BidForm from '../componentes/BidForm';
import BidButton from '../componentes/BidButton';
import Result from '../componentes/Result';

export default function Tela3({ route, navigation }) {
  const { car } = route.params;
  const [bid, setBid] = useState('');
  const [result, setResult] = useState('');

  const submitBid = () => {
    const bidAmount = parseFloat(bid);
    if (!bidAmount) {
      setResult('Por favor, insira um valor válido.');
    } else if (bidAmount < car.startingPrice) {
      setResult(`Lance abaixo do preço inicial: R$ ${car.startingPrice}`);
    } else {
      setResult('Lance aceito!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarDetail car={car} />
      <Text style={styles.bidInstructions}>Valor inicial do lance: R$ {car.startingPrice}</Text>
      <BidForm onChange={setBid} />
      <BidButton onPress={submitBid} />
      <Result result={result} />
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#841584" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  bidInstructions: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
