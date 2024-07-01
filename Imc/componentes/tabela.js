import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Tabela() {
    return (
        <View style={styles.bloco}>
            <Image
                source={require('../Fotos/TabelaIMC.jpeg')}
                style={styles.tabela}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
    tabela: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -57,
    },
});
