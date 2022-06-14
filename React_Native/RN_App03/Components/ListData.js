import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import axios from "axios";
import { Link } from '@react-navigation/native';

// update this url -> "<new_ngrok_host_url>/posts"
const url = "http://localhost:3000/posts";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

function ListData() {
  const [myUserData, setMyUserData] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      // const myData = await response.json();
      setMyUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const editPost = (postId, title, author) => {
    fetch(url + `/${postId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        "author": author,
        "title": title,
      })
    }).then((res) => res.json())
      .then(resJson => {
        console.log('updated:', resJson)
       
      }).catch(e => { console.log(e) })
  }

  const handleDelete = async (id) => {
    await axios.delete(url + `/${id}`);
    getUserData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>| Users Data |</Text>
      <FlatList
        data={myUserData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={{ fontSize: 30 }}>{item.id}</Text>
              <Text style={{ fontSize: 15 }}>Name : {item.name}</Text>
              <Text style={{ fontSize: 15 }}>Email : {item.email}</Text>
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
              <Button title="Edit" onPress={() => editPost(item.id, item.name, item.email)} />
              <Link to={{ screen: 'Edit Data' }} style={{ fontSize: 36 }}> Edit </Link>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // margin:20
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default ListData;
