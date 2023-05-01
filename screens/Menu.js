import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

// This exports a functional component named "Menu" that accepts a "navigation" prop
export const Menu = ({ navigation }) => {
  const [data] = useState([
    { id: 1, title: "Persons" },
    { id: 2, title: "Roles" },
  ]);

  // This defines a function named "renderTextItem" that takes an "item" argument and returns some JSX
  const renderTextItem = ({ item }) => {
    // This determines the name of the screen to navigate to based on the item's ID
    const screenName = item.id === 1 ? "Overview" : "Roles";
    // This returns a touchable "TouchableOpacity" component that navigates to the appropriate screen on press
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(screenName, {
            name: item.title,
            navigation,
          })
        }
      >
        {/* This displays the item's title within a container */}
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // This returns a view that contains a "FlatList" component and an image
  return (
    <View style={{ backgroundColor: "gray", flex: 1 }}>
      {/* This displays a list of items using the "FlatList" component */}
      <FlatList
        data={data}
        renderItem={renderTextItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* This displays an image in the center of the screen */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://www.lagtinget.ax/sites/www.lagtinget.ax/themes/lt_bootstrap/img/byggnaden.jpg",
          }}
          style={{ width: 420, height: 300 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
