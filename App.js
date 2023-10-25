import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { useState } from 'react';

GoogleSignin.configure({
  webClientId: '321842716129-sfi5ifslhkpdm6d94lbjdkjn8pt9n48u.apps.googleusercontent.com',
});

export default function App() {

  const[email, setEmail] = useState("");

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
    
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
        console.log(error)
        console.log("--------")
        console.log(error.code)
    }
  } 

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
      <Button
        title="Google Sign-In"
        onPress={() => signOut().then(() => console.log('Signed out with Google!'))}
      />
      <StatusBar style="auto" />
    </View>
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
