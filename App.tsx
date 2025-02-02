import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NewsScreen from './src/screens/NewsScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
