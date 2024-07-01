import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Home = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
        onLogin(username);
    };

    return (
        <ImageBackground
            source={{ uri: 'https://www.example.com/background-image.jpg' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Login"
                    placeholderTextColor="#ccc"
                />
                <View style={styles.buttonContainer}>
                    <Button title="Entrar" onPress={handleSubmit} color="#61dafb" />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        width: '80%',
        color: '#fff',
    },
    buttonContainer: {
        width: '80%',
    },
});

export default Home;
