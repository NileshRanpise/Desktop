import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function Home() {
  return (
    <View style={styles.container} >
      <Text style={{fontSize:40}} >Home page !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    margin:40,
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
export default Home;
