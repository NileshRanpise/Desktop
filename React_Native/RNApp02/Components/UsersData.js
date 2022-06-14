import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

const UsersData = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        // "https://thapatechnical.github.io/userapi/users.json"
       " http://localhost:3000/posts"

      );
      const myData = await response.json();
      setMyUserData(myData);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>| Users Data |</Text>
      <FlatList
        data={myUserData}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={{fontSize:30}} >{item.id}</Text>
              <Image
                style={styles.tinyLogo}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
              <Text style={{fontSize:15}}>Name  : {item.name}</Text>
              <Text style={{fontSize:15}}>Mobile  : {item.mobile}</Text>
              <Text style={{fontSize:15}}>Email : {item.email}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default UsersData;
