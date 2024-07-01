import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ArremateScreen({ route, navigation }) {
  const { car, bid } = route.params;
  const threshold = car.startingPrice * 1.40;  // Calcula 40% acima do preço inicial

  const arrematado = bid >= threshold;

  return (
    <View style={styles.container}>
      {arrematado ? (
        <Text style={styles.successText}>Parabéns! Você arrematou o {car.marca} {car.modelo} por R$ {bid}.</Text>
      ) : (
        <Text style={styles.errorText}>O lance de R$ {bid} não foi suficiente para arrematar o {car.marca} {car.modelo}. O lance mínimo para arremate era de R$ {threshold}.</Text>
      )}
      <Button title="Voltar para Leilão" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
});
