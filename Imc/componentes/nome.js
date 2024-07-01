import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Nome(props) {
    return (
        <View style={styles.bloco}>
            <Text>Informe o seu nome:</Text>
            <TextInput
                style={styles.txt}
                autoFocus={true}
                onChangeText={(text) => props.aoModificar(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
    txt: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 10,
    },
});
