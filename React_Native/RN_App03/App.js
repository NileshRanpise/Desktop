// Drawer Navigator
// Component that renders a navigation drawer which can be opened and closed via gestures.
// Note - To use it you have to config babel then clear cache using expo r -c

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Components/Home';
import ListData from './Components/ListData';
import AddData from './Components/AddData';
import EditData from "./Components/EditData";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='List Data' component={ListData} />
      <Drawer.Screen name='Add Data' component={AddData} />
      <Drawer.Screen name='Edit Data' component={EditData} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

