import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return <View>
        <Text>Text Screen</Text>
        <TextInput 
            style={styles.input}
            autoComplete="none"
            autoCorrect={false}
            onChangeText={(newValue) => setName(newValue)}
        />
        {name.length < 3 ? <Text>more than 3.</Text> : <Text>name is {name}</Text> }
    </View>
};


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;