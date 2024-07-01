// Tela2.js (alterações em App.js)
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import Peso from '../componentes/peso';
import Altura from '../componentes/altura';
import BtnCalcular from '../componentes/btnCalcular';
import Resultado from '../componentes/resultado';
import Nome from '../componentes/nome';
import Tabela from '../componentes/tabela';

export default function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [nome, setNome] = useState(0);

    const calcImc = () => {
        if (peso === 0 || !peso) {
            alert('Informe o seu peso');
            return;
        }
        if (altura === 0 || !altura) {
            alert('Informe a sua altura');
            return;
        }
        const r = peso / (altura * altura);
        setResultado(r.toFixed(1));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.block}>
                <Text>Calculadora de IMC</Text>
            </View>
            <Nome aoModificar={setNome} />
            <Peso aoModificar={setPeso} />
            <Altura aoModificar={setAltura} />
            <BtnCalcular aoClicar={calcImc} />
            <Resultado resultado={resultado} />
            <Tabela />
            <Button
                title="Tela 1"
                onPress={() => {
                    // Implemente a navegação para a Tela 1
                }}
            />
            <Button
                title="Tela 3"
                onPress={() => {
                    // Implemente a navegação para a Tela 3
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    block: {
        marginBottom: 20,
        width: '100%',
    },
});
