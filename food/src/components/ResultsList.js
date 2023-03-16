import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return <View style={styles.container}>
        <Text>{ title }</Text>
        <Text>Results: {results.length}</Text>
        <FlatList
            horizontal={true}
            data={results}
            showHorizontalScrollIndicator={false}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity
                    onPress={()=>navigation.navigate('ResultsShow', {
                        id: item.id
                    })}
                >
                    <ResultDetail result={item}/>;
                </TouchableOpacity>
                );
            }}

            />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);
