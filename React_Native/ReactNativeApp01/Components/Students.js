import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";

export const Students = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 40, color: "blue" }}>| Students Info | </Text>
      <Text style={{ fontSize: 20, color: "green" }}> 1.{props.name} </Text>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        
        <Button
          title="Click Me"
          color="purple"
          // onPress={() => {
          //   console.log("Clicked !!");
          // }}
        />
        {/* <Button
          title="Click Me"
          color="black"
          onPress={() => {
            Alert.alert(" Alert !!");
          }}
        />
        <Button title="Click Me" color="red" onPress={MyAlert} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
