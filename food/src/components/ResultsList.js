import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
    return <View>
        <Text>{ title }</Text>
        <Text>Results: {results.legnth}</Text>
        <FlatList
            horizontal={true}
            data={results}
            />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
