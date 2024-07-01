import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';

const SubAccessPage = ({ access, onSubAccessClick, onBack }) => {
    const subAccesses = {
        '143QD01C2': ['112QD02C1', '112QD02C2', '112QD02C3'],
        // Adicione o restante dos sub-acessos aqui
    };

    const subAccessList = subAccesses[access] || [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{access}</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.grid}>
                    {subAccessList.map((subaccess) => (
                        <TouchableOpacity
                            key={subaccess}
                            onPress={() => onSubAccessClick(subaccess)}
                            style={styles.listItem}
                        >
                            <Text style={styles.itemText}>{subaccess}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={onBack} color="#61dafb" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    scrollView: {
        alignItems: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    listItem: {
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '40%', // Ajuste a largura conforme necessário
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    itemText: {
        color: '#333',
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default SubAccessPage;
