import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens.js/Home.js'
import IssLocation from './screens.js/IssLocation'
import MeteorsScreen from './screens.js/Meteors'
import UpdateScreen from './screens.js/Update'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()


export default function App() {
  
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" 
  screenOptions={{
headerShown:false
  }}>
  <Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="IssLocation" component={IssLocation} />
<Stack.Screen name="Meteors" component={MeteorsScreen} />
<Stack.Screen name="Update" component={UpdateScreen} />
</Stack.Navigator>
</NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


