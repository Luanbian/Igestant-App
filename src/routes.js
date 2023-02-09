import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Podcast from "./screens/podcast/podcast.index";
import Principal from "./screens/principal/principal.index";
import Rede from "./screens/rede/rede.index";

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Principal") {
              iconName = "menu";
            } else if (route.name === "Podcast") {
              iconName = "play";
            } else {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarPosition="bottom"
      >
        <Tab.Screen name="Rede" component={Rede} />
        <Tab.Screen name="Principal" component={Principal} />
        <Tab.Screen name="Podcast" component={Podcast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
