import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuthCtx} from '../ctx/auth-ctx';

const ProfileScreen = () => {
  const {signOut, user} = useAuthCtx();

  return (
    user && (
      <View style={[styles.userContainer, styles.userContainer]}>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>User ID: {user.uid}</Text>
        <Pressable onPress={signOut} style={styles.button}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    )
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 20,
    gap: 10,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
});
