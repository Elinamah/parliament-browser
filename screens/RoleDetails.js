/* eslint-env browser */
// Add line above to get rid of false positive eslint warning for
// undefined AbortController
// See also https://github.com/eslint/eslint/issues/15663

/* import { Card, ListItem } from "@rneui/themed";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";

export const RoleDetails = ({ route }) => {
  // These are state variables for the component
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(route.id);

  useEffect(() => {
    const controller = new AbortController();

    fetchTasksWithIndicator(route.params.id, controller)
      .catch((err) => {
        // If the fetch request was cancelled, log a message to the console
        if (err.name !== "CanceledError") {
          Alert.alert("Network error: " + err, "Please try again later");
        } else {
          console.log("Was cancelled");
        }
      })
      .finally(() => setLoading(false));

    // This returns a function that will be called when this component is unmounted, which aborts any in-progress fetch requests
    return () => controller.abort();

    // This empty array means that this hook will only run once (when the component mounts)
  }, []);

  // This function fetches tasks from an API endpoint with an ID and the given AbortController object,
  // and sets the component's "tasks" state to the fetched tasks
  const fetchTasksWithIndicator = async (id, controller) => {
    const personResponse = await axios.get(
      `https://api.lagtinget.ax/api/persons/${id}.json`,
      {
        signal: controller.signal,
      }
    );

    console.log(personResponse);

    const fetchedTasks = await Promise.all(
      personResponse.data.bindings.map(async ({ organization, role }) => {
        const organizationResponse = await axios.get(
          `https://api.lagtinget.ax/api/organizations/${organization}.json`,
          {
            signal: controller.signal,
          }
        );

        const roleResponse = await axios.get(
          `https://api.lagtinget.ax/api/roles/${role}.json`,
          {
            signal: controller.signal,
          }
        );

        return Promise.resolve({
          organization: organizationResponse.data.title,
          role: roleResponse.data.title,
        });
      })
    );
    setTasks(fetchedTasks);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.role.title}</ListItem.Title>
        <ListItem.Subtitle>{item.organization}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Card containerStyle={{ flex: 1, marginBottom: 15 }}>
        <Card.Title>Tasks</Card.Title>
        <Card.Divider />
        {loading ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <FlatList
            style={{ marginBottom: 50 }}
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); */

export const RoleDetails = ({ route }) => {
  console.log(route.id);
};
