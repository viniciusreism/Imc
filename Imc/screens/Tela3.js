// Tela3.js
import React from 'react';
import { View, Text } from 'react-native';

export default function Tela3({ resultado }) {
    let mensagem = '';
    if (resultado < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (resultado < 24.9) {
        mensagem = 'Peso normal';
    } else if (resultado < 29.9) {
        mensagem = 'Sobrepeso';
    } else if (resultado < 34.9) {
        mensagem = 'Obesidade Grau I';
    } else if (resultado < 39.9) {
        mensagem = 'Obesidade Grau II';
    } else {
        mensagem = 'Obesidade Grau III ou Mórbida';
    }

    return (
        <View>
            <Text>Seu IMC é {resultado}</Text>
            <Text>Você está classificado como: {mensagem}</Text>
        </View>
    );
}
