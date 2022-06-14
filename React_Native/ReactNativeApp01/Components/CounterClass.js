import React, { Component } from 'react';
import { View ,Text,Button} from 'react-native';


export default class CounterClass extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

 
  componentDidMount() {
   console.log(this.state.count);
  }
  componentDidUpdate() {
    console.log(this.state.count);
  }

  render() {
    return (
      <View> 
         <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>| Counter using classbased |</Text>
        <Text style={{ textAlign:"center", color: "green", fontSize: 30, fontWeight: "bold" }}> Counter </Text>
        <Text style={{ textAlign:"center", color: "blue", fontSize: 40, fontWeight: "bold" }}>{this.state.count}</Text>
        <Button title='increment' onPress={() => this.setState({ count: this.state.count + 1 })} />
        <Text style={{ textAlign:"center", color: "blue", fontSize: 40, fontWeight: "bold" }}>{this.state.count}</Text>
        <Button title='decrement' onPress={() => this.setState({ count: this.state.count - 1 })} />
      </View>
    )
  }
}
