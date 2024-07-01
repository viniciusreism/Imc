import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text, View, Image } from 'react-native';

export default function Tela2({ navigation }) {
  const cars = [
    { 
      id: 1, 
      marca: 'Audi', 
      modelo: 'A3', 
      ano: 2003, 
      cor: 'Prata',
      startingPrice: 10000, 
      image: require('../assets/carroA.jpeg')
    },
    { 
      id: 2, 
      marca: 'Volkswagen',
      modelo: 'GOL G5', 
      ano: 2011, 
      cor: 'Prata',
      startingPrice: 10000, 
      image: require('../assets/carroB.jpeg')
    },
    { 
      id: 3, 
      marca: 'Fiat', 
      modelo: 'Punto', 
      ano: 2008, 
      cor: 'Amarelo',
      startingPrice: 11000, 
      image: require('../assets/carroC.jpeg')
    },
    { 
      id: 4, 
      marca: 'Fiat', 
      modelo: 'Uno', 
      ano: 2005, 
      cor: 'Azul',
      startingPrice: 5000, 
      image: require('../assets/carroD.jpeg')
    },
    { 
      id: 5, 
      marca: 'Honda', 
      modelo: 'City', 
      ano: 2012, 
      cor: 'Prata',
      startingPrice: 18000, 
      image: require('../assets/carroE.jpeg')
    },
    { 
      id: 6, 
      marca: 'Chevrolet', 
      modelo: 'Prisma', 
      ano: 2014, 
      cor: 'Prata',
      startingPrice: 16000, 
      image: require('../assets/carroF.jpeg')
    },
    { 
      id: 7, 
      marca: 'Honda', 
      modelo: 'Civic', 
      ano: 2015, 
      cor: 'Preto',
      startingPrice: 28000, 
      image: require('../assets/carroG.jpeg')
    },
    { 
      id: 8, 
      marca: 'Cherry', 
      modelo: 'QQ', 
      ano: 2019, 
      cor: 'Branco',
      startingPrice: 15000, 
      image: require('../assets/carroH.jpeg')
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Tela3', { car: item })}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.carName}>{item.marca} - {item.modelo}</Text>
              <Text style={styles.carDetails}>Ano: {item.ano} - Cor: {item.cor}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  carDetails: {
    fontSize: 14,
    color: '#666',
  },
});
