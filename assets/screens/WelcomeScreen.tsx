import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';


export default function Welcome({ navigation }: { navigation: any }) {
  return (
    
    <ImageBackground
      source={require('../chef.webp')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Chef Christoffel's App</Text>
        <Text style={styles.subtitle}>Let's order some delicious meals!</Text>

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
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(240, 248, 255, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
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
});
