import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
        <Text style={styles.text}>HomeScreen?</Text>
        <Button
            onPress={() => {navigation.navigate('Components')}}
            title="Go to Components Demo" />
        <TouchableOpacity
            onPress={()=>{navigation.navigate('List')}}
        >
            <Text>Go to List Demo</Text>
        </TouchableOpacity>
        <Button
            onPress={() => {navigation.navigate('Image')}}
            title="Go to ImageScreen Demo" />
        <Button
          onPress={() => {navigation.navigate('CounterScreen')}}
          title="Go to CounterScreen Demo" 
        />
        <Button
          onPress={() => {navigation.navigate('ColorScreen')}}
          title="Go to ColorScreen Demo" 
        />
        <Button
          onPress={() => {navigation.navigate('SquareScreen')}}
          title="Go to SquareScreen Demo" 
        />
        <Button
          onPress={() => {navigation.navigate('TextScreen')}}
          title="Go to TextScreen Demo" 
        />
        <Button
          onPress={() => {navigation.navigate('BoxScreen')}}
          title="Go to BoxScreen Demo" 
        />
    </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
