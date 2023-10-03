import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import SigninScreen from './pages/SigninScreen';
import HomePage from './pages/HomePage';
import OverLay from './pages/OverLay';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {loggedIn ? 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">{(props)=> <OverLay {...props}/>}</Stack.Screen>
      </Stack.Navigator>
      :<Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home">{(props)=> <SigninScreen {...props} setLoggedIn={setLoggedIn}/>}</Stack.Screen>
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
