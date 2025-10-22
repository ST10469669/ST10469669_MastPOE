import React,{ useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ImageBackground } from 'react-native';
import { useMenu } from "../context/MenuContext";




export default function MenuScreen({ navigation }: { navigation: any }) {
const [selectedCategory, setSelectedCategory] = useState<"" | "main" | "dessert" | "drinks">("");

  const { menuItems } = useMenu();

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <ImageBackground source={require('../assets/chef.webp')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <Text style={styles.subtitle}>Choose category</Text>

        <Text style={styles.totalText}>Total Menu Items: {menuItems.length}</Text>


        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="Select..." value="" />
            <Picker.Item label="Main" value="main" />
            <Picker.Item label="Dessert" value="dessert" />
            <Picker.Item label="Drinks" value="drinks" />
          </Picker>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        {menuItems.map((item) => (
          <Text key={item.name} style={{ color: "red" }}>
            {item.name} is in {item.category}
          </Text>
        ))}

        {selectedCategory === "" && (
  <Text>Please select a category to view items.</Text>
)}

{selectedCategory !== "" && filteredItems.length === 0 && (
  <Text>No items available in this category.</Text>
)}

{selectedCategory !== "" && filteredItems.length > 0 && (
  <>
    {filteredItems.map((item, index) => (
      <Text key={index} style={styles.itemText}>
        {item.name}: R{item.price}
      </Text>
    ))}
  </>
)}


        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "orange" }]}
          onPress={() => navigation.navigate("Edit")}
        >
          <Text style={styles.buttonText}>Edit Menu</Text>
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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "#555",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    width: 200,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",

  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  totalText: {
  fontSize: 16,
  color: "#444",
  marginBottom: 10,
  fontWeight: "500",
}

});