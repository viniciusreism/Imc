import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function BtnCalcular(props) {
  return (
    <View style={styles.bloco}>
      <TouchableHighlight style={styles.btnClc} onPress={() => props.aoClicar()}>
        <Text style={styles.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%',
  },
  btnClc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
