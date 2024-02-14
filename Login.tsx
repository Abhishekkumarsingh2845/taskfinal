import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user's email and password from Firestore authentication collection
      const userDoc = await firestore().collection('k').doc(email).get();
      const userData = userDoc.data();

      // Check if user exists and password matches
      if (userData && userData.password === password) {
        // Alert user upon successful login
        Alert.alert('Success', 'User logged in successfully.');
        console.log('User logged in:', email);
        // Navigate to the next screen upon successful login
      } else {
        // Display error message if user does not exist or password is incorrect
        Alert.alert('Error', 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 23,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
