import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const AlimentacaoPage = ({ onBack }) => {
    const equipamentos = [
        '112BA10M', '112BA11M', '112TAE06', '112TH02M', '112TR51I',
        '112TR51M2', '112TR52I', '112TR53I', '112TR54I1', '112TR54I2',
        '112TR55I1', '112TR55I2', '112TR55I3', '112TR55I4', '112TR55I5',
        '112TR55I6', '112TR55I7', '112TR57M', '112TR58M', '112TR59M'
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Equipamentos Alimentados por 112MC26</Text>
            {equipamentos.map((equip, index) => (
                <Text key={index} style={styles.item}>{equip}</Text>
            ))}
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={onBack} color="#61dafb" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff',
    },
    item: {
        margin: 5,
        fontSize: 16,
        color: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default AlimentacaoPage;
