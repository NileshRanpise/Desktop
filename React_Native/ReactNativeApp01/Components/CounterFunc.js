import React, { useState ,useEffect } from 'react'
import { View ,Text} from 'react-native';
import { Button } from 'react-native';


const CounterFunc = () => {

    const [count,setCount] = useState(0);
    // const [countD,setCountD] = useState(0);

    useEffect(()=>{
        console.log(count);
        
    },[count])

  return (
    <View>
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>| Counter using Function |</Text>
        <Text style={{ textAlign:"center", color: "green", fontSize: 30, fontWeight: "bold" }}> Counter </Text>
        <Text style={{ textAlign:"center", color: "blue", fontSize: 40, fontWeight: "bold" }}>{count}</Text>
        <Button   title='Increament' onPress={()=>{setCount(count + 1)}} />

        <Text style={{ textAlign:"center", color: "blue", fontSize: 40, fontWeight: "bold" }}>{count}</Text>
        <Button   title='Increament' onPress={()=>{setCount(count - 1)}} />

        {/* <Text style={{ textAlign:"center", color: "blue", fontSize: 40, fontWeight: "bold" }}>{countD}</Text>
        <Button   title='Decrement' onPress={()=>{setCountD(countD - 1)}} /> */}
    </View>
  )
}

export default CounterFunc