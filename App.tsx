import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import EditScreen from "./screens/EditScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./screens/MenuScreen";
import { MenuProvider } from "./context/MenuContext";






const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            const emoji =
              route.name === "Welcome"
                ? "🏠"
                : route.name === "Menu"
                ? "🍽️"
                : "✏️";
            return <Text style={{ fontSize: size ?? 24, color }}>{emoji}</Text>;
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Edit" component={EditScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
    </MenuProvider>
   
  );
}
