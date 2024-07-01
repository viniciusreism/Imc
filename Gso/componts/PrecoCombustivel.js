import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={estilos.bloco}>
            <Text>Preço do {props.tipo}:</Text>
            <TextInput
                placeholder={`Informe o preço do ${props.tipo.toLowerCase()}`}
                keyboardType="numeric"
                onChangeText={(value) => props.aoModificar(parseFloat(value))}
                style={estilos.input}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
});
