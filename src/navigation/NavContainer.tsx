import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthProvider} from '../ctx/auth-ctx';
import {ThemeSelector} from '../redux/store';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScree';
import WeatherScreen from '../screens/WeatherScreen';
import {useThemeSelector} from '../store/hooks';
import DarkToggle from '../ui/DarkToggle';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function NavContainer() {
  const darkMode = useThemeSelector<ThemeSelector>(
    state => state.theme.darkMode,
  );

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: darkMode ? '#2e3440' : '#ddd',
      primary: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerRight: () => <DarkToggle />,

            headerTintColor: darkMode ? 'white' : 'black',
            headerStyle: {
              backgroundColor: darkMode ? '#2e3440' : 'white',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
