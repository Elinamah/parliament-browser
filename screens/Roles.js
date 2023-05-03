import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

export const Roles = ({ navigation }) => {
  // Declare state variables
  const [roles, setRoles] = useState([]);
  const [persons, setPersons] = useState([]);

  // Use the useEffect hook to make an API request when the component mounts
  useEffect(() => {
    // Make both API requests simultaneously using Promise.all
    Promise.all([
      axios.get("https://api.lagtinget.ax/api/roles.json?state=1"),
      axios.get("https://api.lagtinget.ax/api/persons.json?state=1"),
    ])
      .then((responses) => {
        setRoles(responses[0].data);
        setPersons(responses[1].data);
      })
      .catch((err) => {
        Alert.alert("Network error: " + err, "Please try again later");
      });
  }, []);
  //console.log(persons);

  const renderRoleItem = ({ item }) => {
    console.log(item.id);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("RoleDetails", { id: item })}
      >
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={roles}
        renderItem={renderRoleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
    minWidth: 200,
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
