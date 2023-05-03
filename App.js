import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Details } from "./screens/Details";
import { Menu } from "./screens/Menu";
import { Overview } from "./screens/Overview";
import { RoleDetails } from "./screens/RoleDetails";
import { Roles } from "./screens/Roles";

// This component is exported as the default export and is named "App"
export default function App() {
  // Here, we create a stack navigator using the createNativeStackNavigator function
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: "HomePage" }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Roles"
            component={Roles}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({ title: route.params.name })}
          />

          <Stack.Screen
            name="RoleDetails"
            component={RoleDetails}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
