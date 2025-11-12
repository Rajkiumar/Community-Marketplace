import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./navigation/HomeStack";
import ProfileStack from "./navigation/ProfileStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "HomeTab") {
              iconName = "home";
            } else if (route.name === "ProfileTab") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2e86de",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
