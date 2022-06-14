import { StyleSheet, Text, View } from "react-native";
// import { Students } from "./Components/Students";
// import Teachers from "./Components/Teachers";
import Subjects from "./Components/Subjects";
import CounterFunc from "./Components/CounterFunc";
import CounterClass from "./Components/CounterClass";
import StudentList from "./Components/StudentList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 40, fontWeight: "bold" }}>
        | Educatinal App |
      </Text>

      <Subjects name="Maths" />
      <CounterFunc />
      <CounterClass />
      <StudentList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 40,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
