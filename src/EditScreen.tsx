import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Alert } from "react-native";
import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMenu } from "../context/MenuContext";


export default function EditScreen() {
  const { addMenuItem } = useMenu();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<"main" | "dessert" | "drinks">("main");

  
  const handleAdd = () => {
    if (!name || !price) return;
    Alert.alert(
      "Confirm Add",
      `Are you sure you want to add "${name}" to the menu?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Add",
          onPress: () => {
            addMenuItem({ name, price: Number(price), category });
            setName("");
            setPrice("");
            setCategory("main");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ImageBackground
      source={require("../assets/chef.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}> Edit Menu</Text>

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
        <TextInput
          placeholder="Category (main/dessert/drinks)"
          value={category}
          onChangeText={(text) => setCategory(text as any)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.customButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add to Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
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
    backgroundColor: "tomato",
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
