import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Your splash screen image/logo */}
    <Image source={require('../assets/download.png')} />

      <Button
        title="Next"
        onPress={() => navigation.navigate('Registration')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can set your desired background color here
  },
  image: {
    width: '81%',
    height: '80%',
  },
});

export default SplashScreen;
