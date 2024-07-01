import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LeilaoContext } from '../context/LeilaoContext';


export default function CarList({ cars, onSelect }) {


  const {leilao, buscarLeilao, atualizacao, apagarLeilao} = useContext(LeilaoContext);
  useEffect(() => {
    buscarLeilao();
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={leilao}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.marca}</Text>
              <Text style={styles.details}>Ano: {item.ano}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
  },
});
