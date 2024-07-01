import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Resultado(props) {
    return (
        <View style={styles.bloco}>
            <Text>Resultado: {props.resultado} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
});
