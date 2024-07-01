import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CarDetail({ car }) {
  // Definindo imagens de fallback com base na marca do carro
  let fallbackImage = require('../assets/carroA.jpeg'); // imagem padrão

  if (car.marca === 'Audi') {
    fallbackImage = require('../assets/carroA.jpeg'); // imagem específica para Audi
  } else if (car.marca === 'Volkswagen') {
    fallbackImage = require('../assets/carroB.jpeg'); // imagem específica para Volkswagen
  }
  // Escolhendo a fonte da imagem: imagem do carro ou fallback apropriado
  const imageSource = car.image ? car.image : fallbackImage;
  
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{car.marca}</Text>
      <Text style={styles.details}>Ano: {car.ano}</Text>
      <Text style={styles.details}>Modelo: {car.modelo}</Text>
      <Text style={styles.details}>Cor: {car.cor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
});
