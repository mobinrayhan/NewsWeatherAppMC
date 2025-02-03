import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuthCtx} from '../ctx/auth-ctx';
import {ThemeSelector} from '../redux/store';
import {useThemeSelector} from '../store/hooks';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {signIn, loading} = useAuthCtx();

  const darkMode = useThemeSelector<ThemeSelector>(
    state => state.theme.darkMode,
  );

  const handleLogin = async () => {
    await signIn(email, password);
  };

  return (
    <View style={[styles.container]}>
      <Text
        style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>
        Login
      </Text>

      <TextInput
        style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
        placeholder="Email"
        placeholderTextColor={darkMode ? 'white' : '#999'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        selectTextOnFocus={!loading}
        editable={!loading}
      />

      <TextInput
        style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
        placeholder="Password"
        placeholderTextColor={darkMode ? 'white' : '#999'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        selectTextOnFocus={!loading}
        editable={!loading}
      />

      <TouchableOpacity
        style={[
          styles.button,
          darkMode ? styles.darkButton : styles.lightButton,
        ]}
        onPress={handleLogin}>
        <Text
          style={[
            styles.buttonText,
            darkMode ? styles.darkButtonText : styles.lightButtonText,
          ]}>
          {loading ? 'Logging ... ' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text
          style={[
            styles.linkText,
            darkMode ? styles.darkLinkText : styles.lightLinkText,
          ]}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#2e3440',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#ffdead',
  },
  lightText: {
    color: '#2e3440',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  darkInput: {
    borderColor: '#1E90FF',
    backgroundColor: '#3b4252',
    color: 'white',
  },
  lightInput: {
    borderColor: '#1E90FF',
    backgroundColor: '#f5fffa',
    color: '#2e3440',
  },
  button: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  darkButton: {
    backgroundColor: '#1E90FF',
  },
  lightButton: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  darkButtonText: {
    color: '#2e3440',
  },
  lightButtonText: {
    color: '#f8f8ff',
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  darkLinkText: {
    color: '#1E90FF',
  },
  lightLinkText: {
    color: '#1e90ff',
  },
});
