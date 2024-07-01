import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Result({ result }) {
  return (
    <View style={styles.container}>
      <Text>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
});
