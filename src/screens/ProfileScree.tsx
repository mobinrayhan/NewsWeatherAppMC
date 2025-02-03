import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuthCtx} from '../ctx/auth-ctx';
import {ThemeSelector} from '../redux/store';
import {useThemeSelector} from '../store/hooks';

const ProfileScreen = () => {
  const {signOut, user} = useAuthCtx();
  const darkMode = useThemeSelector<ThemeSelector>(
    state => state.theme.darkMode,
  ) as boolean;
  const styles = createStyles(darkMode);

  return (
    user && (
      <View style={styles.userContainer}>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>User ID: {user.uid}</Text>
        <Pressable onPress={signOut} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    )
  );
};

const createStyles = (colorScheme: boolean) =>
  StyleSheet.create({
    userContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      gap: 10,
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
      color: colorScheme ? '#fff' : '#333',
    },
    button: {
      backgroundColor: '#1e90ff',
      padding: 15,
      width: '100%',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default ProfileScreen;
