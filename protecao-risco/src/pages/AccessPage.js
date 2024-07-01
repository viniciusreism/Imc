import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';

const AccessPage = ({ onAccessClick, onBack }) => {
    const accesses = [
        '143QD01C1', '143QD01C2', '143QD01C3', '143QD01C4', '143QD01C5',
        '143QD01C6', '143QD01C7', '143QD01C8', '143QD01C9', '143QD01C10',
        '143QD01C11', '143QD01C12', '143QD01C13', '143QD01C14', '143QD01C15',
        '143QD01C16', '143QD01C17', '143QD01C18', '143QD01C19', '143QD01C20',
        '143QD01C21', '243QD01C1', '243QD01C2', '243QD01C3', '243QD01C4',
        '243QD01C5', '243QD01C6', '243QD01C7', '243QD01C8', '243QD01C9',
        '243QD01C10', '243QD01C11', '243QD01C12', '243QD01C13', '243QD01C14',
        '243QD01C15', '243QD01C16', '243QD01C17', '243QD01C18', '243QD01C19',
        '243QD01C20', '243QD01C21', '247QD01C1', '247QD01C2'
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Acesso</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.grid}>
                    {accesses.map((access) => (
                        <TouchableOpacity
                            key={access}
                            onPress={() => onAccessClick(access)}
                            style={styles.listItem}
                        >
                            <Text style={styles.itemText}>{access}</Text>
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

export default AccessPage;
