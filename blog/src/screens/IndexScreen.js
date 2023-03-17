import React, {useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
// import BlogContext from '../context/BlogContext'
// import { Context as BlogContext} from '../context/BlogContext'
// import { Context as ImageContext} from '../context/ImageContext'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
    // const { data, addBlogPost } = useContext(BlogContext);
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
      <View>
          <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            keyExtractor={(blogPost) => blogPost.title}
            data={state}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Show', {
                        id: item.id
                    })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
   row: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingVertical: 20,
       paddingHorizontal: 1,
       borderTopWidth: 1,
       borderBottomWidth: 1,
       borderColor: 'gray'
   },
    title: {
       fontSize: 18,
    },
    icon: {
       fontSize: 24
    }
});

export default IndexScreen;
