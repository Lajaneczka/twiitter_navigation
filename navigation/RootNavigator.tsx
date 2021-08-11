import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";
import { TabNavigator } from "./TabNavigator";
import { HomeStack } from "./HomeStack";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
    //   screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
