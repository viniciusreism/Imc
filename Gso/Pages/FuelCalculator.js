import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Preco from '../componts/Preco';
import Litros from '../componts/Litros';
import BtnCalcular from '../componts/BtnCalcular';
import Resultado from '../componts/Resultado';

export default props => {

    //Estados: preco, setPreco: Estado para armazenar o preço do combustível.
    //litros, setLitros: Estado para armazenar a quantidade de litros.
    //resultado, setResultado: Estado para armazenar o resultado do cálculo.

    const [preco, setPreco] = useState(0);
    const [litros, setLitros] = useState(0);
    const [resultado, setResultado] = useState(0);

    //Verifica se os valores de preco e litros são válidos.
    //Calcula o total multiplicando o preço pelos litros.
    //Atualiza o estado resultado com o valor calculado.

    const calcTotal = () => {
        if (preco === 0 || !preco) {
            alert('Informe o preço por litro');
            return;
        }
        if (litros === 0 || !litros) {
            alert('Informe a quantidade de litros');
            return;
        }
        const total = preco * litros;
        setResultado(total.toFixed(2));
    };

    //SafeAreaView, View, Text: Componentes de layout.
    //Preco, Litros, BtnCalcular, Resultado: Componentes personalizados com props 
    //passadas (aoModificar e aoClicar).

    return (
        <SafeAreaView style={styles.corpo}>
            <View style={styles.bloco}>
                <Text>Calculadora de Preço de Combustível</Text>
            </View>
            <Preco aoModificar={setPreco} />
            <Litros aoModificar={setLitros} />
            <BtnCalcular aoClicar={calcTotal} />
            <Resultado resultado={resultado} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    corpo: {
        padding: 10,
    },
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
});
