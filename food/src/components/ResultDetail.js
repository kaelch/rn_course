import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({result}) => {
    return (
        <View>
            <Image style={ styles.image } source={{ uri: result.image_url }}/>
            <Text>{result.name}</Text>
            <Text>{result.rating} Stars, { result.review_count }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    }
});

export default ResultDetail;
