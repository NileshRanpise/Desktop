import React from 'react';
import {useState} from "react";
import {  Text, View ,StyleSheet,TextInput} from 'react-native';

const Teachers = (props) => {

  const [text,setText] = useState("");
  const [num,setNum] = useState(null);

  return (
    <View>
    <Text  style={{fontSize:40,color:"blue"}} > | Teachers Info | </Text>
    <Text style={{fontSize:20,color:"green"}} >1. {props.name}</Text>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Write Your Name"
        onPress={console.log(text)}
      />

        <TextInput
        style={styles.input}
        value={num}
        onChangeText={setNum}
        placeholder="Write Your Roll"
        onPress={console.log(num)}
        keyboardType="numeric"
      />
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  otherstyle: {
    margin: 50,
    borderWidth: 5,
    borderColor: "blue",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Teachers