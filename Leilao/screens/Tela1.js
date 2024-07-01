import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao Leilão de Carros!</Text>
      <Text style={styles.subtitle}>
        Encontre diversos veículos e faça lances para adquirir o carro dos seus sonhos.
      </Text>
      <Button title="Ir para Leilão" onPress={() => navigation.navigate('Tela2')} color="#841584" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
});
