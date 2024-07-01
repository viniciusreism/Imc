import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//Importação dos componentes nativos do React Native.

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Posto de Gasolina</Text>
            <Button
                title="Calcular Preço do Combustível"
                onPress={() => props.navigation.navigate('FuelCalculator')}
            />
            <Button
                title="Comparar Combustíveis"
                onPress={() => props.navigation.navigate('FuelChoice')}
            />
        </View>
    );
}

//onPress: Define a ação ao pressionar o botão, que é navegar para a tela 
//FuelCalculator ou FuelChoice usando props.navigation.navigate.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});
