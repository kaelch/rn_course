import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {
            name: 'Friend #1',
            key: '1'
        },
        {
            name: 'Friend #2',
            key: '2'
        },
        {
            name: 'Friend #3',
            key: '3'
        },
        {
            name: 'Friend #4',
            key: '4'
        },
        {
            name: 'Friend #5',
            key: '5'
        },
        {
            name: 'Friend #6',
            key: '6'
        },
    ];

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor = {(friend) => friend.key}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;