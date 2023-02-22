import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useFonts } from "expo-font";
import Podcast from "./screens/podcast/podcast.index";
import Principal from "./screens/principal/principal.index";
import Rede from "./screens/rede/rede.index";
import MusicPlayer from "./components/podcast/teste";

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  const [loaded] = useFonts({
    DancingScript: require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsExtraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if(!loaded) { return null }

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
            return <Ionicons name={iconName} size={25} color={color} />
          },
          tabBarStyle: { backgroundColor: '#82B8E7', height: 50},
          tabBarActiveTintColor: 'rgba(20, 15, 15, 0.83)',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.74)',
          tabBarShowLabel: false,
        })}
        tabBarPosition="bottom"
      >
        <Tab.Screen name="Rede" component={MusicPlayer} />
        <Tab.Screen name="Principal" component={Principal} />
        <Tab.Screen name="Podcast" component={Podcast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
