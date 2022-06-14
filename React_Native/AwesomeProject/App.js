import { Text, View, StyleSheet, Button, Alert, ActivityIndicator, ScrollView, FlatList, 
  TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Image, ImageBackground, 
  ToastAndroid, TextInput } from "react-native";

  import { useState } from 'react';

const Name = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}> {props.name} </Text>
      <Text style={{ fontSize: 40 }}> {props.age} </Text>
    </View>
  );
};

const MyAlert = () => {
  "Alert Title",
    "This is a alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Ok",
        onPress: () => console.log("OK Pressed"),
      },
    ];
};

const DATA = [
  { id: "1", name: "Sonam" },
  { id: "2", name: "Rahul" },
  { id: "3", name: "Sumit" },
  { id: "4", name: "Sameer" },
  { id: "5", name: "Jay" },
  { id: "6", name: "Ali" },
  { id: "7", name: "Moin" },
  { id: "8", name: "Sahil" },
  { id: "9", name: "Rani" },
  { id: "10", name: "Jack" },
];

export default function App() {
  const [text, setText] = useState("")
  const [num, setNum] = useState(null)

  return (
    <View style={[styles.container, styles.otherstyle]}>

      {/* <Name name="Nilesh" age="29" />
      <Name name="Arjun" />
      <Name name="Ranpise" /> */}

      {/* <Text style={{fontSize:100}} >Hello World !! </Text>
      
      <Text style={{ fontSize: 28 }} numberOfLines={3} onPress={()=>{console.log("Text Clicked !!")}}
        selectable
      >
        Start This is long text Start This is long textStart This is long
        textStart This is long text Start This is long textStart This is long
        textStart This is long text This is long text This is long text This is
        long text end
      </Text>

      <Text
        style={{
          fontSize: 30,
          paddingTop: 50,
          paddingLeft: 10,
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
          paddingBottom: 50,
          border:10,
          borderColor:"blue"
        }}
      >
        React Native
      </Text> */}

      {/* <Button title="Click Me" color="purple" onPress={()=>{ console.log("Clicked !!") }} />
      <Button title="Click Me" color="black" onPress={()=>{Alert.alert(" Alert !!")}} />
      <Button title="Click Me" color="red" onPress={MyAlert} /> */}

      {/* <ActivityIndicator size="small" color="red" />
      <ActivityIndicator size="large" color="red" /> */}

      {/* {
        DATA.map(item => <Text key={item.id} style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>)
      } */}
      
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          DATA.map(item => <Text key={item.id} style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>)
        }
      </ScrollView>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          DATA.map(item => <Text key={item.id} style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>)
        }
      </ScrollView> */}


      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Text style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => { console.log("Data Refreshed") }}
        refreshing={false}
      /> */}


      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}


      <FlatList
        data={DATA}

        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => console.log("Item Clicked", item.id)}>
            <Text style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>
          </TouchableOpacity>
        }

        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />


      {/* <TouchableOpacity onPress={() => console.log("Touchable Opacity")}>
        <Text style={{ fontSize: 28 }}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("Touchable Highlight")}>
        <Text style={{ fontSize: 28 }}>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => console.log("Touchable Without Feedback")}>
        <Text style={{ fontSize: 28 }}>Touchable Without Feedback</Text>
      </TouchableWithoutFeedback>
 */}

      {/* <Pressable
        onPress={() => console.log('Pressed')}
        onPressIn={() => { console.log('Press In') }}
        onPressOut={() => { console.log('Press Out') }}
      >
        <Text style={{ fontSize: 28 }}>
          I am Pressable
        </Text>
      </Pressable> */}


      {/* <Image source={require('./assets/pic.jpg')} style={{ width: 300, height: 400 }} />

      <Image source={require('./assets/pic.jpg')} style={{ width: 300, height: 400 }} resizeMode='repeat' />

      <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_960_720.jpg' }} style={{ width: 300, height: 400 }} />

      <ImageBackground source={require('./assets/pic.jpg')} style={{ width: 300, height: 400 }} >
        <Text style={{ fontSize: 24, color: 'white' }}>Sonam</Text>
      </ImageBackground> */}


      {/* <Button title="Click Me" onPress={() => ToastAndroid.show("This is Toast Message", ToastAndroid.SHORT)} /> */}

        {/* <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Write Your Name"
        onPress={console.log(text)}
      /> */}

        {/* <TextInput
        style={styles.input}
        value={num}
        onChangeText={setNum}
        placeholder="Write Your Roll"
        onPress={console.log(num)}
        keyboardType="numeric"
      /> */}
   

      {/* <View style={{ flex: 1, backgroundColor: 'gray', flexDirection: 'row' }} >
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text style={{ fontSize: 50 }}>1</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 50 }}>2</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text style={{ fontSize: 50 }}>3</Text>
        </View>
      </View> */}

      {/* <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'red', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'blue', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120 }}></View>
      </View> */}

      {/* <View style={{ flex: 1, backgroundColor: 'gray', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'red', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'blue', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120 }}></View>
      </View> */}

      {/* <View style={{ flex: 1, backgroundColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <View style={{ backgroundColor: 'red', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'blue', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'pink', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'cyan', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'black', width: 120, height: 120 }}></View>
        <View style={{ backgroundColor: 'yellow', width: 120, height: 120 }}></View>
      </View> */}



    </View>
  );
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
