import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity,FlatList,Alert } from "react-native";
import { ImageBackground } from 'react-native';
import { useMenu } from "../context/MenuContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{useState} from "react";

// menu screen component displaying menu items with filtering functionality
export default function MenuScreen() {
  const { menuItems, deleteMenuItem } = useMenu();
  const [filter, setFilter] = useState<"all" | "main" | "dessert" | "drinks">("all");


const handleDelete = (name: string) => {
    Alert.alert(
      "Delete Menu Item",
      `Are you sure you want to delete "${name}" chef?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            if (deleteMenuItem) {
              deleteMenuItem(name);
              Alert.alert("okay", `"${name}" has been deleted.`);
            }
          }
        }
      ],
      { cancelable: true }
    );
  };
// background image and menu list with delete option
  return (
    <ImageBackground
      source={require("../assets/chef.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>🍽️ Chef Christoffel’s Menu</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
          {["all", "main", "dessert", "drinks"].map((course) => (
            <TouchableOpacity 
              key={course}
              style={{
                padding: 8,
                backgroundColor: filter === course ? "tomato" : "#ddd",
                borderRadius: 5,
              }}
              onPress={() => setFilter(course as any)}
            >
              <Text style={{ color: filter === course ? "#fff" : "#333", fontWeight: "bold" }}>
                {course === "all" ? "All" : course.charAt(0).toUpperCase() + course.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


     // FlatList to display menu items
        <FlatList
          data={filter === "all" ? menuItems : menuItems.filter(item => item.category === filter)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.menuCard}>
              <Text style={styles.menuText}>
                {item.name} - R{item.price} ({item.category})
              </Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.name)}>
                <Text style={styles.deleteText}>-</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}
// Styles for the MenuScreen component
const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#222",
  },
  list: {
    flex: 1,
  },
  menuCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    elevation: 2,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "tomato",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});  

  
    
  