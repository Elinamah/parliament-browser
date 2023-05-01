import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Details } from "./screens/Details";
import { Menu } from "./screens/Menu";
import { Overview } from "./screens/Overview";
import { Roles } from "./screens/Roles";

// This component is exported as the default export and is named "App"
export default function App() {
  // Here, we create a stack navigator using the createNativeStackNavigator function
  const Stack = createNativeStackNavigator();

  // The main return of this component is a View component that contains a NavigationContainer
  // and a Stack Navigator. The NavigationContainer component provides the navigation context
  // for the app, and the Stack.Navigator contains a series of Stack.Screen components that
  // represent the various screens that can be navigated to.
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          {/* Stack.Screen components represent the various screens that can be navigated to.
          The first screen is named "Menu" and is represented by the Menu component. The options 
          prop allows for customization of the screen, including setting the title of the screen 
          to "HomePage" */}
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: "HomePage" }}
          />

          {/* The second screen is named "Overview" and is represented by the Overview component. 
          The options prop allows for customization of the screen, including setting the title of 
          the screen to the value of the "name" parameter that is passed through the navigation. */}
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={({ route }) => ({ title: route.params.name })}
          />

          {/* The third screen is named "Roles" and is represented by the Roles component. The options 
          prop allows for customization of the screen, including setting the title of the screen to 
          the value of the "name" parameter that is passed through the navigation. */}
          <Stack.Screen
            name="Roles"
            component={Roles}
            options={({ route }) => ({ title: route.params.name })}
          />

          {/* The fourth screen is named "Details" and is represented by the Details component. The options 
          prop allows for customization of the screen, including setting the title of the screen to 
          the value of the "name" parameter that is passed through the navigation. */}
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
