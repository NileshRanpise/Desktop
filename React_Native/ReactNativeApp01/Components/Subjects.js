import React, { useState,useEffect } from "react";
import { Text, View, Image, Button } from "react-native";

const Subjects = (props) => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });

  return (
    <View>
      <Text style={{ fontSize: 40, color: "blue" }}> | Subjects | </Text>
      <Text style={{ fontSize: 20, color: "green" }}>1. {props.name}</Text>

      <Image
        source={require("../assets/pic.jpg")}
        style={{ width: 300, height: 200 }}
      />
      <Text style={{ fontSize: 50 }}> Counter : {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
      <Text style={{ fontSize: 50 }}> Counter : {count}</Text>
      <Button onPress={() => setCount(count - 1)} title="Decrement" />

      {/* <Image
        source={require("./assets/pic.jpg")}
        style={{ width: 300, height: 400 }}
        resizeMode="repeat"
      /> */}

      {/* <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_960_720.jpg",
        }}
        style={{ width: 300, height: 200 }}
      /> */}
    </View>
  );
};

export default Subjects;
