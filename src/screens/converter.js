import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const Converter = () => {
    const [meters, setMeters] = useState('');
    const [yards, setYards] = useState('');
    const MeterToYards = 1.0936133;
    const YardToMeters = 0.9144;

    return (<View style={styles.container}> 
            <Text>Enter meters</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(val) => setMeters(val)}
                value={meters}
                placeholder='meters here'
            />
            <Text>{meters} meters is {Math.round(meters*MeterToYards)} yards.</Text>
            <Text>Enter yards</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(val) => setYards(val)}
                value={yards}
                placeholder='yards here'
            />
            <Text>{yards} yards is {Math.round(yards*YardToMeters)} meters.</Text>
        </View>)
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        margin: 10,
        width: 200,
    }
})