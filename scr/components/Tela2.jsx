import { View, Text, Button } from 'react-native'
import React from 'react'
export default function Tela2(props) {
    return (
        <View>
            <Text>Tela2</Text>
            <Button
                title='Primeira tela'
                onPress={() => props.navigation.navigate("TelaInicial")}
                color={'blue'} />
        </View>
    )
}