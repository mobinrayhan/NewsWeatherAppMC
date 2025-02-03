import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import {Text, TouchableOpacity, View} from 'react-native';
import {useAuthCtx} from '../ctx/auth-ctx';
import {ThemeSelector} from '../redux/store';
import {useThemeSelector} from '../store/hooks';

const HomeScreen = () => {
  const {user} = useAuthCtx();
  const navigation = useNavigation();
  const darkMode = useThemeSelector<ThemeSelector>(
    state => state.theme.darkMode,
  );

  const colors = darkMode
    ? {
        text: '#f5f5f5',
        buttonBackground: '#1E90FF',
        buttonText: '#000',
      }
    : {
        background: '#f8f8f8',
        text: '#333',
        buttonBackground: '#007BFF',
        buttonText: '#fff',
      };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>
        Welcome to News & Weather App
      </Text>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.buttonBackground}]}
        onPress={() => navigation.navigate('News')}>
        <Text style={[styles.buttonText, {color: colors.buttonText}]}>
          Check News
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.buttonBackground}]}
        onPress={() => navigation.navigate('Weather')}>
        <Text style={[styles.buttonText, {color: colors.buttonText}]}>
          Check Weather
        </Text>
      </TouchableOpacity>

      {user ? (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.buttonBackground}]}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={[styles.buttonText, {color: colors.buttonText}]}>
            Profile
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.buttonBackground}]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, {color: colors.buttonText}]}>
            Login
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default HomeScreen;
