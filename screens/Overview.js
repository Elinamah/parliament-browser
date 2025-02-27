import { ListItem, Avatar, SearchBar } from "@rneui/themed";
import axios from "axios";
import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";

// Define a functional component called Overview
export const Overview = ({ navigation }) => {
  // Declare state variables
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  // Use the useEffect hook to make an API request when the component mounts
  useEffect(() => {
    axios
      .get("https://api.lagtinget.ax/api/persons.json?state=1")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => {
        Alert.alert("Network error: " + err, "Please try again later");
      });
  }, []);

  // Define a function to update the search term and filter the data accordingly
  const updateSearch = (newSearch) => {
    setSearch(newSearch);

    if (newSearch === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter(
          (person) =>
            person.first_name.toLowerCase().match(newSearch.toLowerCase()) ||
            person.last_name.toLowerCase().match(newSearch.toLowerCase())
        )
      );
    }
  };

  // Define a function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate("Details", { name: item.name, id: item.id })
      }
    >
      <Avatar
        rounded
        size="large"
        source={item.image && { uri: item.image.url }}
        title={item.first_name.charAt(0) + item.last_name.charAt(0)}
        overlayContainerStyle={styles.avatar}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  // Return the JSX for the component
  return (
    <View style={styles.container}>
      {/* Render the search bar */}
      <SearchBar
        placeholder="Search by name"
        lightTheme="true"
        inputContainerStyle={styles.searchBar}
        onChangeText={updateSearch}
        value={search}
      />
      {/* Render the FlatList */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    backgroundColor: "lightgrey",
  },
  searchBar: {
    backgroundColor: "white",
  },
});
