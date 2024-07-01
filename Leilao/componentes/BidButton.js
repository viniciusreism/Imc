import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function BidButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => onPress()}>
        <Text style={styles.text}>Submeter Lance</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
