import React, {useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
// import BlogContext from '../context/BlogContext'
// import { Context as BlogContext} from '../context/BlogContext'
// import { Context as ImageContext} from '../context/ImageContext'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
    // const { data, addBlogPost } = useContext(BlogContext);
    const { state, addBlogPost } = useContext(Context);

    return (
      <View>
          <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            keyExtractor={(blogPost) => blogPost.title}
            data={state}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
      </View>
    );
}

export default IndexScreen;
