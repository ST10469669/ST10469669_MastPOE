import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { ImageBackground } from 'react-native';

export default function HomeScreen ({navigation}: {navigation:any}) {
  return (
    
    <ImageBackground
      source={require('../chef.webp')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Choose your favorite food!</Text>
      {/* You can add food options here later */}

      <TouchableOpacity
                style={[
                  styles.customButton,
                  { backgroundColor: 'orange', borderWidth: 1, borderColor: 'orange' },
                ]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Home')}
                accessibilityRole="button"
              >
                <Text style={styles.buttonText}>Order Now</Text>
              </TouchableOpacity>
    

        
      </View>
    </ImageBackground>
  );
};

 // <-- Make sure this matches the file name

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
