import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from "socket.io-client";

export default function App() {

  useEffect(() => {
    // console.log("HEELO")
    const socket = io("http://192.168.1.11:3000",{
      "force new connection": true,
            "reconnectionAttempts": "Infinity", 
            "timeout": 10001, 
            "transports": ["websocket"]
    })
    
 });

  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
