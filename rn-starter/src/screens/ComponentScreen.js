import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const greeting = 'Hi There';
    const arrays = ['this','is','sparta'];
    const text = <Text>Oh This is Text</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
            <Text>{arrays}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;