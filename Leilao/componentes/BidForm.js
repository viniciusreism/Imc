import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function BidForm({ onChange }) {
  return (
    <View style={styles.container}>
      <Text>Insira o valor do seu lance:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
});
