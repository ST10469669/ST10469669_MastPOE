import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import { ImageBackground } from 'react-native';
import { useMenu } from "../context/MenuContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{useState} from "react";

export default function MenuScreen() {
  const { menuItems, deleteMenuItem } = useMenu();
  const [filter, setFilter] = useState<"all" | "main" | "dessert" | "drinks">("all");


  const filteredItems =
    filter === "all" ? menuItems : menuItems.filter((item) => item.category === filter);

  return (
    <ImageBackground
      source={require("../assets/chef.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>🍽️ Chef Christoffel’s Menu</Text>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          {["all", "main", "dessert", "drinks"].map((course) => (
            <TouchableOpacity
              key={course}
              style={[
                styles.filterButton,
                filter === course && styles.filterButtonActive,
              ]}
              onPress={() => setFilter(course as any)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === course && styles.filterTextActive,
                ]}
              >
                {course === "all" ? "All" : course.charAt(0).toUpperCase() + course.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu List */}
        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.menuCard}>
              <Text style={styles.menuText}>
                {item.name} - R{item.price} ({item.category})
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteMenuItem && deleteMenuItem(item.name)}
              >
                <Text style={styles.deleteText}>❌</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButton: {
    padding: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  filterButtonActive: {
    backgroundColor: "tomato",
  },
  filterText: {
    color: "#333",
    fontWeight: "bold",
  },
  filterTextActive: {
    color: "#fff",
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
    backgroundColor: "#ff4d4d",
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