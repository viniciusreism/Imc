import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

const EquipmentDetailsPage = ({ equipment, onBack, onFeed }) => {
    const equipmentInfo = {
        '112QD17': {
            tag: '100-XX-XX',
            atpv: '10.2',
            icc: '15.6',
            tempo: '0.1',
            las: '30',
            zonaRisco: '1.5',
            zonaControlada: '3.0',
            tensao: '380',
            aproxProibida: '20',
            equipamentos: ['Classe 2', 'Classe B', 'Calçado EPI']
        },
        '212QD16': {
            tag: '200-XX-XX',
            atpv: '12.5',
            icc: '13.2',
            tempo: '0.2',
            las: '28',
            zonaRisco: '1.2',
            zonaControlada: '2.5',
            tensao: '400',
            aproxProibida: '22',
            equipamentos: ['Classe 3', 'Classe C', 'Calçado EPI']
        },
        '112QD20': {
            tag: '300-XX-XX',
            atpv: '9.5',
            icc: '16.8',
            tempo: '0.15',
            las: '32',
            zonaRisco: '1.8',
            zonaControlada: '3.5',
            tensao: '360',
            aproxProibida: '18',
            equipamentos: ['Classe 2', 'Classe B', 'Calçado EPI']
        },
    };

    const info = equipmentInfo[equipment];

    if (!info) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Informações do equipamento não encontradas.</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={onBack} color="#61dafb" />
                </View>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Detalhes do Equipamento: {equipment}</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}><Text style={styles.tableCell}>TAG DO PAINEL:</Text><Text style={styles.tableCell}>{info.tag}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>ATPV (Cal/cm²):</Text><Text style={styles.tableCell}>{info.atpv}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Icc (kA):</Text><Text style={styles.tableCell}>{info.icc}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Tempo de atuação (s):</Text><Text style={styles.tableCell}>{info.tempo}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>LAS (cm):</Text><Text style={styles.tableCell}>{info.las}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Zona de Risco (m):</Text><Text style={styles.tableCell}>{info.zonaRisco}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Zona Controlada (m):</Text><Text style={styles.tableCell}>{info.zonaControlada}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Tensão Nominal (V):</Text><Text style={styles.tableCell}>{info.tensao}</Text></View>
                <View style={styles.tableRow}><Text style={styles.tableCell}>Aproximação proibida (mm):</Text><Text style={styles.tableCell}>{info.aproxProibida}</Text></View>
            </View>
            <Text style={styles.subtitle}>Equipamentos de Proteção Obrigatórios:</Text>
            {info.equipamentos.map((equip, index) => (
                <Text key={index} style={styles.item}>{equip}</Text>
            ))}
            {equipment === '112QD17' && (
                <TouchableOpacity onPress={onFeed} style={styles.feedButton}>
                    <Text style={styles.feedButtonText}>Alimentação</Text>
                </TouchableOpacity>
            )}
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
    subtitle: {
        fontSize: 20,
        marginTop: 20,
        color: '#fff',
    },
    table: {
        width: '100%',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        padding: 5,
    },
    item: {
        margin: 5,
        fontSize: 16,
        color: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        marginBottom: 20,
    },
    feedButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#61dafb',
        borderRadius: 5,
    },
    feedButtonText: {
        color: '#282c34',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EquipmentDetailsPage;
