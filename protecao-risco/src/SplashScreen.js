import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // 2 segundos
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PROTEÇÃO CONTRA CHOQUE E ARCO ELÉTRICO</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 32,
        color: '#FFD700',
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default SplashScreen;
