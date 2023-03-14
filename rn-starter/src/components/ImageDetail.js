import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
    return (
    <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    </View>

    );
};

export default ImageDetail;