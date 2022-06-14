import React from 'react';
import { Text, View, FlatList} from "react-native";

const StudentList = () => {
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

  return (
    <View>
        <Text style={{ fontSize: 40, color: "blue" }} >| Student List | </Text>
         {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Text style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => { console.log("Data Refreshed") }}
        refreshing={false}
      /> */}


      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 28, padding: 40 }}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />


      {/* <FlatList
        data={DATA}

        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => console.log("Item Clicked", item.id)}>
            <Text style={{ fontSize: 30, padding: 20 }}>{item.name}</Text>
          </TouchableOpacity>
        }

        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      /> */}

    </View>
  )
}

export default StudentList