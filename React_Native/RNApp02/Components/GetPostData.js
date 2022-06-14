import React, { useState } from "react";
import {StyleSheet,View,Platform,TextInput,Button,} from "react-native";
import axios from "axios";

// update this url -> "<new_ngrok_host_url>/posts"
const url = "http://localhost:3000/posts";

// const headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

export default function GetPostData() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addPost = async(name,email) => {

    //  let [name,email] = student;
      
      try {
        await axios.post(url, {name,email});
        console.log(name,email);
      } catch (error) {
        console.log("Something is Wrong");
        console.log(error);
      }
    }
   
  // const addPost = (name, email) => {
  //   fetch(url, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify({
  //       name,
  //       email,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       console.log("post:", resJson);
  //       updatePost();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };



  return (
   <View>
     <TextInput
         style={styles.input}
          label="Name"
          placeholder="Enter ur name..."
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
        />
        <TextInput
         style={styles.input}
          label="Email"
          placeholder="Enter ur email id..."
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
      <Button
        title="Press me"
        onPress={() => addPost(name,email)}
        // onPress={() => addPost(student)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    marginTop: Platform.OS === "android" ? 24 : 0,
    padding: 16,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "steelblue",
  },
  buttonText: {
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
