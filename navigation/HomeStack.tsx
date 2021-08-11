import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Tweet } from "../screens/Tweet";
import { Feed } from "../screens/Feed";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Tweet" component={Tweet} />
    </Stack.Navigator>
  );
};
