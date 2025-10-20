import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import HomeScreen from "./assets/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App({navigation}:{navigation:any}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Choose Food" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
