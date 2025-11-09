import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/WelcomeScreen";
import EditScreen from "./src/EditScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./src/MenuScreen";
import { MenuProvider } from "./context/MenuContext";
import { Ionicons } from "@expo/vector-icons";







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
            let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Welcome") {
            iconName = "home-outline";
          } else if (route.name === "Menu") {
            iconName = "restaurant-outline";
          } else {
            iconName = "create-outline";
          }
            return <Ionicons name={iconName} size={size} color={color} />;
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
