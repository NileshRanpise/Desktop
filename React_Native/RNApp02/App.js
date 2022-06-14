import React from "react";
import { Text, View, FlatList,StyleSheet,StatusBar } from "react-native";
// import UsersData from "./Components/UsersData";
import AddData from "./Components/AddData";
// import GetPostData from "./Components/GetPostData";



export default function App() {
  return (
    <View style={styles.container} >
      {/* <UsersData /> */}
      <AddData />
      {/* <GetPostData /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
