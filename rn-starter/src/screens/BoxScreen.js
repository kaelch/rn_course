import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const BoxScreen = () => {
    return <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoParent}>
            <View style={styles.viewTwoStyle}></View>   
        </View>
        <View style={styles.viewThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    parentStyle: {
        // borderWidth: 1,
        // borderColor: 'black',
        // alignItems: 'flex-start', // (child크기에 맞춤), flex-end, center, flexDirection에 따라 달라지겠음
        // flexDirection: 'column', // default: row
        // justifyContent: 'flex-end' // space-between, space-around, center

        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    // textStyle: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     marginVertical: 20,
    //     marginHorizontal: 20,
    //     ...StyleSheet.absoluteFillObject
    // }
    viewOneStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTwoStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        top: 50
    },

    viewTwoParent:{
        height: 100,
        justifyContent: 'flex-end'
    },

    viewThreeStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;