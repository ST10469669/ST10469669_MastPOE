import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity,FlatList,TextInput } from "react-native";
import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function HomeScreen({ navigation }: { navigation: any }) {
  const [menuItems, setMenuItems] = useState([
    { name: "Steak", price: 250 },
    { name: "Chicken", price: 100 },
    { name: "Chocolate Cake", price: 250 },
    { name: "Strawberry", price: 100 },
    { name: "Coke", price: 40 },
    { name: "Fanta", price: 35 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addItem = () => {
    if (!name || !price) return;

    setMenuItems([...menuItems, { name, price: Number(price) }]);
    setName("");
    setPrice("");
  };

  return (
    <ImageBackground
      source={require("../chef.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Chef menu editor</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.menuItem}>
              {item.name}: R{item.price}
            </Text>
          )}
        />

        
        <TextInput
          placeholder="Item Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity style={styles.customButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add to Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "orange" }]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginVertical: 5,
    borderRadius: 5,
  },
  customButton: {
    backgroundColor: "#333",
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