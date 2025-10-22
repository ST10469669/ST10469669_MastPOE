import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ImageBackground } from 'react-native';
;



export default function MenuScreen({ navigation }: { navigation: any }) {

  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <ImageBackground
      source={require('../chef.webp')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text>Menu</Text>

      <Text>Choose category</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
        mode="dropdown"
      >
        <Picker.Item label="Select..." value="" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
        <Picker.Item label="Drinks" value="drinks" />
      </Picker>

      <Text style={styles.hh}>Description</Text>
      <Text testID="change">{selectedValue}</Text>
      {selectedValue === "main" && <Text testID="change">steak:250,chicken:105</Text>}
      {selectedValue === "dessert" && <Text testID="change">Chocolate cake:R70,strawberry:R100</Text>}
      {selectedValue === "drinks" && <Text testID="change">coke:R40,Fanta:R35</Text>}
       <TouchableOpacity
                style={[
                  styles.customButton,
                  { backgroundColor: 'orange', borderWidth: 1, borderColor: 'orange' },
                ]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Edit')}
                accessibilityRole="button"
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
  },  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    
  },  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  picker: {
    height: 50,
    width: 200,
   
  },
  hh: {
    marginBottom: 100,
  },

});